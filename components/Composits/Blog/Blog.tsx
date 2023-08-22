import React from "react";
import SocialShare from "../Cards/Card/SocialShare/SocialShare";
import BlogVariant1 from "./Variant-1/Variant-1";
import BlogVariant2 from "./Variant-2/Variant-2";
const Blog = ({ content, provider, imageorder }: any) => {

  const gridRight = content?.image?.url ? "col-md-8" : "col-md-12",
    imageAlignment = ("image-right" == imageorder) ? "order-2" : ""
  return (
    <>
      {"variant-1" == content.variant ?
        <BlogVariant1 content={content.blogs} provider={provider} imageorder={content.imageAlignment} /> :
        <>
          {"variant-2" == content.variant ?
            <BlogVariant2 content={content.blogs} provider={provider}/> : ""}
        </>
      }
    </>
  )
}

export default Blog;

