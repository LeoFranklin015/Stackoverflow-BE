import express from "express";
import { signup, login } from "../controllers/auth.js";
import {
  getAllUsers,
  updateProfile,
  updateSubscription,
  updatePayment,
} from "../controllers/users.js";
import auth from "../middlewares/auth.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/getAllUser", getAllUsers);
router.patch("/update/:id", auth, updateProfile);
router.patch("/subscribe/:id", updateSubscription);
router.post("/payment", updatePayment);
export default router;
