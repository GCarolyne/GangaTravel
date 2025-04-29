import { Link, Outlet } from "react-router-dom";

export function NavBar() {
  return (
    <>
      <nav className="h-20 sm:h-24 md:h-24 w-full bg-white flex items-center shadow-md relative">
        <div className="flex justify-center">
          <img
            className="mr-14px h-14 sm:h-16 md:h-18 w-auto object-contain rounded-full shadow-md"
            src="/images/shutterstock_534787495_edited.jpeg"
          />
        </div>
        <div className="flex items-center space-x-4 md:space-x-8">
          <Link to="/about">
            <button>O nás</button>
          </Link>
          <Link to="/destinations">
            <button>Destinácie</button>
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
