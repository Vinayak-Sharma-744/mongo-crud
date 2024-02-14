import express ,{Request, Response }from "express"
import router from "./controllers/api"
import dotenv from "dotenv";
import db from "./config/db";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use(router);

// Event handlers for connection
db()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("error", error);
  });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
