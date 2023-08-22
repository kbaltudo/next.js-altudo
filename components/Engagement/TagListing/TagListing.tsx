import Title from "../../Elements/Title";
import Container from "../../PageStructure/Container/Container";
import Link from "next/link";
import Styles from "./TagListing.module.scss";
import { Key } from "react";
import { GetTags } from "./GetTagListingData";

const TagListing = ({ content }:any) => {
  const tag = GetTags(content);  
  return (
    <section className={Styles.tagListing }>
      <Container>
        <Title type="h4">{tag.title}</Title>
        <ul>
          {tag.map((
            tag: { title: any; description: any; slug: any; id:any },
            index: Key
          ) => (
            <div key={index}>
            <Link href="/">
              <li key={tag.id}>
                <a href="#">{tag.title}</a>
              </li>
            </Link>
            </div>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default TagListing;
