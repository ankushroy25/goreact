import { Container, Stack } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export const BASE_API_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5000/api"
    : "deployed.server.url/api";

function App() {
  return (
    <Stack>
      <Navbar />
      <Container>
        <TodoForm />
        <TodoList />
      </Container>
    </Stack>
  );
}

export default App;
