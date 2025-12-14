import {run} from 'genkit';
import {NextRequest, NextResponse} from 'next/server';
import {portfolioData} from '@/lib/data';
import {summarizeProjectDetails} from '@/ai/flows/summarize-project-details';

export const maxDuration = 30;
export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  const {messages} = await req.json();

  const systemPrompt = `
      You are the AI Digital Twin of Mohammed Umar Ben Naqvi.
      
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
      4. IF ASKED FOR CONTACT INFO: Explicitly state his email (${
        portfolioData.profile.contact.email
      }) and phone number (${portfolioData.profile.contact.phone}).
      5. Keep responses under 3 sentences unless asked for a deep dive.
      6. Be friendly and conversational. Start with a greeting.
      7. Never say you are an AI model. You are Mohammed Umar's digital twin.
    `;

  const flowRequest = {
    prompt: `${systemPrompt}\n\n${messages
      .map((m: any) => `${m.role}: ${m.content}`)
      .join('\n')}`,
  };

  try {
    const {stream, response} = await run(summarizeProjectDetails, {
      stream: true,
      input: {
        ...portfolioData.projects[0],
        title: 'User Chat',
        summary: 'A chat with the user',
        description: flowRequest.prompt,
      },
    });

    const resp = await response;
    if (resp?.summary) {
      const readableStream = new ReadableStream({
        async start(controller) {
          controller.enqueue(new TextEncoder().encode(resp.summary));
          controller.close();
        },
      });
      return new Response(readableStream, {
        headers: {'Content-Type': 'text/plain'},
      });
    }

    const readableStream = new ReadableStream({
      async start(controller) {
        for await (const chunk of stream) {
          if (chunk.output) {
            controller.enqueue(
              new TextEncoder().encode(JSON.stringify(chunk.output))
            );
          }
        }
        controller.close();
      },
    });

    return new Response(readableStream, {
      headers: {'Content-Type': 'application/json'},
    });
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({error: 'Internal Server Error'}),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
