import mongoose from "mongoose";
import User from "../models/auth.js";
import Question from "../models/Question.js";

export const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    const allUserDetails = [];
    allUsers.forEach((users) => {
      allUserDetails.push({
        _id: users._id,
        name: users.name,
        about: users.about,
        tags: users.tags,
        joinedOn: users.joinedOn,
      });
    });
    res.status(200).json(allUserDetails);
  } catch (error) {
    res.status(404).json({ message: "User fetch failed" });
  }
};

// export const updateProfile = async (req, res) => {
//   const { id: _id } = req.params;
//   const { name, about, tags } = req.body;
//   if (!mongoose.Types.ObjectId.isValid(_id)) {
//     return req.status(404).send("UserNOt avilable ");
//   }
//   try {
//     const updatedProfile = await User.findByIdAndUpdate(
//       _id,
//       {
//         $set: { name: name, about: about, tags: tags },
//       },
//       { new: true }
//     );
//     res.status(200).json(updatedProfile);
//   } catch (error) {
//     res.status(405).json({ message: error.message });
//   }
// };

export const updateProfile = async (req, res) => {
  const { id: _id } = req.params;
  const { name, about, tags } = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("Profile unavailable...");
  }

  try {
    const updatedProfile = await Question.findByIdAndUpdate(
      _id,
      { $set: { name: name, about: about, tags: tags } },
      { new: true }
    );
    res.status(200).json(updatedProfile);
  } catch (error) {
    res.status(405).json({ message: error.message });
  }
};

export const updateSubscription = async (req, res) => {
  const { id: _id } = req.params;
  const { type } = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("User unavailable...");
  }
  try {
    const updatedSubscription = await User.findByIdAndUpdate(
      _id,
      { $set: { subscription: type } },
      { new: true }
    );
    res.status(200).json(updatedSubscription);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
