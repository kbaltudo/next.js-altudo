import React from "react";
import { useState } from "react";
import markerLogo from "../../../public/place-marker-16.png"
import {
  GoogleMap,
  LoadScript,
  InfoWindow,
  Marker,
  InfoBox,
  useJsApiLoader
} from "@react-google-maps/api";
import { FunctionBody } from "typescript";

const AnyReactComponent = ({ text }: any) => <div>{text}</div>;
interface  Markers {
  id: number,
  name: string,
  position: {
    lat: number,
    lng: number,
  }
}
function LocationMap({ locations, lattitude, longitude }:any) {
  const markers: Markers[] = [];
  locations?.map((location: any, index: any) =>
    markers.push({
      id: location.id,
      name: location.locationCity,
      position: {
        lat: parseFloat(location.lattitude),
        lng: parseFloat(location.longitude),
      },
    })
  );
  
  const center:{lat: number, lng: number} = {
    lat: parseFloat(lattitude),
    lng: parseFloat(longitude),
  };
  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker:any) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  const handleOnLoad = (map: any) => {
    const bounds = new google.maps.LatLngBounds();
    markers.forEach(({ position }:any) => bounds.extend(position));
    map.fitBounds(bounds);
  };
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: `${process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY}`,
    libraries: ['geometry', 'drawing'],
  });


  return (
    <>
      <div className="col-lg-8 col-12 px-0">
          {isLoaded &&
          <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
            <Marker position={center} icon={markerLogo.src} label="Location">
            </Marker>
          </GoogleMap> 
          }
      </div>
    </>
  );
}

export default LocationMap;

const containerStyle = {
  width: "100%",
  height: "100vh",
};

