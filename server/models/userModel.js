import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Full Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    maxlength: [10, "must have less or equal than 10 characters"],
    minlength: [4, "must have more or equal than 4 characters"],
  },
});

export default mongoose.model("User", userSchema);
