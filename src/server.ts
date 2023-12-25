import app from "./app";
import mongoose from "mongoose";
import config from "./config";
const port = 5000;
async function server() {
  try {
    mongoose.connect(config.database_url);

    app.listen(config.port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
server();
// console.log(process.cwd());
