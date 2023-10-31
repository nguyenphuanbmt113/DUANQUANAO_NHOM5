const mongoose = require("mongoose"); // Erase if already required
import bcrypt from "bcrypt";
// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  address: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
  },
  isAuthentication: {
    type: String,
    default: false,
  },
  isBlock: {
    type: String,
    default: false,
  },
  fresh_token: {
    type: String,
  },
});
userSchema.pre("save", async function hashpassword(next) {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hashSync(this.password, salt);
});
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compareSync(password, this.password);
};
//Export the model
module.exports = mongoose.model("User", userSchema);
