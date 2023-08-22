import React from "react";
import Title from "../../Elements/Title";
import Image from "next/image";
import Styles from "./Author.module.scss";
import { GetAuthorData } from "./GetAuthorData";
import SocialShare from "../Cards/Card/SocialShare/SocialShare";
import Link from "next/link";

const Author = ({ content, provider }: any) => {
  const returnData = GetAuthorData(content, provider);

  return (
    <li className={"component " + Styles.author + " list-unstyled text-center "}>
      {returnData?.image ?
        <figure className={Styles.col_left}>
          <Link href={`/our-professionals/` + returnData.slug}><Image src={returnData.image.url} width={returnData.image.width} height={returnData.image.height} alt={returnData.image.alt} /></Link>
        </figure> : " "}
      {returnData?.authorName ?
        <Title className="mt-3" type={'h6'}>{returnData.authorName}</Title>
        : ""}
      {returnData?.designation ?
        <blockquote>
          <strong>{returnData.designation + ", "}
            {returnData?.organization ? returnData.organization : ""}
          </strong>
        </blockquote>
        : ""}
      {returnData?.socialLinks ?
        <SocialShare className="justify-content-center" content={returnData.socialLinks} provider={provider} /> : ""}

    </li>
  );
};

export default Author;