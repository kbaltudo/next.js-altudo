import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faGlobe, faLocation } from "@fortawesome/free-solid-svg-icons";
import Title from "../../Elements/Title";
import Styles from "./Accordian.module.scss";
import Image from "next/image";

function Accordian({ item, id, updateMapData }: any) {

  return (
    <>
      <div
        className={"accordion-item"}
        data-lat={item.lattitude}
        data-long={item.longitude}
      >
        <Title type="h2" replaceclass={true} className="accordion-header" id={"heading-" + id}>
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={"#flush-" + id}
            aria-expanded="false"
            aria-controls={"flush-" + id}
            onClick={() => updateMapData(item.lattitude, item.longitude)}
          >
            <strong> {item.locationName}</strong>
            <span className="city-state small px-4">{item.locationCity}</span>
          </button>
        </Title>
        <div
          id={"flush-" + id}
          className="accordion-collapse collapse"
          aria-labelledby={"heading-" + id}
          data-bs-parent="#accordion-location"
        >
          <div className="accordion-body row">
            <div className="col-12 col-md-7 small">
              <div className="finder-address icon-box">
                <FontAwesomeIcon className="icon" icon={faLocation} />
                <span className="ps-2"> {item.address} </span>
              </div>
              {item.phone ? (
                <div className="finder-phone icon-box">
                  <FontAwesomeIcon className="icon" icon={faPhone} />
                  <span className="ps-2">{item.phone}</span>
                </div>
              ) : null}
              <div className="finder-link relative icon-box">
                {item.link ? (
                  <>
                    <FontAwesomeIcon className="icon" icon={faGlobe} />
                    <a href={item.link} target="_blank" className="ps-2" rel="noreferrer">
                      Open Location on Map
                    </a>
                  </>
                ) : null}
              </div>
            </div>
            {item.logo ? (
              <div className="col-12 col-md-5 d-flex justify-content-lg-center justify-content-md-start align-items-center flex-wrap flex-row">
                <div className="finder-logo">
                  <Image
                    src={item.image.url}
                    width={item.image.width}
                    height={item.image.height}
                    alt={item.locationName}
                    className={Styles.logo}
                  />
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default Accordian;
