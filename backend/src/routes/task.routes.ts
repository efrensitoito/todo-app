import { Router } from "express";
import { TaskController } from "../controllers/task.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

router.use(authMiddleware);

// Task CRUD
router.post('/', TaskController.createTask);
router.get('/', TaskController.getTasks);
router.put('/:id', TaskController.updateTask);
router.delete('/:id', authMiddleware, TaskController.deleteTask);
router.patch('/:id/toggle', authMiddleware, TaskController.toggleCompleted);

export default router;