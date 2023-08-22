import React from "react";
import Section from "../../PageStructure/Container/Section";
import TitleDescription from "../../Molecule/TitleDescription/TitleDescription";
import Styles from "./Teams.module.scss";
import Container from "../../PageStructure/Container/Container";
import { GetTeamsData } from "./GetTeamsData";
import Author from "../Author/Author";
import ProfileCard from "../Cards/Card/ProfileCard/ProfileCard";
import { strapiHomePage } from "../../../lib/provider/strapi/api";

const Teams = ({ content, provider }: any) => { 
  const returnData = GetTeamsData(content, provider);
 
  const roundedImage = returnData.roundedImage ? returnData.roundedImage : "";
  const grid = returnData.grid == 1 ? "col-12" : returnData.grid == 2 ? "col-md-6" : returnData.grid == 3 ? "col-md-4" : returnData.grid == 4 ? "col-md-3" : "";
  return (
    <Section replaceclass className={Styles.teams + " component"}>
      {returnData.title ?
        <TitleDescription type={'h3'} title={returnData.title} description={returnData.description} />
        : ""}
      {returnData?.authors ?
        <ul className="d-flex flex-wrap ps-0" data-rounded-image={returnData.roundedImage} data-profilecard={returnData?.profileCard}>
          {returnData?.authors ? returnData.authors.map((author: any, index: React.Key) => (
            <div key={index} className={grid + " col-12 pb-2 pb-md-2 pe-md-3"} >
              {returnData?.profileCard == true ?
                <ProfileCard content={author} provider={provider} /> : <Author content={author} provider={provider} />
              }
            </div>
          )) : ""}
        </ul> : ""}        
    </Section>
  );
};

export default Teams;
