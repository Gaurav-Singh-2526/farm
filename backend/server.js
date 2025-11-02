const express = require("express");
const mongoose  = require("mongoose");
const fs = require("fs"); 
const path = require("path"); 
const dbconnection = require("./db");


const app = express();
app.use(express.json());


const PORT = 3004 ;
const cors = require("cors");
app.use(cors({ origin: process.env.FRONTEND_URL}));  

app.use("/uploads", express.static("uploads"));
//for profile page
// const authRoutes = require("./routes/authRoutes");


app.get("/", (req, res) => {
  res.send("Hello, buddy!");
});

app.get("/api/upload/images", (req, res) => {
  const directoryPath = path.join(__dirname, "uploads");

  fs.readdir(directoryPath, (err, files) => {
      if (err) {
          return res.status(500).json({ message: "Unable to scan files" });
      }

     
      const imageUrls = files.map(file => `${process.env.BASE_URL}/uploads/${file}`);
      res.json(imageUrls);
  });
});


app.use(express.urlencoded({ extended: true }));


const Router = require("./routes/AuthRoute.js");
const imageRouter = require("./routes/upload.multer.js");
const viewToolsRouter = require("./routes/viewTool.route.js");

app.use("/api/tools", viewToolsRouter);
app.use("/auth", Router);
app.use("/api/upload", imageRouter);
// app.use("/api/upload", express.static(path.join(__dirname,"uploads")));








app.listen(PORT, () => {
  console.log(` Server running at:${process.env.BASE_URL}/`);
}).on("error", (err) => {
  console.error(" Server Error:", err.message);
});



