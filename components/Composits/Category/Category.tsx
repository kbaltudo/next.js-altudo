import React from "react";
import Styles from "./Category.module.scss"
import Link from "next/link";
import { GetCategoryData } from "./GetCategoryData";

const Category = ({ content, provider }: any) => {
  const returnData = GetCategoryData(content, provider);
  return (
    <li className={Styles.category + " p-1"} >
      {returnData?.title ?
            <Link href={"#" + returnData.slug}>{returnData.title}</Link> : ""
          }
    </li>
  )
}

export default Category;