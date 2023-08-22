import React from "react";
import Link from "next/link"
import Title from "../../../Elements/Title";
import Styles from "./Variant-2.module.scss"
import DateTime from "../../../Elements/DateTime";
import Section from "../../../PageStructure/Container/Section";
import Image from "next/image";
import { GetBlogData } from "../GetBlogData";
import SocialShare from "../../Cards/Card/SocialShare/SocialShare";
import Description from "../../../Elements/Description";
const BlogVariant2 = ({ content, provider }: any) => {
  const returnData = GetBlogData(content, provider);
  return (
    <Section replaceclass className={Styles.blog + " pb-5 mb-5"} >
      {returnData.thumbnail.url ?
        <figure>
          <Image src={returnData.thumbnail.url} width={returnData.thumbnail.width} height={returnData.thumbnail.height} alt={returnData.thumbnail.alt} />
        </figure> : ""}
      <div className="p-2">
        {returnData.title ?
          <Title type={'h3'}>{returnData.title}</Title> : ""
        }
        {returnData.socialShare ?
          <SocialShare content={returnData.socialShare} provider={provider} /> : ""
        }
        <span className="pe-3"><em>Published on :<DateTime date={returnData.date} /></em></span>
        {returnData.author.authorName ?
          <span className="pe-3"><em>Author : {returnData.author.authorName + " (" + returnData.author.designation + ")"}</em></span> : ""
        }
        {returnData.subTitle ?
          <Description type={undefined}>{returnData.subTitle}</Description> : ""
        }
        {returnData?.linkText ?
          <Link href={`/blogs/` + returnData.slug}><button type="button" className="btn btn-primary">{returnData.linkText}</button></Link> : ""
        }
      </div>
    </Section>
  )
}

export default BlogVariant2;

