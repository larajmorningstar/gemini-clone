import { GoogleGenAI } from "@google/genai";

// Use the environment variable for the API key
const ai = new GoogleGenAI({ apiKey: "" });

async function runChat(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });
  console.log(response.text);
}

export default runChat;

