import React, {useEffect, useState} from 'react';
import {useBikes} from "../../hooks/useBikes";


const InputSearch = () => {
  const [query, setQuery] = useState('');
  useBikes({query});


  useEffect( () => {

  }, [query]);


  const handleSearch =  (e) => {
    setQuery(e.target.value)
  }

  return (
    <div
      className="flex justify-between lg:w-auto lg:border-b-0 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
      <div className="relative mx-auto text-gray-600 lg:block">
        <input
          onBlur={handleSearch}
          className="border-2 border-gray-300 bg-white h-12 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
          type="search"
          name="search"
          placeholder="Search"
        />
      </div>

    </div>
  );
};

export default InputSearch;
