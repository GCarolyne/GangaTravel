import { Link, Outlet } from "react-router-dom";

export function NavBar() {
  return (
    <>
      <div className="flex justify-center w-full py-4">
        <nav className="bg-white shadow-md rounded-md mx-auto">
          <div className="p-6 sm:p-8 md:p-10">
            {/* Using flex-wrap and gap for better responsive behavior */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8">
              {/* First Card */}
              <div className="bg-gray-50 rounded-lg shadow p-4 flex flex-col items-center w-56 sm:w-64">
                {/* Responsive Image Container */}
                <div className="w-full mb-3">
                  <img
                    src="/images/Unknown.jpeg"
                    alt="view of Naples"
                    className="w-full h-32 sm:h-40 object-cover rounded-md"
                  />
                </div>
                <Link to="/About">
                  <button className="w-full px-4 py-2 bg-blue-50 hover:bg-blue-100 rounded transition-colors">
                    O nás/O klube
                  </button>
                </Link>
              </div>

              {/* Second Card */}
              <div className="bg-gray-50 rounded-lg shadow p-4 flex flex-col items-center w-56 sm:w-64">
                <div className="w-full mb-3">
                  <img
                    src="/images/shutterstock_586629710.jpg"
                    alt="Email signup"
                    className="w-full h-32 sm:h-40 object-cover rounded-md"
                  />
                </div>
                <Link to="/Outreach">
                  <button className="w-full px-4 py-2 bg-blue-50 hover:bg-blue-100 rounded transition-colors">
                    Zadajte Email
                  </button>
                </Link>
              </div>

              {/* Third Card */}
              <div className="bg-gray-50 rounded-lg shadow p-4 flex flex-col items-center w-56 sm:w-64">
                <div className="w-full mb-3">
                  <img
                    src="/images/shutterstock_1520953610.jpg"
                    alt="Southern Italy"
                    className="w-full h-32 sm:h-40 object-cover rounded-md"
                  />
                </div>
                <Link to="/Destinations">
                  <button className="w-full px-4 py-2 bg-blue-50 hover:bg-blue-100 rounded transition-colors">
                    Juzne Taliansko
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
}
