import { NavLink } from "react-router-dom"

const ResponsiveAppBar = () => {
  return (
    <nav className="flex justify-between px-4 py-4 bg-purple-900 text-purple-300">
      <ul className="flex">
        <li className="px-4 py-2 border-2 border-transparent hover:bg-purple-500 hover:text-purple-200 hover:border-purple-100 hover:rounded-lg">
          <NavLink to="/">Logo</NavLink> </li>
        <li className="px-4 py-2 border-2 border-transparent hover:bg-purple-500 hover:text-purple-200 hover:border-purple-100 hover:rounded-lg">
          <NavLink to="/aboutus">About Us </NavLink></li>
        <li className="px-4 py-2 border-2 border-transparent hover:bg-purple-500 hover:text-purple-200 hover:border-purple-100 hover:rounded-lg">
          <NavLink to="explore">Explore </NavLink> </li>
        <li className="px-4 py-2 border-2 border-transparent hover:bg-purple-500 hover:text-purple-200 hover:border-purple-100 hover:rounded-lg">
          <NavLink to="create">Create </NavLink></li>
      </ul>
      <ul className="flex">
        <li className="px-4 py-2 border-2 border-transparent hover:bg-purple-500 hover:text-purple-200 hover:border-purple-100 hover:rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </li>
        <li className="px-4 py-2 border-2 border-transparent hover:bg-purple-500 hover:text-purple-200 hover:border-purple-100 hover:rounded-lg">
          <NavLink to="user">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </NavLink>
        </li>
      </ul>
    </nav>

  )
}
export default ResponsiveAppBar;