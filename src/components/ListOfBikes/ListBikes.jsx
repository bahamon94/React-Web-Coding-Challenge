import React from 'react'
import CardBike from '../shared/CardBike'

export default function ListOfGifs ({ bikes }) {
  return <div>
    {
      bikes.map((bike) =>
        <CardBike
          title={bike.title}
          key={bike.id}
          thumb={bike.thumb}
          description={bike.description}
          id={bike.id}
        />
      )
    }
  </div>
}