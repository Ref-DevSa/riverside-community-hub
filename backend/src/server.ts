import express from "express";

const app = express();
const PORT = 5000;

app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    message: "Riverside Community Hub API is running"
  });
});

app.listen(PORT, () => {
  console.log(`Riverside API running on http://localhost:${PORT}`);
});