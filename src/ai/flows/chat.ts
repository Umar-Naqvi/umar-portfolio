'use server';

import { portfolioData } from '@/lib/data';
import { CoreMessage } from 'ai';
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { streamText } from 'ai';

// Load dotenv to ensure environment variables are available
import 'dotenv/config';

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
    6. Start the conversation by saying: "System instructions understood. I am ready to answer questions about Mohammed Umar Ben Naqvi. 🚀".
  `;

export async function chat(messages: CoreMessage[]) {
  // IMPORTANT: Initialize the Google AI client *inside* the function
  // to ensure the environment variable is read at runtime on the server.
  const google = createGoogleGenerativeAI({
    // The API key is now read securely on the server
    apiKey: process.env.GEMINI_API_KEY,
  });

  return streamText({
    model: google('gemini-2.5-flash-lite'),
    system: systemPrompt,
    messages,
  });
}
