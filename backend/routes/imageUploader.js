const express = require("express");
require("dotenv").config();

const fs = require("fs");
const path = require("path");

const router = express.Router();

router.get("/images", (req, res) => {
    const uploadsDir = path.join(__dirname, "../uploads");

    fs.readdir(uploadsDir, (err, files) => {
        if (err) {
            return res.status(500).json({ message: "Error reading directory" });
        }

        const imageUrls = files.map(file => `${process.env.BASE_URL}/uploads/${file}`);
        res.json(imageUrls);
    });
});

module.exports = router;
