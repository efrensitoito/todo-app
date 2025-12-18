import { useEffect, useState } from "react";
import { apiFetch } from "../api/api";
import type { Task } from "../types/task";
import { TaskForm } from "../components/TaskForm";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Checkbox,
  Paper,
  Skeleton,
  Box,
  Divider,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import toast from "react-hot-toast";

export const TasksPage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  const loadTasks = async () => {
    try {
      setLoading(true);
      const data = await apiFetch("/api/tasks");
      setTasks(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const toggleTask = async (taskId: string) => {
    try {
      setActionLoading(taskId);
      const updated = await apiFetch(`/api/tasks/${taskId}/toggle`, {
        method: "PATCH",
      });
      setTasks((prev) => prev.map((t) => (t._id === taskId ? updated : t)));
    } finally {
      setActionLoading(null);
    }
  };

  const deleteTask = async (taskId: string) => {
    if (!confirm("¿Eliminar esta tarea?")) return;
    try {
      setActionLoading(taskId);
      await apiFetch(`/api/tasks/${taskId}`, { method: "DELETE" });
      setTasks((prev) => prev.filter((t) => t._id !== taskId));
      toast.error((t) => (
        <span
          style={{
            position: "relative",
            paddingBottom: "4px",
            display: "block",
          }}
        >
          Tarea eliminada
          <div
            className={`toast-progress-bar ${
              !t.visible || (t as any).paused ? "pau-animation" : ""
            }`}
            style={{ backgroundColor: "#f44336" }} // Rojo para eliminar
          />
        </span>
      ));
    } catch (error) {
      console.error("Error al eliminar:", error);
      toast.error("No se pudo eliminar la tarea de la base de datos");
    } finally {
      setActionLoading(null);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        align="center"
        sx={{ fontWeight: "bold" }}
      >
        Mis Tareas
      </Typography>

      <TaskForm onTaskCreated={loadTasks} />

      <Paper elevation={2}>
        <List>
          {loading ? (
            // Skeleton Loader para mejor UX
            [1, 2, 3].map((i) => (
              <Box key={i} sx={{ p: 2 }}>
                <Skeleton variant="rectangular" height={50} />
              </Box>
            ))
          ) : tasks.length === 0 ? (
            <Typography sx={{ p: 3 }} align="center" color="textSecondary">
              No hay tareas pendientes.
            </Typography>
          ) : (
            tasks.map((task, index) => (
              <Box key={task._id}>
                <ListItem
                  secondaryAction={
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => deleteTask(task._id)}
                      disabled={actionLoading === task._id}
                    >
                      <DeleteIcon color="error" />
                    </IconButton>
                  }
                  sx={{ opacity: actionLoading === task._id ? 0.5 : 1 }}
                >
                  <Checkbox
                    edge="start"
                    checked={task.completed}
                    onChange={() => toggleTask(task._id)}
                    disabled={actionLoading === task._id}
                  />
                  <ListItemText
                    primary={task.title}
                    secondary={task.description}
                    sx={{
                      textDecoration: task.completed ? "line-through" : "none",
                      color: task.completed ? "text.disabled" : "text.primary",
                    }}
                  />
                </ListItem>
                {index < tasks.length - 1 && <Divider />}
              </Box>
            ))
          )}
        </List>
      </Paper>
    </Container>
  );
};
