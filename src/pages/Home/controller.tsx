import { useNavigate } from "react-router-dom";

export const useHomeController = () => {
  const navigate = useNavigate();

  const handleCreateRoutine = (): void => {
    navigate("/createTask");
  };

  const handleNavigateTasksPage = (): void => {
    navigate("/tasks");
  };

  return {
    handleCreateRoutine,
    handleNavigateTasksPage,
  };
};
