import { config } from "dotenv";

// Always load default .env file (Vercel sets envs itself, you don't need to load files manually)
config();

export const { PORT, DB_URI, NODE_ENV } = process.env;
