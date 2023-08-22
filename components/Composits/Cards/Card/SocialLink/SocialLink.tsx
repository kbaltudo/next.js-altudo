import Link from "next/link";
import { GetSocialLinkData } from "./GetSocialLinkData";
import Styles from "./SocialLink.module.scss";

const SocialLink = ({ content, provider }: any) => {
  const socialLinkData = GetSocialLinkData(content, provider);
  
  const sociaLink = {
    icon: socialLinkData?.icon == "twitter" ? "fa-twitter" : socialLinkData.icon == "linkedin" ? "fa-linkedin-in" : socialLinkData.icon == "facebook" ? "fa-facebook-f" : socialLinkData.icon == "tumblr" ? "fa-tumblr" : "",
    link: socialLinkData?.icon == "twitter" ? "https://twitter.com/" : socialLinkData.icon == "linkedin" ? "https://linkedin.com/" : socialLinkData.icon == "facebook" ? "https://facebook.com/" : socialLinkData.icon == "tumblr" ? "https://tumblr.com/" : "#"
  }
  return (
    <>  {
      provider == "drupal" ?
        <><li className={Styles.social_link}>
          {socialLinkData.icon ?
            <Link className="social-icon" target={`_blank`} href={sociaLink.link + socialLinkData.link}><i className={"fab " + sociaLink.icon}></i></Link> : ""}
        </li></> :
        <li className={Styles.social_link}>
          {socialLinkData.icon ?
            <Link className="social-icon" target={`_blank`} href={socialLinkData.link}><i className={socialLinkData.icon}></i></Link> : ""}
        </li>
    }

    </>
  );
};

export default SocialLink;












