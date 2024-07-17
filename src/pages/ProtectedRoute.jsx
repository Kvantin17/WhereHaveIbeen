import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContext";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) navigate("/");
  }, [isAuthenticated]);

  // Это условие необходимо так как useEffect срабатывает после того как сработают компоненты
  // но тогда будет ошибка так как у нас нет данных
  //в итоге у нас в ретёрн попадает null и срабатывает useEffect
  return isAuthenticated ? children : null;
};

export default ProtectedRoute;
