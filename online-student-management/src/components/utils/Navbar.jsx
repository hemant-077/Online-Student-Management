import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo → Home */}
        <NavLink
          to="/"
          className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:opacity-90 transition"
        >
          Student Management System
        </NavLink>

        {/* Links */}
        <div className="flex gap-8 text-sm font-medium">
          <NavLink
            to="/add-students"
            className={({ isActive }) =>
              `transition duration-300 ${
                isActive
                  ? "text-blue-400 border-b-2 border-blue-400"
                  : "text-gray-300 hover:text-white"
              }`
            }
          >
            Add Students
          </NavLink>

          <NavLink
            to="/view-students"
            className={({ isActive }) =>
              `transition duration-300 ${
                isActive
                  ? "text-blue-400 border-b-2 border-blue-400"
                  : "text-gray-300 hover:text-white"
              }`
            }
          >
            Student View
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
