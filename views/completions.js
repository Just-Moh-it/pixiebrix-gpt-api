import { Router } from "express";
import { getCompletion } from "../lib/ai.js";

const router = Router();

// Routes
router.post("/", async (req, res) => {
  const { mood, user } = req.body;
  const { prompt } = req.headers;

  const completion = await getCompletion({
    prompt,
    user,
    mood,
  });

  const responseText = completion.data.choices[0]?.text.trim("\n");

  return res.json({ completion: responseText });
});

export default router;
