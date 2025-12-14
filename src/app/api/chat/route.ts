import { chat } from '@/ai/flows/chat';
import { Message, streamToResponse } from 'ai';

export const maxDuration = 30;
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  const { messages }: { messages: Message[] } = await req.json();

  try {
    const stream = await chat(messages);
    return streamToResponse(stream);
  } catch (error) {
    console.error('[LPM] An error occurred in the chat API route:', error);
    // Forwards the error to the client. The Vercel AI SDK will show this in the UI.
    return new Response(
      'An error occurred. Please check the server logs for more details.',
      {
        status: 500,
      }
    );
  }
}
