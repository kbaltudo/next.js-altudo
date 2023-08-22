import React from "react";
import Description from "../../Elements/Description";
import Title from "../../Elements/Title";
import Styles from "./TitleDescription.module.scss";
const TitleDescription = ({ title, description,type }:any) => {
  return (
    <div className="row">
      <div className={"col-12 full-width m-auto text-center"}>
        <Title type={type}>{title}</Title>
        <Description type={"div"}>{description}</Description>        
      </div>
    </div>
  );
};

export default TitleDescription;
