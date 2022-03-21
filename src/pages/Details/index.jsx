import React from 'react';
import {Redirect} from "wouter";

import useSingleBike from "../../hooks/useSingleBike";
import Spinner from "../../components/shared/Spinner";

import {formatDate} from "../../utils/functions";
import Map from "../../components/Map/Map";

const StolenTitle = ({ title, model }) => {
  return (
    <p className="text-3xl justify-between font-bold">
      <span> {title} </span>
      <span> ({model})</span>
    </p>
  )
}

const StolenData = ({ status, date, location }) => {
  return (
    <small className="text-xl">
      <strong className="font-bold"> {status}</strong>
      <span> {formatDate.toLocaleString(date)} </span>
      <span> <strong>at</strong> {location}</span>
    </small>
  )
}

const StolenDescription = ({locking_description = 'No description'}) => {
  return <div className="w-full px-4 bg-white shadow-md  rounded-sm p-4">

    <div className="flex flex-wrap">

      <div className="w-full px-4">

        <div className="relative flex flex-col mt-4">
          <div className="px-4 py-5 flex-auto">

            <h6 className="text-xl mb-1 font-semibold"> DESCRIPTION OF INCIDENT </h6>
            <p className="mb-4 text-blueGray-500">
              {locking_description}
            </p>
          </div>
        </div>

      </div>


    </div>

  </div>;
}

const DetailsCase = ({params}) => {
  const {bike, isError, isLoading} = useSingleBike({caseId: params.caseId})

  if (isLoading) {
    return (
      <>
        <Spinner/>
      </>
    )
  }

  if (isError) return <Redirect to='/404'/>
  if (!bike) return null

  return (
    <>
      <div className="px-5 pb-5">
        <StolenTitle title={bike.title} model={bike.frame_model}/>
        <StolenData
          date={bike.date_stolen}
          status={bike.status}
          location={bike.stolen_location}
        />
      </div>

      <div className="w-full">
        <Map
          coordinates={bike.stolen_coordinates}
        />
      </div>
      <StolenDescription {...[bike.stolen_record]} />
    </>
  );
};

export default DetailsCase;
