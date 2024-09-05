import { Router } from "express";
import { addToHistory, getUserHistory, login } from "../controllers/User.controllers.js";
import { register } from "../controllers/User.controllers.js";


const router = Router();

router.route("/login").post(login);
router.route("/register").post(register);
router.route("/add_to_activity").post(addToHistory);
router.route("/get_all_activity").get(getUserHistory);

export default router;