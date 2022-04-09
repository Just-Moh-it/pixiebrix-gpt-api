import { Router } from "express";
import { getCompletion } from "../lib/ai.js";

const router = Router();

// Routes
router.post("/", async (req, res) => {
  const { prompt, mood, user } = req.body;

  const completion = await getCompletion({
    prompt,
    user,
    mood,
  });

  const responseText = completion.data.choices[0]?.text.trim("\n");

  return res.json({ completion: responseText });
});

export default router;
