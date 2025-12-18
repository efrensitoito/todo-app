import { useState } from "react";
import { apiFetch } from "../api/api";
import {
  Box,
  TextField,
  Button,
  Typography,
  CircularProgress,
  Paper,
  Alert,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import toast from "react-hot-toast";

interface TaskFormProps {
  onTaskCreated: () => void;
}

export const TaskForm = ({ onTaskCreated }: TaskFormProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setError("Title is required");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      await apiFetch("/api/tasks", {
        method: "POST",
        body: JSON.stringify({ title, description }),
      });
      toast.success((t) => (
        <span
          style={{
            position: "relative",
            paddingBottom: "4px",
            display: "block",
          }}
        >
          ¡Tarea creada con éxito!
          <div
            className={`toast-progress-bar ${
              !t.visible || t.paused ? "pau-animation" : ""
            }`}
          />
        </span>
      ));
      setTitle("");
      setDescription("");
      onTaskCreated();
    } catch (err) {
      setError("Error creating task");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        Crear Nueva Tarea
      </Typography>
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        <TextField
          label="Título de la tarea"
          variant="outlined"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <TextField
          label="Descripción (opcional)"
          variant="outlined"
          multiline
          rows={2}
          fullWidth
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          disabled={loading}
          startIcon={
            loading ? (
              <CircularProgress size={20} color="inherit" />
            ) : (
              <AddIcon />
            )
          }
        >
          {loading ? "Creando..." : "Crear"}
        </Button>
      </Box>
    </Paper>
  );
};
