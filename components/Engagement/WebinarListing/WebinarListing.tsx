import Styles from "../WebinarListing/WebinarListing.module.scss";
import Container from "../../PageStructure/Container/Container";
import Title from "../../Elements/Title";
import Section from "../../PageStructure/Container/Section";
import { GetWebinarListingData } from "./GetWebinarListingData";
import Webinar from "../../Composits/Webinar/Webinar";
import TitleDescription from "../../Molecule/TitleDescription/TitleDescription";
const Webinars = ({ content, provider }: any) => {
  const returnData = GetWebinarListingData(content, provider);
  return (
    <>
      <Container>
        <Section replaceclass style={{ backgroundImage: `url(${returnData.backgroundImage})` }} className={Styles.backgroundImg + " component pt-5 pb-3"}>
          {returnData.title ?
            <TitleDescription type={'h3'} title={returnData.title} description={returnData.description} />
            : ""}
          {returnData?.webinarsCollection?.items ?
            <ul className="p-0">
              {returnData?.webinarsCollection.items ? returnData.webinarsCollection.items.map((webinar: any, index: any) => (
                <Webinar key={index} content={webinar} provider={provider} />
              )) : ""}
            </ul> : ""}
        </Section>
      </Container>
    </>
  );
};
export default Webinars;
