// /database/mongodb.js
import mongoose from "mongoose";
import { DB_URI } from "../config/env.js";
if (!DB_URI) throw new Error("DB_URI is not defined");
export default () => mongoose.connect(DB_URI);
