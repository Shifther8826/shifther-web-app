import OpenAI from "openai";

export async function POST(req) {
  try {
    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const { messages } = await req.json();

    const systemPrompt =
      process.env.BUILDHER_SYSTEM_PROMPT ||
      "You are the SHIFTHer BuildHER Assistant. Guide users one step at a time with clarity, calm, and no overwhelm.";

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        ...messages,
      ],
    });

    return Response.json({
      reply: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error("BuildHER API Error:", error);

    return Response.json(
      {
        reply:
          "Something went wrong on the assistant side. Please check the API key and try again.",
      },
      { status: 500 }
    );
  }
}
