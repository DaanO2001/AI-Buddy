# AI-Buddy — lokaal draaien

## Vereisten

- [Node.js](https://nodejs.org/) (versie 18 of hoger)
- [Vercel CLI](https://vercel.com/docs/cli) — nodig om de serverless API lokaal te draaien

Vercel CLI installeren:
```
npm install -g vercel
```

## Installatie

```
npm install
```

## Omgevingsvariabelen

Maak een bestand `.env.local` aan in de root van het project met de volgende inhoud:

```
GROQ_API_KEY=jouw_groq_api_key
```

Optioneel — als je wachtwoordbeveiliging wil inschakelen:

```
APP_PASSWORD=jouwwachtwoord
```

Zonder `APP_PASSWORD` slaat de app het loginscherm automatisch over.

Een Groq API key aanmaken kan op [console.groq.com](https://console.groq.com).

## Lokaal starten

```
vercel dev
```

De app is daarna bereikbaar op `http://localhost:3000`.

> Gebruik `vercel dev` en **niet** `npm run dev`. Met `npm run dev` draait alleen de frontend (Vite) en werkt de `/api/chat` route niet.
