import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";

function App() {
  return (
    <Router>
      {/* Shared Navigation Bar */}
      <nav className="pl-4 pr-8 md:pl-12 md:pr-18 py-5 bg-black text-white flex items-center justify-between">
        <img className="object-cover h-10" src="/img/icons/initials.png" />

        <div className="flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400"
                : "hover:text-blue-400 transition-colors"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400"
                : "hover:text-blue-400 transition-colors"
            }
          >
            Projects
          </NavLink>
        </div>
      </nav>

      {/* Page Routing */}
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
