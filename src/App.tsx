import "./App.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import AddEmployeePage from "./pages/AddEmployeePage";
import EmployeeEditPage from "./pages/EmployeeEditPage";
import EmployeeListPage from "./pages/EmployeeListPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<EmployeeListPage />} />
        <Route path="/employee/:id" element={<EmployeeEditPage />} />
        <Route path="/add" element={<AddEmployeePage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
