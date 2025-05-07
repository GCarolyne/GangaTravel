import { Link, Outlet } from "react-router-dom";

export function NavBar() {
  return (
    <>
      {/* Reduced overall height and removed extra containers */}
      <nav className="h-12 w-full bg-white flex items-center justify-center shadow-sm relative">
        {/* Compact container with minimal padding */}
        <div className="h-8 bg-gray-100 rounded px-3 flex items-center">
          {/* Tighter spacing between links */}
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/about">
              <button className="px-2 py-1">O nás/O klube</button>
            </Link>
            <Link to="/zapiste-sa">
              <button className="px-2 py-1">Zadajte Email</button>
            </Link>
            <Link to="/Parthenope Juzne Taliansko">
              <button className="px-2 py-1">Juzne Taliansko</button>
            </Link>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
