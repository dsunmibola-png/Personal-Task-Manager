import  { Router } from "express";
import { createTask, deleteTask, getAllTask, editTask, getTaskByID } from "../controllers/taskController";

const router = Router();

router.post("/create", createTask);
router.get("/", getAllTask);
router.get("/each/:id", getTaskByID);
router.patch("/edit/:id", editTask);
router.delete("/delete/:id", deleteTask);

export default router;
