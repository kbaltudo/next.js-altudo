import React from "react";
import { GetAccordionData } from "./GetAccordionData";
import Styles from "./Accordion.module.scss"
import { Key } from "react";
import Accordion from 'react-bootstrap/Accordion';
import Section from "../../PageStructure/Container/Section";
import Description from "../../Elements/Description";

const AccordionComponent = ({ content, provider, defaultActiveKey, alwaysOpen,flush }: any) => {
    const accordionData = GetAccordionData(content, provider);
    return (
        <Section replaceclass className={Styles.accordion_component } >
            <Accordion defaultActiveKey={defaultActiveKey}  flush={flush} alwaysOpen={alwaysOpen} >
                {accordionData.map((accordion: { id: any; title: any; description: any; }, index: Key) => (
                    <Accordion.Item key={index} eventKey={accordion.id}>
                        <Accordion.Header>{accordion.title}</Accordion.Header>
                        <Accordion.Body>
                            <Description>{accordion.description}</Description>
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </Section>
    )
}

export default AccordionComponent;

AccordionComponent.defaultProps = {
    provider: "",
    defaultActiveKey: "",
    alwaysOpen: false
};

