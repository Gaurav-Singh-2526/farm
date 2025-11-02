
const express = require("express");
const { User } = require("../model/model");
const bcrypt = require("bcryptjs")

const LoginData = async (req, res) => {
    try {
        const { email, password } = req.body;
        const isEmail = await User.findOne({ email: email });

        if (!isEmail) {
            console.log("User does not exist");
            return res.status(400).json({ message: "User does not exist" });
        }


        const match = await bcrypt.compare(password, isEmail.password)

        // if (String(isEmail.Password) === String(Password))
        if (match) {
            // req.session.userId = isEmail._id;
            console.log("Login successful");
            console.log("✅ Sending response user:", isEmail);

            return res.status(200).json({
                message: "Login successful",
                user: {
                    _id: isEmail._id,
                    name: isEmail.name,
                    email: isEmail.email
                }
            });

            // return res.status(200).json({ message: "Login successful"}); 

        } else {
            console.log("Password does not match");
            return res.status(401).json({ message: "Incorrect password" });
        }
    } catch (error) {
        console.log("Login Error:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = LoginData;