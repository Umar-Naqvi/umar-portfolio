'use server';

import {ai} from '@/ai/genkit';
import {portfolioData} from '@/lib/data';
import {generate} from 'genkit';
import {Message, toGenkitMessage} from 'ai';
import {ReadableStream} from 'stream/web';

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

export async function chat(messages: Message[]): Promise<ReadableStream<any>> {
  const history = messages.map(toGenkitMessage);
  const system = {role: 'system' as const, content: [{text: systemPrompt}]};

  const response = await generate({
    model: 'gemini-1.5-flash-latest',
    history: [system, ...history],
    config: {
      temperature: 0.8,
    },
    stream: true,
  });

  return response.streamText();
}
