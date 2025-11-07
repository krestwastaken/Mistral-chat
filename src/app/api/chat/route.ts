import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    //Incoming user message
    const { message } = await req.json();

    //Send message to Mistral's API
    const response = await fetch("https://api.mistral.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.MISTRAL_API_KEY}`,
      },
      body: JSON.stringify({
        model: "mistral-small", // or mistral-medium, mistral-large
        messages: [{ role: "user", content: message }],
      }),
    });

    //Parse model's reply
    const data = await response.json();

    // Extract assistant message
    const reply = data.choices?.[0]?.message?.content || "No response.";

    //Return formatted response
    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Error in chat route:", error);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
