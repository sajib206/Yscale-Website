import { GoogleGenAI } from "@google/genai";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key is missing. Please set the API_KEY environment variable.");
  }
  return new GoogleGenAI({ apiKey });
};

export const generateProjectBrief = async (
  companyName: string,
  projectIdea: string
): Promise<string> => {
  try {
    const ai = getClient();
    // Using flash for speed on a simple text generation task
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `
        You are a senior product manager at a top-tier design agency called Yscale.
        A potential client (${companyName}) wants to book a call regarding: "${projectIdea}".
        
        Generate a concise, professional, and exciting "Preliminary Project Brief" that outlines:
        1. A catchy project title.
        2. 3 Potential Strategic Goals based on their idea.
        3. A recommended "Next Step" for the discovery call.

        Keep it under 200 words. Format with Markdown. Tone: Professional, visionary, confident.
      `,
    });

    return response.text || "Unable to generate brief at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};