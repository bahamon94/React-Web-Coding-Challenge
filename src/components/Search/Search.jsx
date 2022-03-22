import React from 'react';
import InputSearch from "./InputSearch";

const Search = () => {
  return (
    <nav
      className="flex items-center justify-between flex-wrap bg-white py-4 lg:px-12 shadow">
      <InputSearch/>

      <div className="menu lg:block flex-end lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
        <div className="text-md font-bold lg:flex-grow">
          <div className="inline-block px-2 text-xl">from</div>
          <input
            className="border-2 border-gray-300 bg-white h-12 pl-2 pr-8 rounded-lg text-base focus:outline-none"
            type="date" name="datefrom" placeholder="From"/>
          <div className="inline-block px-2 text-xl">to</div>
          <input
            className="border-2 border-gray-300 bg-white h-12 pl-2 pr-8 rounded-lg text-base focus:outline-none"
            type="date" name="dateto" placeholder="To"/>

        </div>
        <button
          className="border-2 border-gray-300 text-black px-2 py-2 mx-2 rounded-md text-xl font-medium hover:bg-gray-600 hover:text-white transition duration-300">
          Find cases
        </button>

      </div>

    </nav>
  );
};

export default Search;
