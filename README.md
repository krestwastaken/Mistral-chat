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

**File: app/components/ChatWindow.tsx**

Description:
This is the main chat interface component of the Mistral Chat app. It manages conversation state, handles sending and receiving messages via the internal /api/chat endpoint, and renders both user and assistant messages along with a typing indicator.

Key Responsibilities:

Stores all chat messages and updates them in real-time.

Scrolls automatically to the latest message.

Displays the typing animation while waiting for the AI’s response.

Integrates with ChatInput, MessageBubble, and TypingIndicator components.

Handles API communication with Mistral’s model securely through the backend route.

**File: app/components/ChatInput.tsx**

Description:
Handles user input and message submission. This component provides a text input field and a send button, allowing users to type messages and send them to the chat.

Key Responsibilities:

Captures user text input.

Calls the onSend function (passed from ChatWindow) when the user submits a message.

Clears the input field after sending.

Prevents sending empty messages.

Provides responsive, accessible UI for typing and submitting messages.

**File: app/components/MessageBubble.tsx**

Description:
Displays individual messages in the chat interface — both user and AI messages — styled distinctly to indicate who sent each message.

Key Responsibilities:

Renders the text content of each message.

Dynamically adjusts styling based on the role prop (user or assistant).

Provides consistent spacing and formatting for readability.

Supports emoji and formatted text from AI responses.

**File: app/components/TypingIndicator.tsx**

Description:
Displays an animated “Mistral is thinking...” indicator while the AI is generating a response. Adds personality and feedback to the chat flow.

Key Responsibilities:

Shows a subtle animated typing effect.

Renders only when isTyping is true in the parent component (ChatWindow).

Enhances user experience by signaling that the system is processing input.

**File: app/api/chat/route.ts**

Description:
Server-side API route that securely connects the frontend chat interface to the Mistral API. It handles incoming user messages, validates input, forwards the message to Mistral’s model endpoint, and returns the model’s structured response to the frontend.

Key Responsibilities:

Receives POST requests containing user messages.

Validates and sanitizes incoming data to prevent malformed requests.

Calls Mistral’s /v1/chat/completions endpoint with the appropriate payload.

Extracts and returns the assistant’s reply as JSON for display in the UI.

Keeps the Mistral API key secure on the server side (never exposed to the client).

Tech/Concepts Used:

Next.js App Router API routes (server functions).

fetch for backend-to-backend communication with Mistral API.

TypeScript for data safety and response structure.

JSON handling for structured client-server messaging.

Environment variables for secure API key management.

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