import { Router } from "express";

const router = Router();

router.post("/check-in", (req, res) => {
  res.json({
    message: "Checked In Successfully",
  });
});

router.post("/check-out", (req, res) => {
  res.json({
    message: "Checked Out Successfully",
  });
});

router.get("/history", (req, res) => {
  res.json([
    {
      date: "2026-06-29",
      status: "Present",
    },
  ]);
});

export default router;