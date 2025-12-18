import { Task, ITask } from "../models/Task";

export class TaskService {
  static async createTask(data: {
    title: string;
    description?: string;
    userId: string;
  }): Promise<ITask> {
    const task = new Task({
      title: data.title,
      description: data.description,
      userId: data.userId,
    });

    return await task.save();
  }

  static async getTaskByUser(userId: string): Promise<ITask[]> {
    return await Task.find({ userId }).sort({ createdAt: -1 });
  }

  static async updateTask(
    taskId: string,
    userId: string,
    data: Partial<ITask>
  ): Promise<ITask | null> {
    return await Task.findOneAndUpdate({ _id: taskId, userId }, data, {
      new: true,
    });
  }

  static async deleteTask(taskId: string, userId: string): Promise<boolean> {
    const result = await Task.findOneAndDelete({ _id: taskId, userId });
    return !!result;
  }

  static async markAsCompleted(
    taskId: string,
    userId: string
  ): Promise<ITask | null> {
    return await Task.findOneAndUpdate(
      { _id: taskId, userId },
      { completed: true },
      { new: true }
    );
  }
}
