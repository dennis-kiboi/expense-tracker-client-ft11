import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/dashboard/Dashboard";
import { Routes, Route, Navigate } from "react-router-dom";
import Profile from "./pages/dashboard/Profile";
import { Login } from "./pages/auth/Login";
import { Signup } from "./pages/auth/Signup";

const App = () => {
  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/transactions"
          element={<div className="flex-1 p-8">Transactions Page</div>}
        />
        <Route
          path="/tags"
          element={<div className="flex-1 p-8">Tags Page</div>}
        />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/settings"
          element={<div className="flex-1 p-8">Settings Page</div>}
        />
      </Routes>
    </div>
    // <Signup />
  );
};
export default App;
