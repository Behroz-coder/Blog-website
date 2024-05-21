import React, { useState } from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  // Get authentication status from Redux store
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  // State to control visibility of navigation links
  const [showMenu, setShowMenu] = useState(false);

  // Function to toggle navigation menu visibility
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // Navigation items with their respective routes and active status
  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="relative py-4 bg-gradient-to-r from-purple-700 to-blue-700 shadow-md text-white rounded-3xl">
      {/* Container for centering content */}
      <Container>
        {/* Navigation bar */}
        <nav className="flex items-center justify-between">
          {/* Logo and site name */}
          <Link to="/" className="flex items-center space-x-2">
            {/* Logo */}
            <Logo className="w-8 h-8 text-yellow-400 border-2 border-white rounded-full p-1" />
            {/* Site name */}
            <span className="text-lg font-semibold">Blogs</span>
          </Link>

          {/* Responsive navigation toggle */}
          <button className="md:hidden" onClick={toggleMenu}>
            {/* Hamburger icon */}
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>

          {/* Navigation links */}
          <ul
            className={`md:flex items-center space-x-4 ${
              showMenu
                ? "block pt-4   z-10 text-center  fixed h-[40%] w-[50%] top-24 left-8 border-r border-r-gray-900 bg-gradient-to-r from-purple-700 to-blue-700 shadow-md text-white rounded-3xl  ease-in-out duration-800"
                : "hidden"
            } `}
          >
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  {/* Button for each navigation item */}
                  <button
                    onClick={() => navigate(item.slug)}
                    className="px-4 py-2 my-1 text-sm font-medium text-white rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {/* Logout button if user is authenticated */}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
