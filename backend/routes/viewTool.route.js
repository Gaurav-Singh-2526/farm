// now working this 

const express = require("express");
const router = express.Router();
const { Rental } = require("../model/model");

// ✅ Get all tools
router.get("/", async (req, res) => {
  try {
    const tools = await Rental.find();
    res.json(tools);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch tools" });
  }
});

// ✅ Search by tool name
router.get("/search", async (req, res) => {
  const { name } = req.query;
  console.log("Searching for:", name);

  try {
    const query = name
      ? { toolName: { $regex: name, $options: "i" } }
      : {};
    const all = await Rental.find(); // 👈 debug log
    console.log("All tools in DB:", all);

    const results = await Rental.find(query);
    console.log("Results:", results);
    res.json(results);
  } catch (error) {
    console.error("Search error:", error);
    res.status(500).json({ error: "Error while searching tools" });
  }
});

module.exports = router;
