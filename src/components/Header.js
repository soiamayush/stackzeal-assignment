import React from 'react'
import { Link } from "react-router-dom"

const Header = () => {
  return (

<nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 ">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
    <Link to="/" className="flex items-center">
        <span className="self-center font-semibold whitespace-nowrap dark:text-black md:hover:text-blue-700  text-2xl lg:text-3xl">INDIAN MASTIFF REGISTRY</span>
    </Link>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" ><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800  dark:border-gray-700">

       
        <li>
        <Link to="#" className="flex py-2 text-base font-medium text-dark hover:text-primary lg:ml-12 lg:inline-flex md:hover:text-blue-700">Register</Link>
        </li>
        <li>
          <Link to="#" className="flex py-2 text-base font-medium text-dark hover:text-primary lg:ml-12 lg:inline-flex md:hover:text-blue-700">Verify</Link>
        </li>
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none ">Contact Us</button>
      </ul>

    </div>
  </div>
</nav>
  )
}

export default Header