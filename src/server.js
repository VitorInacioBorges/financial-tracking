import dotenv from "dotenv";
import app from "./api.js";
import connect from "./config/db.js";

dotenv.config();

const port = process.env.PORT || 3000;

(async () => {
  try {
    await connect(process.env.DATABASE_URI);
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  } catch (error) {
    console.log("Error trying to connect or listen to the api", error);
    process.exit(1);
  }
})();
