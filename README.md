Mistral Chat — A Human AI Conversation

A lightweight, minimal chat app built with Next.js, Tailwind CSS, and the Mistral API — designed to explore how natural and human an AI chat can feel.

Overview

Mistral Chat is a simple yet expressive conversational interface powered by Mistral’s language models. It focuses on clarity, responsiveness, and subtle design touches that make the chat feel alive rather than mechanical. I built this as part of my ongoing exploration into how developers can design lightweight, intuitive interfaces around large language models — bringing personality and simplicity to AI-driven interactions.

Tech Stack

Framework: Next.js 14 (App Router, TypeScript)

Styling: Tailwind CSS

Animation: Framer Motion

AI Model: Mistral API

Features

✅ Real-time conversation with Mistral’s models
✅ Clean and minimal chat interface
✅ Smooth animations and typing indicators
✅ Secure server-side API integration
✅ Easily configurable model version

Project Structure

app/
├── api/
│ └── chat/route.ts — Server route that connects to Mistral API
├── components/
│ ├── ChatWindow.tsx — Main chat interface
│ ├── ChatInput.tsx — Input field + send button
│ ├── MessageBubble.tsx — User/AI messages
│ └── TypingIndicator.tsx — “Mistral is thinking...” animation
├── page.tsx — Entry point
└── layout.tsx — Root layout

Setup & Run Locally

Clone the repository and install dependencies:

git clone https://github.com/krestwastaken/mistral-chat.git

cd mistral-chat
npm install
npm run dev

The app will be live at http://localhost:3000

How It Works

Each user message is sent through an internal API route (/api/chat), which validates the message, sends it to Mistral’s /v1/chat/completions endpoint, receives the structured response, and returns the assistant’s reply to the frontend for display. This design ensures that the Mistral API key remains securely stored on the server side while providing smooth, real-time interactions on the client.

Personal Note

Building this project reminded me why I love software — turning abstract APIs into something that feels alive. Mistral’s models don’t just process text; they understand intent. I wanted to create an interface that reflects that same care: simple, smart, and quietly human.

— Kelvin Martyns