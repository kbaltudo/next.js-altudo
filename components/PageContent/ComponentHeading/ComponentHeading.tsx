import Styles from "./ComponentHeading.module.scss";
import Section from "../../PageStructure/Container/Section";
import { GetHeadingData } from "./GetHeadingData";
import Title from '../../Elements/Title';
import Container from "../../PageStructure/Container/Container";
const ContentHeading = ({ content, provider }:any) => {
  const data = GetHeadingData (content, provider)
  return (
    <>
    {data?.heading != null? 
    <Section>
      <Container>
        <Title className={data.alignment} type={data.size}>{data.heading}</Title>
      </Container>
    </Section>
    :""}
    </>
  );
};

export default ContentHeading;


