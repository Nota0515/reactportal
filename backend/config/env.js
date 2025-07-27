import dotenv from "dotenv";
if (process.env.NODE_ENV !== "production") dotenv.config();
export const { PORT, DB_URI, NODE_ENV } = process.env;
