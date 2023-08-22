import React from "react";
import Link from "next/link"
import Title from "../../../Elements/Title";
import Styles from "./Variant-1.module.scss"
import DateTime from "../../../Elements/DateTime";
import Section from "../../../PageStructure/Container/Section";
import Image from "next/image";
import { GetBlogData } from "../GetBlogData";
import SocialShare from "../../Cards/Card/SocialShare/SocialShare";
const BlogVariant1 = ({ content, provider, imageorder }: any) => {
  const returnData = GetBlogData(content, provider);
  const gridRight = returnData?.image?.url ? "col-md-8" : "col-md-12",
    imageAlignment = ("image-right" == imageorder) ? "order-2" : ""
  return (
    <Section replaceclass className={Styles.blog + " pb-5 mb-5"} >
      <div className="row">
        {returnData.thumbnail.url ?
          <div className={"col-md-4 " + imageAlignment}>
            <figure>
              <Image src={returnData.thumbnail.url} width={returnData.thumbnail.width} height={returnData.thumbnail.height} alt={returnData.thumbnail.alt} />
            </figure>
          </div> : ""}
        <div className={gridRight + " pe-4"}>
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
            <div className={Styles.body_copy + " mt-2 mb-4"} dangerouslySetInnerHTML={{ __html: returnData.subTitle }} /> : ""
          }
          {returnData?.linkText ?
            <Link href={`/blogs/` + returnData.slug}><button type="button" className="btn btn-primary">{returnData.linkText}</button></Link> : ""
          }
        </div>
      </div>
    </Section>
  )
}

export default BlogVariant1;

