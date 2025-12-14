import {chat} from '@/ai/flows/chat';
import {type CoreMessage} from 'ai';

export const maxDuration = 30;
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  const {messages}: {messages: CoreMessage[]} = await req.json();

  try {
    const result = await chat(messages);
    return result.toAIStreamResponse();
  } catch (error: any) {
    console.error('[API_CHAT_ERROR]', error);
    return new Response(error.message || 'An unexpected error occurred.', {
      status: 500,
      headers: { 'Content-Type': 'text/plain' },
    });
  }
}
