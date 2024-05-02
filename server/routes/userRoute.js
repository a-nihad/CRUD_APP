import express from "express";
import {
  createUser,
  deleteOne,
  getOne,
  getUsers,
  updateOne,
} from "../controllers/userController.js";

const router = express.Router();

router.route("/createUser").post(createUser);
router.route("/").get(getUsers);
router.route("/:id").get(getOne).patch(updateOne).delete(deleteOne);

export default router;
