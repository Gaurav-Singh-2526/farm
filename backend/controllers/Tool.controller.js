// controllers/toolController.js
const Tool = require("../model/tool");

const searchTools = async (req, res) => {
  const { name, lat, lon } = req.query;

  if (!lat || !lon) {
    return res.status(400).json({ error: "Location required" });
  }

  try {
    const tools = await Tool.aggregate([
      {
        $geoNear: {
          near: {
            type: "Point",
            coordinates: [parseFloat(lon), parseFloat(lat)],
          },
          distanceField: "distance",
          spherical: true,
          maxDistance: 50000, // 50 km radius
        },
      },
      { $match: { name: { $regex: name, $options: "i" } } },
    ]);

    res.json(tools);
  } catch (error) {
    console.error("Error in searchTools:", error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { searchTools };
