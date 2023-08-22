import Title from "../../../../Elements/Title";
import Section from "../../../../PageStructure/Container/Section";
import SocialLink from "../SocialLink/SocialLink";
import { GetSocialShareData } from "./GetSocialShareData";
import Styles from "./SocialShare.module.scss";

const SocialShare = ({ content, provider,classname }: any) => {
  const returnData = GetSocialShareData(content, provider);
  const socialLink={
    "alignment":returnData?.alignment ? returnData.alignment :"Horizontal"
  }
  return (
    <Section replaceclass className={Styles.social_share}>
      {returnData.title ?
        <Title type={'h3'}>{returnData.title}</Title> : ""}
      {returnData?.socialLinks ?
        <ul className={"Horizontal"==socialLink.alignment ? "p-0 d-flex list-unstyled":"list-unstyled"}>
          {returnData?.socialLinks ? returnData.socialLinks.map((socialLink: any, index: any) => (
            <SocialLink key={index} content={socialLink} provider={provider} />
          )) : ""}
        </ul> : ""}
    </Section>
  );
};

export default SocialShare;












