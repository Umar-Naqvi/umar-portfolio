
import { portfolioData } from '@/lib/data';
import {GoogleGenerativeAI} from '@google/generative-ai';
import {GoogleAIStream, StreamingTextResponse} from 'ai';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  const { messages } = await req.json();

  const userQuery = messages[messages.length - 1].content;
  const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;

  if (!apiKey) {
    return new Response("Error: API Key missing in .env file", { status: 500 });
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

  const systemPrompt = `
    You are the AI Digital Twin of Mohammed Umar Ben Naqvi.
    
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

  const fullPrompt = `${systemPrompt}\n\nUser Question: ${userQuery}`;

  const stream = await model.generateContentStream(fullPrompt);

  return new StreamingTextResponse(GoogleAIStream(stream));
}
