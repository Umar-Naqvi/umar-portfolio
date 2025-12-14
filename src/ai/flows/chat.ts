'use server';

import { model } from '@/lib/gemini';
import { portfolioData } from '@/lib/data';
import { Message } from 'ai';
import { GoogleGenerativeAIStream, Message as GoogleMessage } from 'ai';

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

export async function chat(messages: Message[]) {
  const history = messages.map(
    (message) =>
      ({
        role: message.role,
        parts: [{ text: message.content }],
      } as GoogleMessage)
  );

  const result = await model.generateContentStream({
    contents: [
      {
        role: 'user',
        parts: [{ text: systemPrompt }],
      },
      {
        role: 'model',
        parts: [
          {
            text: 'System instructions understood. I am ready to answer questions about Mohammed Umar Ben Naqvi. 🚀',
          },
        ],
      },
      ...history,
    ],
  });

  return GoogleGenerativeAIStream(result);
}
