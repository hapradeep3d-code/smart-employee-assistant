import express from "express";

const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (
    email === "admin@test.com" &&
    password === "12345678"
  ) {
    return res.status(200).json({
      success: true,
      token: "demo-token",
      user: {
        id: "1",
        name: "Admin User",
        email: "admin@test.com",
        role: "SUPER_ADMIN",
      },
    });
  }

  return res.status(401).json({
    success: false,
    message: "Invalid credentials",
  });
});

export default router;