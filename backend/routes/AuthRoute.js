const express = require("express");
const Signup = require("../controllers/signup.auth.js");
const LoginData = require("../controllers/login.auth.js");
const { User } = require("../model/model.js");

const router = express.Router();

// 🟢 Register
router.post("/register", Signup);

// 🟢 Login
router.post("/login", LoginData);

// 🟢 Get User Details
router.post("/getUserDetails", async (req, res) => {
  try {
    const { id } = req.body;
    if (!id) return res.status(400).json({ error: "User ID required" });

    const user = await User.findById(id).select("-password");
    if (!user) return res.status(404).json({ error: "User not found" });

    res.json(user);
  } catch (err) {
    console.error("Error fetching user details:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// 🟢 Update Profile (New Route)
router.put("/updateProfile/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phone, location, profileImage } = req.body;

    // Validate
    if (!id) return res.status(400).json({ error: "User ID required" });

    // Update user
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        fullName: name, // field name in DB may be "fullName"
        email,
        phone,
        location,
        profileImage,
      },
      { new: true } // return updated document
    ).select("-password");

    if (!updatedUser)
      return res.status(404).json({ error: "User not found" });

    res.json({
      message: "Profile updated successfully",
      user: updatedUser,
    });
  } catch (err) {
    console.error("Error updating profile:", err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;

