"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    if (email === "admin@test.com" &&
        password === "12345678") {
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
exports.default = router;
