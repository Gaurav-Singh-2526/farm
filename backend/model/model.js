// const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");

// const UserSchema = new mongoose.Schema(
//   {
//     fullName: {
//       type: String,
//       required: [true, "Full name is required"],
//       trim: true,
//     },
//     email: {
//       type: String,
//       required: [true, "Email is required"],
//       unique: true,
//       lowercase: true,
//       trim: true,
//     },
//     password: {
//       type: String,
//       required: [true, "Password is required"],
//     },
//   },
//   { timestamps: true }
// );

// // Hash password before saving
// UserSchema.pre("save", async function (next) {
//   if (!this.password) return next(new Error("Password is required"));

//   if (this.isModified("password")) {
//     this.password = await bcrypt.hash(this.password, 10);
//   }

//   console.log("After Hashing - Password:", this.password);
//   next();
// });
// const User = mongoose.model("User", UserSchema);

// const RentalSchema = new mongoose.Schema({
//     toolName: {
//         type: String,
//         required: true,
//     },
//     location: {
//         type: String,
//         required: true,
//     },
//     price: {
//         type: Number,
//         required: true,
//     },
//     imageUrl: {
//         type: String,
//         required: true,
//     }
// });


// // 2. Define Tool Schema


// const Rental = mongoose.model("Rental", RentalSchema);

// module.exports = { User ,Rental};

// currently usable code 

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

/* =======================
   🧑‍🌾 USER SCHEMA
======================= */
const UserSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    phone:{
      type: Number,
      required: [true],
    },
    location:{
      type:String,
      required:[true],
    }
  },
  { timestamps: true }
);

// ✅ Hash password before saving
UserSchema.pre("save", async function (next) {
  if (!this.password) return next(new Error("Password is required"));

  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }

  console.log("After Hashing - Password:", this.password);
  next();
});

/* =======================
   🧰 RENTAL SCHEMA
======================= */
const RentalSchema = new mongoose.Schema({
  toolName: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

/* =======================
   ✅ FIX: Prevent OverwriteModelError
======================= */
const User = mongoose.models.User || mongoose.model("User", UserSchema);
const Rental = mongoose.models.Rental || mongoose.model("Rental", RentalSchema);

module.exports = { User, Rental };

