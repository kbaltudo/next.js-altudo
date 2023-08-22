import React from "react";
import Title from "../../Elements/Title";
import Section from "../../PageStructure/Container/Section";
import Styles from "./TwoColumnTile.module.scss";
import Container from "../../PageStructure/Container/Container";
import { GetTwoColumnCallout } from "./GetTwoColumnTileData";

const TwoColumnTile = ({ content, provider }: any) => {
  const returnData = GetTwoColumnCallout(content, provider)
  return (
    <Section replaceclass className={Styles.twoColumnTile + " component bg-grey-primary"} style={{ backgroundImage: `url(${returnData.backgroundImage})` }} >
      <div className="row">
        <div className={Styles.col_left + " col-md-6"} style={{ backgroundImage: `url(${returnData.backgroundImage1})` }}>
          {returnData.title1 ?
            <Title className="pb-3" type="h3">{returnData.title1}</Title> : ""
          }
          {returnData.description1 ?
            <div className={Styles.body_copy} dangerouslySetInnerHTML={{ __html: returnData.description1 }} /> : ""
          }

        </div>
        <div className={Styles.col_right + " col-md-6"} style={{ backgroundImage: `url(${returnData.backgroundImage2})` }}>
          {returnData.title2 ?
            <Title className="pb-3" type="h2">{returnData.title2}</Title> : ""
          }
          {returnData.description2 ?
            <div className={Styles.body_copy} dangerouslySetInnerHTML={{ __html: returnData.description2 }} /> : ""
          }
        </div>
      </div>
    </Section>
  );
};

export default TwoColumnTile;
