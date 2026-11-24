# B-Tech Loan Wala Chatbot Integration

The existing chatbot has been integrated into the React website without changing the existing page structure.

## Files added

- `public/chatbot/index.html` — existing chatbot application
- `public/chatbot/BTech_logo.png` — chatbot logo
- `src/components/Chatbot.jsx` — React floating launcher + iframe wrapper
- `src/components/Chatbot.css` — responsive chatbot styles

## App.jsx change

`Chatbot` is imported and rendered globally so it appears on all routes.

## Run

```bash
npm install
npm run dev
```

Then open the Vite URL and click **Chat with us** at the bottom-right.

## How it works

The React component opens the existing chatbot from:

`/chatbot/index.html`

The original chatbot code is kept intact, so its loan flow, eligibility, documents, EMI calculator, FAQs and WhatsApp handoff remain available.

## Production

Run:

```bash
npm run build
```

The chatbot files under `public/chatbot` are copied automatically into the production build.
