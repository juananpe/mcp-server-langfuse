import dotenv from "dotenv";
import { Langfuse } from "langfuse";

dotenv.config({ path: '.env', quiet: true });

const langfuse = new Langfuse();

const prompt = await langfuse.getPrompt("issue/github");

console.log(prompt)
