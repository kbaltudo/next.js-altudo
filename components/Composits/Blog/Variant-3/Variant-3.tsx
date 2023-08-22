import React from "react";
import Link from "next/link"
import Title from "../../../Elements/Title";
import Styles from "./Variant-3.module.scss"
import DateTime from "../../../Elements/DateTime";
import Section from "../../../PageStructure/Container/Section";
import Image from "next/image";
import { GetBlogData } from "../GetBlogData";
import SocialShare from "../../Cards/Card/SocialShare/SocialShare";
import Description from "../../../Elements/Description";
const BlogVariant3 = ({ content, provider }: any) => {
  const returnData = GetBlogData(content, provider);
  return (
    <Section replaceclass className={Styles.blog + " pb-5 mb-5"} >
      {returnData.image.url ?
        <figure>
          <Image src={returnData.image.url} width={returnData.image.width} height={returnData.image.height} alt={returnData.image.alt} />
        </figure> : ""}
      <div className="container pb-4 pt-5">
        {returnData.title ?
          <Title type={'h2'}>{returnData.title}</Title> : ""
        }
        {returnData.socialShare ?
          <SocialShare content={returnData.socialShare} provider={provider} /> : ""
        }
        <span className="pe-3 fw-bolder"><em>Published on :<DateTime date={returnData.date} /></em></span>
        {returnData.author.authorName ?
          <span className="pe-3"><em>Author : {returnData.author.authorName + " (" + returnData.author.designation + ")"}</em></span> : ""
        }
        {returnData.description ?
          <Description type={undefined}>{returnData.description}</Description> : ""
        }
      </div>
      {/* {returnData?.linkText ?
        <Link href={`/blogs/` + returnData.slug}><button type="button" className="btn btn-primary">{returnData.linkText}</button></Link> : ""
      } */}
    </Section>
  )
}

export default BlogVariant3;

