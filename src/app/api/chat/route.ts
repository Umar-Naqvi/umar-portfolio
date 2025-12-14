import {Message, streamToResponse} from 'ai';
import {chat} from '@/ai/flows/chat';
import {runFlow} from '@genkit-ai/next/server';

export const maxDuration = 30;
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  const {messages}: {messages: Message[]} = await req.json();

  const stream = await runFlow(chat, messages);

  return streamToResponse(stream);
}
