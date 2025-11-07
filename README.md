# Mistral Chat — A Human AI Conversation

A lightweight, minimal chat app built with **Next.js**, **Tailwind CSS**, and the **Mistral API**, designed to explore how natural and human an AI chat can feel.

---

## Overview

This project demonstrates a conversational interface powered by Mistral’s language models.  
It’s focused on clarity, responsiveness, and simplicity — with subtle design touches that make the chat feel *alive*, not mechanical.

I built this as part of my exploration into how developers can build lightweight, intuitive interfaces around large language models.

---

## Tech Stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Mistral API** for responses

---

## Features

✅ Real-time conversation with Mistral’s models  
✅ Clean and minimal chat interface  
✅ Smooth animations and typing indicators  
✅ Secure server-side API integration  
✅ Easily configurable model version

---

## Project Structure

app/
├── api/
│ └── chat/route.ts # Server route that connects to Mistral API
├── components/
│ ├── ChatWindow.tsx # Main chat interface
│ ├── ChatInput.tsx # Input field + send button
│ ├── MessageBubble.tsx # User/AI messages
│ └── TypingIndicator.tsx # “Mistral is thinking...” animation
├── page.tsx # Entry point
└── layout.tsx # Root layout


---

## Setup & Run Locally

### Clone the repository

```bash
git clone https://github.com/yourusername/mistral-chat.git
cd mistral-chat

npm install

npm run dev
The app will be live at http://localhost:3000


## How It Works
- Each user message is sent through an internal API route (/api/chat), which:
- Validates the message input.
- Sends it to Mistral’s /v1/chat/completions endpoint.
- Receives the model’s structured response.
- Returns the assistant’s reply to the frontend for display.
- This ensures the Mistral API key stays securely on the server side.

## Personal Note
- Building this project reminded me why I love software — turning abstract APIs into something that feels alive. Mistral’s models make that especially exciting, because they don’t just process text — they understand intent. I wanted to build an interface that reflected that same care: simple, smart, and quietly human.

— Kelvin Martyns