import mongoose from "mongoose";
import Question from "../models/Question.js";
export const postAnswer = async (req, res) => {
  const { id: _id } = req.params;
  const { noOfAnswers, answerBody, userAnswered, userId } = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return req.status(404).send("question unavailable");
  }
  updateNoOfAnswers(_id, noOfAnswers);
  try {
    const updatedQuestion = await Question.findByIdAndUpdate(_id, {
      $addToSet: { answer: [{ answerBody, userAnswered, userId }] },
    });
    res.status(200).json(updatedQuestion);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateNoOfAnswers = async (_id, noOfAnswers) => {
  try {
    await Question.findByIdAndUpdate(_id, {
      $set: { noOfAnswers: noOfAnswers + 1 },
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteAnswer = async (req, res) => {
  const { id: _id } = req.params;
  const { answerId, noOfAnswers } = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return req.status(404).send("question unavailable");
  }
  if (!mongoose.Types.ObjectId.isValid(answerId)) {
    return req.status(404).send("Answer unavailable");
  }

  updateNoOfAnswers(_id, noOfAnswers);
  try {
    await Question.updateOne(_id, {
      $pull: { answer: { _id: answerId } },
    });
  } catch (error) {
    res.status(400).json(error);
  }
};
