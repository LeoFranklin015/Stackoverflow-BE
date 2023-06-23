import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routes/user.js";
import questionRoutes from "./routes/Questions.js";
const app = express();
app.use(express.json({ limit: "30mb", extebded: true }));
app.use(express.urlencoded({ limitt: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("This is a StackOverflow Clone API");
});

app.use("/user", userRoutes);
app.use("/questions", questionRoutes);

const PORT = process.env.PORT || 4000;

const Connection_URL =
  "mongodb+srv://LeoFranklin:leoleoleo@stackoverflow-clone.zckevmk.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(Connection_URL, { useNewURLParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    })
  )
  .catch((err) => {
    console.log(err.message);
  });
