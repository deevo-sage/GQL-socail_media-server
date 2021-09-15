import { Schema } from "mongoose";

const User = new Schema(
  {
    name: String,
    userName: String,
    email: { type: String,required:true },
    password: String,
    profilePicUrl: String,
  },
  { timestamps: true }
);
