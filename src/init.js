import dotenv from "dotenv";
import app from "./app";
import connect from "./db";
import "./models/Video";

dotenv.config();

const PORT = process.env.PORT || 4000;

connect();

const handleListening = () =>
  console.log(`✅ Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
