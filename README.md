# AI Keyword Extractor

This is a simple tool built with React and Chakra UI that uses the Open AI [chat completion API](https://platform.openai.com/docs/guides/completion) to extract the best keywords from any given text.

The project was built by following the [Build a Keyword Extractor: React + OpenAI API + Chakra UI](https://www.youtube.com/watch?v=jJNPPP2YEdM) YouTube course from [Brad Traversy](https://github.com/bradtraversy)

<div style="text-align:center">
<img src="screenshot.png" width="500">
</div>

## How to use

Install dependencies:

```bash
npm install
```

Rename `.env.example` to `.env` and add your API key. You can get your key at [https://platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys).

```bash
VITE_OPENAI_API_KEY='ADD_YOUR_KEY_HERE'
```

Important: Your API key is not secure as there is no backend. If you decide to use this tool in production, you should add a backend to it and store the API key there.

Run the dev server:

```bash
npm run dev
```

Open [http://localhost:3500](http://localhost:3500) with your browser to see the result.

To build for production:

```bash
npm run build
```