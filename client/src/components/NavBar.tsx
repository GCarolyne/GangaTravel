import { Link, Outlet } from "react-router-dom";

export function NavBar(){
    return <>
  <nav className="h-20 sm:h-24 md:h-24 w-full bg-amber-700 flex items-center shadow-md relative">
    <div className="flex items-center h-full pl-4 w-full justify-center">
       <Link to="/">
       <img className="w-auto object-contain rounded-full shadow-md"
       src="/images/shutterstock_534787495_edited.jpeg"/>
       </Link>
       <Link to="/about">
       <button>About</button>
       </Link>
       <Link to="/destinations">
       <button>Destinations</button>
       </Link>
      </div>
    </nav>
    <Outlet/>
    </>
}