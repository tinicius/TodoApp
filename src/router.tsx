import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { CreateTask } from "./pages/CreateTask";
import { Tasks } from "./pages/Tasks";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <>Erro Page!</>,
  },
  {
    path: "/tasks",
    element: <Tasks />,
  },
  {
    path: "/createTask",
    element: <CreateTask />,
  },
]);
