import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-indigo-500 via-violet-600 to-pink-500 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
   
        <Link to="/" className="text-white text-2xl font-bold">
          🎨 ArtConnect
        </Link>

    
        <button
          className="lg:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

     
        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } lg:flex flex-col lg:flex-row lg:items-center gap-4 absolute lg:static top-16 left-0 w-full lg:w-auto bg-violet-600 lg:bg-transparent p-5 lg:p-0`}
        >
          <Link
            to="/"
            className="text-white px-4 py-2 rounded-full hover:bg-white/20 transition"
          >
            Home
          </Link>

          <Link
            to="/gallery"
            className="text-white px-4 py-2 rounded-full hover:bg-white/20 transition"
          >
            Gallery
          </Link>

          <Link
            to="/about"
            className="text-white px-4 py-2 rounded-full hover:bg-white/20 transition"
          >
            About
          </Link>

          <Link
            to="/artrequest"
            className="text-white px-4 py-2 rounded-full hover:bg-white/20 transition"
          >
            Request Art
          </Link>

          
          <div className="relative">
            <img
              src=""
              alt="profile"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-11 h-11 rounded-full border-2 border-white cursor-pointer transition hover:scale-110"
            />

            <div
              className={`absolute right-0 mt-2 bg-white rounded-2xl shadow-xl min-w-[180px] overflow-hidden z-50 ${
                dropdownOpen ? "block" : "hidden"
              }`}
            >
              {!token ? (
                <>
                  <Link
                    to="/login"
                    className="block px-4 py-3 hover:bg-gray-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Login
                  </Link>

                  <Link
                    to="/register"
                    className="block px-4 py-3 hover:bg-gray-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Register
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/profile"
                    className="block px-4 py-3 hover:bg-gray-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Profile
                  </Link>

                  <Link
                    to="/my-requests"
                    className="block px-4 py-3 hover:bg-gray-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    My Requests
                  </Link>

                  <button
                    onClick={logout}
                    className="block w-full text-left px-4 py-3 text-red-500 hover:bg-red-50"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;