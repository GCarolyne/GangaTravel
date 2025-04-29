import { Outlet } from "react-router-dom";

export function NavBar(){
    return <>
  <nav className="h-20 sm:h-24 md:h-24 w-full bg-white flex justify-end items-end shadow-md relative">
        <div className="flex items-center space-x-4 md:space-x-8 pb-2 pr-4">
          <button className="px-3 py-2 text-gray-700 hover:text-blue-600 text-sm md:text-base font-medium">About</button>
          <button className="px-3 py-2 text-gray-700 hover:text-blue-600 text-sm md:text-base font-medium">Destinations</button>
          <button className="px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm md:text-base font-medium">Start Planning</button>

      </div>
    </nav>
    <Outlet/>
    </>
}