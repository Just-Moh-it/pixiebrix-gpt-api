import { Configuration, OpenAIApi } from "openai";
import { config } from "dotenv";
import logger from "./logger.js";

config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Generate response
export const getCompletion = async ({ mood, prompt, user }) => {
  const response = await openai.createCompletion("text-davinci-002", {
    prompt: `Write a ${user && "personalized and "}${mood.join(" and ")} response to ${
      user ? user + " for " : ""
    }their tweet/thread:\n\nTweet: ${prompt}\nReply:`,
    temperature: 0.54,
    max_tokens: 79,
    top_p: 1,
    frequency_penalty: 0.66,
    presence_penalty: 0.73,
  });

  logger.info(
    "Created completion response",
    [mood, prompt, user, response?.data?.choices[0].text].join(" \n")
  );

  return response;
};
