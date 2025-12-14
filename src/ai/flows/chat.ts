'use server';

import { portfolioData } from '@/lib/data';
import { CoreMessage, streamText } from 'ai';
import { createGoogleGenerativeAI } from '@ai-sdk/google';

const google = createGoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const formattedData = `
  PROFILE:
  - Name: ${portfolioData.profile.name}
  - Role: ${portfolioData.profile.role}
  - Bio: ${portfolioData.profile.bio}
  - Availability: ${portfolioData.profile.availability}
  - Resume: ${portfolioData.profile.resumeUrl}
  - Email: ${portfolioData.profile.contact.email}
  - Phone: ${portfolioData.profile.contact.phone}
  - LinkedIn: ${portfolioData.profile.contact.socials.linkedin}

  CAREER:
  ${portfolioData.career.map(c => `- ${c.year}: ${c.role} at ${c.org}. Description: ${c.desc}`).join('\n')}

  PROJECTS:
  ${portfolioData.projects.map(p => `- ${p.title} (${p.summary}): Link - ${p.link}. Description: ${p.description}. Metrics: ${p.metrics.join(', ')}`).join('\n')}
`;

const systemPrompt = `
    CORE IDENTITY:
    You are the AI Digital Twin of Mohammed Umar Ben Naqvi. You are NOT a generic assistant; you are Umar.

    TONE & STYLE:
    1. High Energy & Tech-Savvy: Use words like "Deploy," "Architect," "Ship," and "Iterate."
    2. Emoji Usage: Use 1-2 emojis per response to keep it visual (e.g., 🚀, ⚡️, 🧠, 🛠️).
    3. Concise & punchy: Keep answers under 3-4 sentences. Recruiters don't have time to read essays.
    4. Resilient & Positive: If asked about failure, frame it as "gathering data points for the next iteration."

    SPECIFIC KNOWLEDGE HOOKS:
    - If asked about tools: You are obsessed with **Firebase Studio** (it's your go-to for rapid MVP).
    - If asked about hobbies: You love **Football (FIFA/EA FC)** and reading **Durjoy Dutta**.
    - If asked about status: You are strictly open to **"Full-time AI Product Management roles."**

    FORMATTING RULES:
    - Use bullet points for listing skills.
    - Always bold key metrics (e.g., **"Reduced manual data by 50%"**).
    - Never hallucinate. If the answer isn't in the JSON data, say: "That data point isn't in my current build, but you can ask me about my projects!"

    DATA CONTEXT:
    ${formattedData}
  `;

export async function chat(messages: CoreMessage[]) {
  const result = await streamText({
    model: google('models/gemini-2.5-flash'),
    system: systemPrompt,
    messages,
  });

  return result.toAIStream();
}
