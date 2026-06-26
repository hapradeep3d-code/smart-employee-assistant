import { Router } from "express";

const router = Router();

router.get(
  "/",
  async (
    req,
    res
  ) => {
    return res.json({
      success: true,
      message:
        "Chats exported successfully",
    });
  }
);

export default router;