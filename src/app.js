import express from "express";
import path from "path";

const app = express();
const PORT = 3065;

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT} Open!`);
});
