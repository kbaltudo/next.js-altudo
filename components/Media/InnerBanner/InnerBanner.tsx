import Styles from "./InnerBanner.module.scss";
import Section from "../../PageStructure/Container/Section";
import Container from "../../PageStructure/Container/Container";
import Title from "../../Elements/Title";
import { GetBannerData } from "./GetBannerData";

const InnerBanner = ({ content, provider,alignment }:any) => {
  const returnData = GetBannerData(content, provider)
  return (
    <Section style={{ backgroundImage: `url(${returnData.image.url})` }} className={Styles.innerbanner + " innerBanner"}>
      {(returnData.title || returnData.description) ?
        <div className="row">
          <div className={alignment + " col align-self-center pt-3 pb-3"}>
            <Container>
              <div className="col-12  w-75 m-auto">
                {returnData?.title ?
                  <Title type={undefined}>{returnData.title}</Title> : ""}
                {returnData?.description ?
                <div className="body-copy" dangerouslySetInnerHTML={{__html:returnData.description}} /> : ""}
              </div>
            </Container>
          </div>
        </div> : ""}
    </Section>
  );
};

export default InnerBanner;
InnerBanner.defaultProps = {  
  alignment: "text-center"
};


