import React, {useEffect, useState} from 'react';

import CountBikes from "../../../services/countBikes";


const Pagination = ({setPage, page}) => {
  const [totalPages, setTotalPages] = useState(1);
  const [paginationContent, setPaginationContent] = useState([]);

  useEffect(async () => {
    // const total = Math.trunc(await CountBikes() / 10)
    setTotalPages(Math.trunc(await CountBikes() / 10))
    console.log('page', page)
    console.log('totalPAGE', totalPages)
  }, []);

  useEffect( () => generatePagination() , [page])

  const generatePagination = () => {
    const itemsPagination = Array.from( { length: 3 }, (_, i) => page + ( i ) )
    setPaginationContent( itemsPagination )
  }

  const onHanderlersPagination = ( option ) => {
    const Options = {
      'prev': () => {
        if (page > 1) setPage(page - 1)
      },
      'next': () => {
        console.log('totalPages->', totalPages)
        if (page < totalPages) setPage(page + 1)
      },
    }
    Options[option]()
  }

  return (
    <ul className="flex">
      <li className="mx-1 px-2 bg-gray-200 text-gray-500 rounded-2xl">
        <span
          data-testid="firts"
          className="flex items-center text-lg cursor-pointer"
          onClick={() => setPage(1)}
        >
          <span className="mx-1"> {'<< First'} </span>
        </span>
      </li>
      <li className="mx-1 px-2 bg-gray-200 text-gray-500 rounded-2xl">
        <span
          data-testid="prev"
          className="flex items-center text-lg cursor-pointer"
          onClick={() => onHanderlersPagination('prev')}
        >
          <span className="mx-1"> {'<< Prev'} </span>
        </span>
      </li>
      {
        paginationContent.map( (pagination, idx) =>
          <li
            className="mx-1 px-3 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg"
            key={idx + pagination}
          >
            <span
              className="font-normal cursor-pointer text-md"
              onClick={() => setPage(pagination) }
            >
              { pagination }
            </span>
          </li>
        )
      }

      <li className="mx-1 px-2 bg-gray-200 text-gray-500 rounded-2xl">
        <span
          data-testid="next"
          className="flex items-center text-lg"
          onClick={() => onHanderlersPagination('next')}
        >
          <span className="mx-1"> {' Next >'} </span>
        </span>
      </li>
      <li className="mx-1 px-2 bg-gray-200 text-gray-500 rounded-2xl">
        <span
          data-testid="last"
          className="flex items-center text-lg"
          onClick={() => setPage(totalPages)}
        >
          <span className="mx-1"> {'Last >>'} </span>
        </span>
      </li>

    </ul>
  );
};

export default Pagination;
