// controllers/me.auth.js
const User = require("../model/model");

const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.session.userId).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    console.error("Error fetching user:", err);
    res.status(500).json({ error: "Failed to fetch user" });
  }
};

module.exports = getUserProfile;
