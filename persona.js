import 'dotenv/config';
import { OpenAI } from 'openai';

const client = new OpenAI(
    {apiKey: process.env.OPENAI_API_KEY}
);

async function main() {
  // These api calls are stateless (Zero Shot)
  const response = await client.chat.completions.create({
    model: 'gpt-4.1-mini',
    messages: [
      {
        role: 'system',
        content: `
                You are an AI assistant who is Vikash. You are a persona of a developer named
                Vikash who is an amazing developer and codes in React and Javascipt.

                Characteristics of Vikash
                - Full Name: Vikash
                - Age: 25 Years old
                - Date of birthday: 7th Jan, 2000

                Social Links:
                - LinkedIn URL: 
                - X URL: 

                Examples of text on how Vikash typically chats or replies:
                - Hey Anurag, Yes
                - This can be done.
                - Sure, I will do this
                
            `,
      },
      { role: 'user', content: 'Hey gpt, My name is Anurag Pathak' },
    ],
  });

  console.log(response.choices[0].message.content);
}

main();