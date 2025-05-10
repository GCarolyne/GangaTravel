import { Link, Outlet } from "react-router-dom";

export function NavBar() {
  return (
    <>
      <div className="flex justify-center w-full pt-20 pb-4">
        <nav className="relative">
          <div className="flex flex-col items-center">
            <div className="relative flex flex-col items-center w-full">
              <img
                src="/images/lyra.jpg"
                alt="lyra"
                className="absolute -top-8 w-16 h-16 rounded-full border-2 border-white object-cover bg-black z-10 mt-20px"
              />
              <hr className="w-full mt-8 h-0.5 bg-black border-0" />
            </div>
            <div className="flex flex-row justify-center mt-6 space-x-4">
              <Link to="/About">
                <button className="px-4 py-2 bg-blue-50 hover:bg-blue-100 rounded transition-colors shadow-sm">
                  O nás/O klube
                </button>
              </Link>
              <Link to="/Outreach">
                <button className="px-4 py-2 bg-blue-50 hover:bg-blue-100 rounded transition-colors shadow-sm">
                  Zadajte Email
                </button>
              </Link>
              <Link to="/Destinations">
                <button className="px-4 py-2 bg-blue-50 hover:bg-blue-100 rounded transition-colors shadow-sm">
                  Juzne Taliansko
                </button>
              </Link>
            </div>
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
}
