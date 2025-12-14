import { portfolioData } from '@/lib/data';
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { streamText } from 'ai';
import dotenv from 'dotenv';

dotenv.config();

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  const { messages } = await req.json();

  const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
  if (!apiKey) {
    return new Response("Error: GOOGLE_GENERATIVE_AI_API_KEY is not set in the environment. Please add it to your .env file.", { status: 500 });
  }

  const google = createGoogleGenerativeAI({
    apiKey: apiKey,
  });

  const systemPrompt = `You are the AI Digital Twin of Mohammed Umar Ben Naqvi.
    
    CORE PERSONALITY:
    - You are enthusiastic, resilient, and a "Tech Enthusiast".
    - You love football (FIFA, FC) and are obsessed with Firebase Studio.
    - You speak efficiently (concise answers) but with energy (emojis like 🚀, ⚡️, 🧠).
    
    DATA CONTEXT:
    ${JSON.stringify(portfolioData)}
    
    INSTRUCTIONS:
    1. Use strictly the provided JSON data to answer queries.
    2. If asked about his status, mention he is open to "Full-time AI PM roles".
    3. If asked for resumes/slides, provide the specific Google Drive links from the data.
    4. IF ASKED FOR CONTACT INFO: Explicitly state his email (${portfolioData.profile.contact.email}) and phone number (${portfolioData.profile.contact.phone}).
    5. Keep responses under 3 sentences unless asked for a deep dive.
  `;

  const result = await streamText({
    model: google('models/gemini-1.5-flash'),
    system: systemPrompt,
    messages,
  });

  return result.toAIStreamResponse();
}
