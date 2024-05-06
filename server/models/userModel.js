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
  phone: {
    type: String,
    required: [true, "Phone Number is required"],
    maxlength: [13, "must have less or equal than 13 characters"],
    minlength: [10, "must have more or equal than 10 characters"],
  },
  place: {
    type : String,
    required : [true, "Place is required"],
  }
});

export default mongoose.model("User", userSchema);
