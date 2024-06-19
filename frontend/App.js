import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CustomerChat from "./Employee/CustomerChat";
import EmployeeDashPage from "./Employee/employeedaspage";
import EmployeeChat from "./Employee/employeechat";
import ManagerDashboard from "./Manager/Components/ManagerDashboard";
import Managerticket from "./Manager/Components/Managerticket";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/customer/chat/:tid/:cid" element={<CustomerChat />} />
          <Route path="/employee/chat/:tid/:cid" element={<EmployeeChat />} />
          <Route path="/employeedash" element={<EmployeeDashPage />} />
          <Route path="/managerdash" element={<ManagerDashboard />} />
          <Route path="/managertickets" element={<Managerticket />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
