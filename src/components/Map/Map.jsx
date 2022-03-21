import React,  from 'react';
import {MapContainer, Circle,  LayerGroup, TileLayer} from 'react-leaflet'
import '../../index.scss'
import "leaflet/dist/leaflet.css";

const fillBlueOptions = { fillColor: 'blue' }

export default function Map({ coordinates }) {

  if (!coordinates) {
    return null
  }

  return (
    <MapContainer
      className="markercluster-map rounded overflow-hidden shadow-xl bg-white"
      center={coordinates}
      zoom={14}
      maxZoom={18}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <LayerGroup>
        <Circle center={coordinates} pathOptions={fillBlueOptions} radius={300} >
        </Circle>
      </LayerGroup>
    </MapContainer>

  )
}