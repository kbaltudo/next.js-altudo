import {useEffect , useState} from "react";
import Styles from "./Assets.module.scss";
import Container from "../../PageStructure/Container/Container";
import Title from "../../Elements/Title";
import Slug from "../../Elements/Slug";
import Image from "next/image";
import Section from "../../PageStructure/Container/Section";
import TitleDescription from "../../Molecule/TitleDescription/TitleDescription";
import { GetAssetsData } from "./GetAssetsData";

const Assets = ({ content } : any) => {
  const returnData = GetAssetsData(content);
  let data = {
    title: returnData.title,
    description: returnData.description,
    linkText: returnData.linkText,
    assets: returnData?.assets ? returnData.assets : [] 
  }  
  return (
    <Section className={Styles.assets + " component"}>
      <Container>
        <TitleDescription title={data.title} description={data.description} />
        <div className="row">
          { data?.assets ? data.assets.map((asset) => (
            <div key={asset.id} className={Styles.asset + " col-12 col-md-3 mb-5"}>
              <Image src={asset.image.url} width={asset.image.width} height={asset.image.height} alt={asset.image.alt} />
              <Title type="h5" className="mb-3">{asset.title}</Title>
              {asset.media.url ?
                <Slug replaceclass type="a" className="btn btn-outline-primary" download="true" Link={asset.media.url}>
                  {data.linkText}
                </Slug>
                : ""
              }
            </div>
          ))
            : "No Asset found"
          }
        </div>
      </Container>
    </Section>
  );
};
export default Assets;
