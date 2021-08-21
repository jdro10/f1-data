import React from "react";
import "./Map.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = ({ coordinates, circuitName }) => {
  return (
    <MapContainer center={coordinates} zoom={14} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={coordinates}>
        <Popup>
          {circuitName} <br /> {coordinates[0] + " | " + coordinates[1]}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
