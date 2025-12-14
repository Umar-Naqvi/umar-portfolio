'use server';

import { portfolioData } from '@/lib/data';
import { CoreMessage, streamText } from 'ai';
import { GoogleGenerativeAI } from '@google/generative-ai';

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
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY is not set in the environment variables.');
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

  // Reformat messages for the Google Generative AI SDK
  const googleMessages = messages.map(message => ({
    role: message.role === 'user' ? 'user' : 'model',
    parts: [{ text: message.content as string }],
  }));

  // Remove the last message if it's from the user, as it's the new prompt
  const lastMessage = googleMessages.pop();
  if (!lastMessage || lastMessage.role !== 'user') {
    throw new Error('Last message must be from the user.');
  }
  
  const history = googleMessages;
  const prompt = lastMessage.parts[0].text;
  
  const chatSession = model.startChat({
    history: [
      { role: 'user', parts: [{ text: systemPrompt }] },
      { role: 'model', parts: [{ text: "System instructions understood. I am ready to answer questions about Mohammed Umar Ben Naqvi. 🚀" }]},
      ...history
    ]
  });

  const result = await chatSession.sendMessageStream(prompt);
  
  // Convert the AsyncGenerator to a ReadableStream
  const stream = new ReadableStream({
    async start(controller) {
      for await (const chunk of result.stream) {
        const chunkText = chunk.text();
        if (chunkText) {
          controller.enqueue(chunkText);
        }
      }
      controller.close();
    },
  });

  // This function now returns a ReadableStream, which will be handled in the API route.
  return stream;
}