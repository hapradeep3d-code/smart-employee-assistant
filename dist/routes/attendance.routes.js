"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
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
exports.default = router;
