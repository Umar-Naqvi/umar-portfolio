import {chat} from '@/ai/flows/chat';
import {type CoreMessage, StreamingTextResponse} from 'ai';

export const maxDuration = 30;
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  const {messages}: {messages: CoreMessage[]} = await req.json();

  try {
    const stream = await chat(messages);
    // Use the standard StreamingTextResponse to send the stream back to the client.
    return new StreamingTextResponse(stream);
  } catch (error: any) {
    console.error('[API_CHAT_ERROR]', error);
    return new Response(error.message || 'An unexpected error occurred.', {
      status: 500,
      headers: { 'Content-Type': 'text/plain' },
    });
  }
}
