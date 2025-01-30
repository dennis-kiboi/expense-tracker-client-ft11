import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { LayoutDashboard, ArrowRightLeft, Tags, Settings, User } from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: ArrowRightLeft, label: "Transactions", path: "/transactions" },
  { icon: Tags, label: "Tags", path: "/tags" },
  { icon: User, label: "Profile", path: "/profile" },
  { icon: Settings, label: "Setting", path: "/settings" }
];

const Sidebar = () => {
  return (
    <div className="w-64 bg-white h-screen p-6 flex flex-col">
      <NavLink to="/dashboard" className="text-2xl font-bold mb-8">
        MoneyWise
      </NavLink>
      <nav className="flex-1">
        <ul className="space-y-2">
          {menuItems.map(item => (
            <motion.li
              key={item.label}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <NavLink
                to={item.path}
                className={({ isActive }) => `
                  flex items-center space-x-3 p-3 rounded-lg
                  ${
                    isActive
                      ? "bg-black text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }
                `}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </NavLink>
            </motion.li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
export default Sidebar;
