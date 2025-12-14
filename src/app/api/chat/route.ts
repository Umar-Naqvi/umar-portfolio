import {chat} from '@/ai/flows/chat';
import {type CoreMessage} from 'ai';

export const maxDuration = 30;
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  console.log("API Route Hit: /api/chat");
  console.log("Checking for GEMINI_API_KEY:", process.env.GEMINI_API_KEY ? "Found" : "NOT FOUND");

  const {messages}: {messages: CoreMessage[]} = await req.json();

  try {
    const result = await chat(messages);
    return result.toAIStreamResponse();
  } catch (error: any) {
    console.error('[API] An error occurred in the chat API route:', error);
    return new Response(error.message || 'An error occurred. Please check the server logs for more details.', {
      status: 500,
    });
  }
}
