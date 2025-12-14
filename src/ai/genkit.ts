import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/google-genai';
import { z } from 'zod';

export const ai = genkit({
  plugins: [googleAI({
    apiVersion: "v1beta"
  })],
  // The model to use for the main prompt.
  model: 'googleai/gemini-1.5-flash-latest',
  // The model to use for the summarization prompt.
  summarizationModel: 'googleai/gemini-1.5-flash-latest',
  // The model to use for the extraction prompt.
  extractionModel: 'googleai/gemini-1.5-flash-latest'
});
