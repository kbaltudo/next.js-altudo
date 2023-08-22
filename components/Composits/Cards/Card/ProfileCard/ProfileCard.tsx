import Styles from "./ProfileCard.module.scss";
import Section from "../../../../PageStructure/Container/Section";
import { GetAuthorData } from "../../../Author/GetAuthorData";
import Image from "next/image";
import Title from "../../../../Elements/Title";
import SocialShare from "../SocialShare/SocialShare";
import Link from "next/link";

const ProfileCard = ({ content, provider }: any) => {
    const returnData = GetAuthorData(content, provider);
    return (
        <li className={"component " + Styles.profile_card + " list-unstyled bg-grey-primary shadow-reg mb-2"}>
            <div className="row">
                <div className={Styles.col_left + " col-4"}><Link href={`/our-professionals/` + returnData.slug}><Image src={returnData.image.url} width={returnData.image.width} height={returnData.image.height} alt={returnData.image.alt} /></Link></div>
                <div className={Styles.col_right + " col-8 "}>{returnData?.authorName ?
                    <Link href={"/our-professionals/" + returnData.slug}><Title replaceclass type={'h6'}>{returnData.authorName}</Title></Link>

                    : ""}
                    {returnData?.designation ?
                        <blockquote>
                            <strong>{returnData.designation + ", "}
                                {returnData?.organization ? returnData.organization : ""}
                            </strong>
                        </blockquote>
                        : ""}
                    {returnData?.socialLinks ?
                        <SocialShare content={returnData.socialLinks} provider={provider} /> : ""
                    }
                    {"drupal" == provider ?
                        <>
                            <div className={Styles.social_icon}>
                                <Link target={`_blank`} href={"mailto:" + returnData.email}><i className="fa-solid fa-envelope"></i></Link>
                                <Link target={`_blank`}  href={"https://www.facebook.com/" + returnData.facebook}><i className="fa-brands fa-square-facebook"></i></Link>
                                <Link target={`_blank`}  href={"https://www.linkedin.com/" + returnData.linkedin}><i className="fa-brands fa-linkedin"></i></Link>
                                <Link target={`_blank`}  href={"https://www.twitter.com/" + returnData.twitter}><i className="fa-brands fa-square-twitter"></i></Link>
                                <Link target={`_blank`}  href={"https://www.tumblr.com/" + returnData.tumblr}><i className="fa-brands fa-square-tumblr"></i></Link>
                            </div>
                        </> : ""

                    }

                </div>
            </div>
        </li >
    )
}

export default ProfileCard;