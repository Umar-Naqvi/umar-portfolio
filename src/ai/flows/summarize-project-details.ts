'use server';

/**
 * @fileOverview Summarizes the key details of a project using AI.
 *
 * - summarizeProjectDetails - A function that summarizes project details.
 * - SummarizeProjectDetailsInput - The input type for the summarizeProjectDetails function.
 * - SummarizeProjectDetailsOutput - The return type for the summarizeProjectDetails function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeProjectDetailsInputSchema = z.object({
  title: z.string().describe('The title of the project.'),
  summary: z.string().describe('A short summary of the project.'),
  description: z.string().describe('A detailed description of the project.'),
  metrics: z.array(z.string()).describe('A list of key metrics for the project.'),
  stack: z.array(z.string()).describe('A list of technologies used in the project.'),
});
export type SummarizeProjectDetailsInput = z.infer<typeof SummarizeProjectDetailsInputSchema>;

const SummarizeProjectDetailsOutputSchema = z.object({
  summary: z.string().describe('A concise AI-generated summary of the project details.'),
});
export type SummarizeProjectDetailsOutput = z.infer<typeof SummarizeProjectDetailsOutputSchema>;

export async function summarizeProjectDetails(input: SummarizeProjectDetailsInput): Promise<SummarizeProjectDetailsOutput> {
  return summarizeProjectDetailsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeProjectDetailsPrompt',
  input: {schema: SummarizeProjectDetailsInputSchema},
  output: {schema: SummarizeProjectDetailsOutputSchema},
  prompt: `You are an AI assistant designed to summarize project details.

  Given the following information about a project, create a concise summary highlighting its purpose, key achievements, and technologies used.

  Title: {{{title}}}
  Summary: {{{summary}}}
  Description: {{{description}}}
  Metrics: {{#each metrics}}{{{this}}}, {{/each}}
  Stack: {{#each stack}}{{{this}}}, {{/each}}

  Summary:`, 
});

const summarizeProjectDetailsFlow = ai.defineFlow(
  {
    name: 'summarizeProjectDetailsFlow',
    inputSchema: SummarizeProjectDetailsInputSchema,
    outputSchema: SummarizeProjectDetailsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
