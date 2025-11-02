// exports.uploadFile = (req, res) => {
//     console.log("📥 Inside uploadFile Controller");
//     console.log("✅ File received:", req.file);

//     const imageUrl = `http://localhost:5000/uploads/${req.file.filename}`;

//     res.status(200).json({
//         message: "File uploaded successfully",
//         imageUrl: imageUrl, 
//     });
// };

// const { Rental, User } = require("../model/model");

// exports.uploadFile = async (req, res) => {
//     console.log("📥 Inside uploadFile Controller");
//     console.log("✅ File received:", req.file);

//     const imageUrl = `http://localhost:5000/uploads/${req.file.filename}`;

//     try {
//         // Check if user exists or create a new one
//         let user = await User.findOne({ email: req.body.email });
//         if (!user) {
//             user = await User.create({ 
//                 name: req.body.name, 
//                 email: req.body.email, 
//                 password: "temp123"  // Temporary password; handle properly later
//             });
//         }

//         // Save rental entry
//         const rental = new Rental({
//             toolName: req.body.toolName,
//             user: user._id,
//             location: req.body.location,
//             price: req.body.price,
//             imageUrl: imageUrl,
//         });

//         await rental.save();

//         res.status(200).json({
//             message: "File uploaded and rental saved successfully",
//             rental,
//         });
//     } catch (error) {
//         console.error("Error saving rental:", error);
//         res.status(500).json({ error: "Failed to save rental" });
//     }
// };
// 

// const { Rental } = require("../model/model");
// exports.uploadFile = async (req, res) => {
//     console.log("📥 Inside uploadFile Controller");
//     console.log("✅ File received:", req.file);
//     console.log("📩 Request Body:", req.body); // Log the incoming data

//     const imageUrl = `http://localhost:5000/uploads/${req.file.filename}`;

//     try {
//         const rental = new Rental({
//             toolName: req.body.toolName,
//             location: req.body.location,
//             price: req.body.price,
//             imageUrl: imageUrl,
//         });

//         await rental.save();
//         res.status(200).json({
//             message: "File uploaded and rental saved successfully",
//             rental: rental,
//         });
//     } catch (error) {
//         console.error("Error saving rental:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// };


const { Rental } = require("../model/model");
require("dotenv").config();


exports.uploadFile = async (req, res) => {
    console.log("📥 Inside uploadFile Controller");
    console.log("✅ File received:", req.file);
    console.log("📩 Request Body:", req.body); // Log the incoming data

    // Check if all required fields are present
    const { toolName, location, price } = req.body;

    if (!toolName || !location || !price) {
        console.log("❌ Missing required fields!");
        return res.status(400).json({ error: "Please provide toolName, location, and price" });
    }

    const imageUrl = `${process.env.BASE_URL}/uploads/${req.file.filename}`;

    try {
        const rental = new Rental({
            toolName,
            location,
            price: parseFloat(price), // Ensure price is saved as a number
            imageUrl,
        });

        await rental.save();
        console.log("✅ Rental saved to database:", rental);

        res.status(200).json({
            message: "File uploaded and rental saved successfully",
            rental: rental,
        });
    } catch (error) {
        console.error("❌ Error saving rental:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
