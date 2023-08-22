import React from "react";
import Styles from "./BlogListing.module.scss"
import Section from "../../PageStructure/Container/Section";
import { GetBlogListingData } from "./GetBlogListingData";
import BlogVariant1 from "../../Composits/Blog/Variant-1/Variant-1";
import BlogVariant2 from "../../Composits/Blog/Variant-2/Variant-2";

const BlogListing = ({ content, provider }: any) => { 
  const returnData = GetBlogListingData(content, provider);
  const gridData = (2 === returnData.grid) ? "col-md-6" : (3 === returnData.grid) ? "col-md-4" : (4 === returnData.grid) ? "col-md-3" : "";
  return (
    <Section replaceclass className={Styles.blog_listing + " pb-3"} >
      {1 === returnData.variant ?
        <div className={Styles.blog_wrapper} data-round-image={returnData.roundedImage}>
          {returnData?.blogs ? returnData.blogs.map((blog, index) => (
            <BlogVariant1 key={index} content={blog} provider={provider} imageorder={returnData.imageAlignment} />
          )) : ""}
        </div> :
        <>
          {2 === returnData.variant ?
            <div className={Styles.blog_wrapper + " row"} data-round-image={returnData.roundedImage}>
              {returnData?.blogs ? returnData.blogs.map((blog, index) => (
                <div key={index} className={gridData}>
                  <BlogVariant2 content={blog} provider={provider} imageorder={returnData.imageAlignment} />
                </div>
              )) : ""}
            </div> : ""
          }
        </>
      }

    </Section>
  )
}

export default BlogListing;