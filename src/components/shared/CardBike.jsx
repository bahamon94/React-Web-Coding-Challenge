import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from "wouter";


import {IMAGE_NOT_AVAILABLE} from "../../constants/settings"

const CardBike = ({title, description, thumb, year, id}) => {

  const [image, setImage] = useState('');

  useEffect(() => {
    if (!thumb)
      setImage(IMAGE_NOT_AVAILABLE)
    else
      setImage(thumb)
  }, []);

  return (
    <>
      <Link to={`/case/${id}`}>
        <div
          className="max-w-5xl bg-white border-2 border-gray-300 p-5 m-5 rounded-md tracking-wide shadow-lg hover:bg-gray-100">
          <div id="header" className="flex">
            <img alt={title}
                 className="w-48 rounded-md border-2 border-gray-300"
                 loading='lazy'
                 src={image}
            />
            <div id="body" className="flex flex-col ml-5">
              <h4 id="name" className="text-xl font-semibold mb-2"> {title} </h4>
              <p id="job" className="text-gray-800 mt-2"> {description} </p>
              <div className="flex mt-5">
                <p className="ml-3"> {year}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

CardBike.propTypes = {
  title: PropTypes.string.isRequired,
}

export default CardBike;
