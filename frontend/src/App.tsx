import { Toaster } from "react-hot-toast";
import { TasksPage } from "./pages/TasksPage";
import { CssBaseline, Container } from "@mui/material";

function App() {
  return (
    <>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        toastOptions={{
          duration: 4000,
          style: {
            background: "#333",
            color: "#fff",
            fontFamily: "Roboto, sans-serif",
          },
          pauseOnHover: true,
        }}
      />
      <CssBaseline />
      <Container component="main" sx={{ py: 4 }}>
        <TasksPage />
      </Container>
    </>
  );
}

export default App;
