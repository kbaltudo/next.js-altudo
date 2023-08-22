import React from "react";
import Title from "../../Elements/Title";
import Accordian from "./Accordian";

function LocationSidebar({ locations, updateMapData, title }: any) {

  return (
    <div className="col-12 col-lg-4 p-0" >
      <Title type="h2" className="h3 text-center mb-3">
        {title}
      </Title>
      <div className="accordion accordion-flush" id="accordion-location">
        {locations?.length ?
          locations?.map((location:any) => (
            <Accordian
              key={location.id}
              item={location}
              id={location.id}
              updateMapData={updateMapData}
            ></Accordian>
          )) :
          null
        }
      </div>
    </div>
  );
}

export default LocationSidebar;
