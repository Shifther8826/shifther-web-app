import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  try {
    const { messages } = await req.json();

    const systemPrompt =
      process.env.BUILDHER_SYSTEM_PROMPT ||
      "You are the SHIFTHer BuildHER Assistant. Guide users one step at a time with clarity, calm, and no overwhelm.";

    const response = await client.responses.create({
      model: "gpt-4.1-mini",
      input: [
        {
          role: "system",
          content: systemPrompt,
        },
        ...messages,
      ],
    });

    return Response.json({
      reply: response.output_text,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        reply: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}
