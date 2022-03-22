import React from 'react';

import Spinner from "../components/shared/Spinner";
import ListOfBikes from "../components/ListOfBikes/ListBikes";
import {useBikes} from "../hooks/useBikes";
import Pagination from "../components/shared/Pagination/Pagination";
import Search from "../components/Search/Search";
import Title from "../components/shared/Titles/Title";


const BikeContent = () => {
  const {bikes, loading, setPage, page} = useBikes()

  return (
    <>

      {
        loading
          ? <Spinner/>
          :
          <>
            <Search/>
            {
              !bikes.length ? <Title text={'No results.'}/>
            :
            <ListOfBikes bikes={bikes}/>
            }
          </>
      }
      <div className="my-10">
        <Pagination setPage={setPage} page={page}/>
      </div>

    </>
  );
};

export default BikeContent;
