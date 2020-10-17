import express from "express";

const app = express();
const PORT = 3065;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT} Open!`);
});
