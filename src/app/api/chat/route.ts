import {chat} from '@/ai/flows/chat';
import {Message, streamToResponse} from 'ai';

export const maxDuration = 30;
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  const {messages}: {messages: Message[]} = await req.json();

  const stream = await chat(messages);

  return streamToResponse(stream);
}
