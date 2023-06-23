import Questions from "../models/Question.js";
import mongoose from "mongoose";

export const AskQuestion = async (req, res) => {
  const postQuestionData = req.body;
  const postQuestion = new Questions({
    ...postQuestionData,
    // userId: req.userId,
  });
  try {
    await postQuestion.save();
    res.status(200).json("Posted a question Sucessfully");
  } catch (error) {
    console.log(error);
    res.status(409).json("Couldnt post a new Question ");
  }
};

// import Questions from "../models/Question.js";
// import mongoose from "mongoose";

// export const AskQuestion = async (req, res) => {
//   const postQuestionData = req.body;
//   const userId = req.userId;
//   const postQuestion = new Questions({ ...postQuestionData, userId });
//   try {
//     await postQuestion.save();
//     res.status(200).json("Posted a question successfully");
//   } catch (error) {
//     console.log(error);
//     res.status(409).json("Couldn't post a new question");
//   }
// };
