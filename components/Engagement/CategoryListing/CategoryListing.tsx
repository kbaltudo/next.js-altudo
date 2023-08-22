import React from "react";
import Styles from "./CategoryListing.module.scss"
import Section from "../../PageStructure/Container/Section";
import Category from "../../Composits/Category/Category";
import Title from "../../Elements/Title";
import { GetCategoryListingData } from "./GetCategoryListingData";

const CategoryListing = ({ content, provider }: any) => {
  const returnData = GetCategoryListingData(content, provider); 
  const view= (true==returnData.horizontalView) ? " d-flex":"";
  return (
    <Section replaceclass className={Styles.category_listing }>
      <Title type={'h4'}>{returnData.title}</Title>
      <ul className={Styles.wrapper + view}>
        {returnData?.categories ? returnData.categories.map((category: any, index: React.Key) => (
          <Category key={index} content={category} provider={provider} />
        )) : ""}
      </ul>
    </Section>
  )
}

export default CategoryListing;