import Styles from "./RichText.module.scss";
import Container from "../../PageStructure/Container/Container";
import Title from "../../Elements/Title";
import Section from "../../PageStructure/Container/Section";
const RichText = ({ content }:any) => {
  const data = {
    description: content ? content : "",
  };
  return (
    <Section className={Styles.richtext}>
      {/* Rich Text Content */}
      <div className="col-12">
        <Container>
        <div className="body-copy" dangerouslySetInnerHTML={{__html:data.description}} />
        </Container>
      </div>
    </Section>
  );
};

export default RichText;
