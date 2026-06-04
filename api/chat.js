module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { contents, systemPrompt, password, checkOnly } = req.body;

  if (process.env.APP_PASSWORD && password !== process.env.APP_PASSWORD) {
    return res.status(401).json({ error: 'Ongeldig wachtwoord' });
  }

  if (checkOnly) {
    return res.status(200).json({ ok: true });
  }

  if (!process.env.GROQ_API_KEY) {
    return res.status(500).json({ error: 'GROQ_API_KEY is not configured' });
  }

  const messages = [
    { role: 'system', content: systemPrompt },
    ...contents.map(c => ({
      role: c.role === 'model' ? 'assistant' : 'user',
      content: c.parts[0].text
    }))
  ];

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data.error?.message || 'Groq API error' });
    }

    const text = data.choices?.[0]?.message?.content ?? '';
    return res.status(200).json({ text });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
