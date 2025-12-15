import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoPage from "./pages/Todo/TodoPage";
import LoginPage from "./pages/Login/LoginPage";

function App() {
  return  (
  <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
);
  
}

export default App;
