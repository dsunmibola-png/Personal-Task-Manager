import { Request, Response } from "express";
import Task from "../models/taskModel";
import { validateID } from "../utils/validateID";

// controller for creating a new task
export const createTask = async (req: Request, res: Response) => {
 const { title, description, tag } = req.body;

  if (!title || !description || !tag) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const task = await Task.create(req.body);
  res.status(201).json({ message: "Task created successfully", task });
};

// controller for getting all tasks
export const getAllTask = async (req: Request, res: Response) => {
  const tasks = await Task.find({});
  res.status(200).json({ message: "All tasks retrieved successfully", tasks });
};

// CONTROLLER TO EDIT AN EXISTING TASK BY ID
export const editTask = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!validateID(id as string)) {
        return res.status(400).json({ message: `Invalid ID: ${id}` });
    }

    const task  = await Task.findByIdAndUpdate(id, req.body, { new: true });
    if (!task) {
        return res.status(400).json({ message: "Task not found" });
    }
    res.status(200).json({ message: "Task updated successfully", task });
};

// CONTROLLER TO DELETE AN EXISTING TASK BY ID
export const deleteTask = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!validateID(id as string)) {
        return res.status(400).json({ message: `Invalid ID: ${id}` });
    }

    const task = await Task.findByIdAndDelete(id);
    if (!task) {
        return res.status(400).json({ message: "Task not found" });
    }
    res.status(200).json({ message: "Task deleted successfully",});
};

// CONTROLLER TO GET EACH TASK BY ID
export const getTaskByID = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!validateID(id as string)) {
        return res.status(400).json({ message: `Invalid ID: ${id}` });
    }

    const task = await Task.findById(id);
    if (!task) {
        return res.status(400).json({ message: "Task not found" });
    }
    res.status(200).json({ message: "Task retrieved successfully",});
};
