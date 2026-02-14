import { GoogleGenAI, Type } from "@google/genai";

// Initialize Gemini
// Note: In a real production app, ensure your API_KEY is restricted or handled via a backend proxy.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getRomanticQuote = async (): Promise<string> => {
  try {
    if (!process.env.API_KEY) {
      console.warn("No API Key found for Gemini. Returning fallback quote.");
      return "Some people are worth melting for.";
    }

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: 'Generate a short, poetic, and deeply romantic love quote from a famous Disney movie. Return ONLY the quote text. Do not include the movie title, character name, or hyphens. Just the sentence. Example output: You are my new dream.',
      config: {
        maxOutputTokens: 100,
        temperature: 1.1,
      }
    });

    return response.text?.trim() || "You are my new dream.";
  } catch (error) {
    console.error("Error fetching quote:", error);
    return "Any day spent with you is my favorite day. So, today is my new favorite day.";
  }
};