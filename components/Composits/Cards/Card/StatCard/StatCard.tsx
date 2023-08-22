import Title from "../../../../Elements/Title";
import Styles from "./StatCard.module.scss";
import { GetCardData } from "../GetCardData";
import Image from "next/image";
import Section from "../../../../PageStructure/Container/Section";
import Description from "../../../../Elements/Description";

const StatCard = ({ content, provider }: any) => {
  const returnData = GetCardData(content, provider);
  return (
    <>
      <Section replaceclass className={Styles.statcard} >
        <div className="card mb-3 shadow-sm bg-body rounded">
          <div className={Styles.card_body + " pt-4 pb-3 ps-3 pe-3"}>
            <div className="row">
              <div className={Styles.col_left + " col-md-9"}>
                <Title type={'h3'} replaceclass className={Styles.card_title + " mt-2 mb-3"}>{returnData.title}</Title>
                {returnData?.shortDescription ?
                  <div className={Styles.subtitle + " mb-3"} dangerouslySetInnerHTML={{ __html: returnData.shortDescription }} />
                  : ""}
                {returnData?.description ?
                  <Description>{returnData.description}</Description>
                  : ""}
              </div>
              <div className={Styles.col_right + " col-md-3"}>
                {returnData?.thumbnail?.url ?
                  <figure>
                    <Image src={returnData.thumbnail.url} alt={returnData.thumbnail.alt} width={returnData.thumbnail.width} height={returnData.thumbnail.height} />
                  </figure> : ""}
              </div>
            </div>
          </div>
        </div>
      </Section>

    </>
  );
};

export default StatCard;

StatCard.defaultProps = {
  provider: "",
  content: ""
};