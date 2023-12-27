import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });
export default {
  port: process.env.PORT,
  database_url: process.env.DB_URL,
  node_env: process.env.Node_Env,
  JWT_SECRET: process.env.JWT_SECRET
  // JWT: process.env.JWT_TOKEN
};
