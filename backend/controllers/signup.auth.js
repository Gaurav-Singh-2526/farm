const bcrypt = require("bcryptjs");
const { User } = require("../model/model");

const Signup = async (req, res) => {
  try {
const { fullName, email, password, confirmPassword,phone,location } = req.body;

if (!fullName || !email || !password || !confirmPassword || !phone || !location)
  return res.status(400).json({ message: "All fields required" });

if (password !== confirmPassword)
  return res.status(400).json({ message: "Passwords do not match" });

const existingUser = await User.findOne({ email });
if (existingUser)
  return res.status(400).json({ message: "Email already registered" });

const newUser = new User({ fullName, email, password,phone, location});
const result = await newUser.save();

res.status(201).json({ message: "User registered successfully", user: result });


  } catch (e) {
    console.error("Signup Error:", e);
    res.status(500).json({ message: "Server error", error: e.message });
  }
};

module.exports = Signup;



// ******** this is now code

// const bcrypt = require('bcryptjs'); 
// const { User } = require("../model/model");

// const Signup = async (req, res) => {
//   try{
//     const Password=req.body.Password;
//     const ConfirmPassword=req.body.ConfirmPassword;
   
     
//     if(Password===ConfirmPassword){
//     const data= await User({
//         FullName:req.body.FullName,
//         Email:req.body.Email,
//         Password:req.body.Password,
//         ConfirmPassword: req.body.ConfirmPassword
//     });
//     const result= await data.save();
//     console.log(result);
//     res.status(201).json({ message: "User registered successfully", user: result });
// }
// else{
//     res.status(404).json({ message: "Password not match.... "});
// }
// }catch(e){
//     console.log(`Resgister Error:=>> ${e}`);
// }

  
// };



// module.exports = Signup;

//this is old code

// const { Name, Email, Password, ConfirmPassword } = req.body;

    
// if (!Name || !Email || !Password || !ConfirmPassword) {
//   return res.status(400).json({ error: "All fields are required" });
// }


// if (Password !== ConfirmPassword) {
//   return res.status(400).json({ error: "Passwords do not match" });
// }


// const newUser = new User({
//   Name,
//   Email,
//   Password, 
// });


// const result = await newUser.save();

// console.log(result);
// return res.status(201).json({ message: "User registered successfully", user: result });