import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routes/user.js";

const app = express();
app.use(express.json({ limit: "30mb", extebded: true }));
app.use(express.urlencoded({ limitt: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("This is a StackOverflow Clone API");
});

const PORT = process.env.PORT || 4000;

app.use("/user", userRoutes);

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
