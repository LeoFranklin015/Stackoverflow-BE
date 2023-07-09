import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    about: { type: String },
    tags: { type: [String] },
    joinedOn: { type: Date, default: Date.now },
    subscription: { type: String, default: "Free" },
    lastPostedDate: { type: Date },
    noOfQuestionsPosted: { type: Number, default: 0 },
    profilePicture: String,
    coverPicture: String,
    followers: [],
    following: [],
    worksAt: String,
    livesIn: String,
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
