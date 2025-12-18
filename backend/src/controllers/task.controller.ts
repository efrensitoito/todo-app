import { Request, Response } from "express";
import { TaskService } from "../services/task.service";

export class TaskController {
  static async createTask(req: Request, res: Response) {
    try {
      const { title, description } = req.body;
      const userId = req.user?.id;

      if (!title) {
        return res.status(400).json({ message: "Title is required" });
      }

      const task = await TaskService.createTask({
        title,
        description,
        userId,
      });

      return res.status(201).json(task);
    } catch (error) {
      return res.status(500).json({ message: "Error creating task" });
    }
  }

  static async getTasks(req: Request, res: Response) {
    try {
      const userId = req.user?.id;
      const tasks = await TaskService.getTaskByUser(userId);
      return res.status(200).json(tasks);
    } catch (error) {
      return res.status(500).json({ message: "Error fetching tasks" });
    }
  }

  static async updateTask(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const userId = req.user?.id;

      const task = await TaskService.updateTask(id, userId, req.body);

      if (!task) {
        return res.status(404).json({ message: "Task not found" });
      }

      return res.status(200).json(task);
    } catch (error) {
      return res.status(500).json({ message: "Error updating Task" });
    }
  }

  static async deleteTask(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const userId = req.user?.id;

      const deleted = await TaskService.deleteTask(id, userId);

      if (!deleted) {
        return res.status(404).json({ message: "Task not found" });
      }

      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ message: "Error deleting task!!" });
    }
  }

  static async markAsCompleted(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const userId = req.user?.id;

      const task = await TaskService.markAsCompleted(id, userId);

      if (!task) {
        return res.status(404).json({ message: "Task not found" });
      }

      return res.status(200).json(task);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error marking task as completed!!" });
    }
  }
}
