import React from "react";
import { Key } from "react";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Styles from './Tab.module.scss';

const TabVertical = ({ content, defaultActiveKey }:any) => {
    return (
        <section className={Styles.tabComponent + " mt-3 mb-3"}>
          <Tab.Container id="left-tabs-example" defaultActiveKey={defaultActiveKey}>          
            <Row className={Styles.tabRow}>
              <Col md={3} className={Styles.tabHead}>
                <Nav className="flex-column">
                {content.map((tab: { id: any; isactive:any; title: any; description: any;  }, index: Key) => (
                  <Nav.Item key={index}>
                    <Nav.Link eventKey={tab.id}>{tab.title}</Nav.Link>
                  </Nav.Item>
                   ))}
                </Nav>
              </Col>
              <Col md={9} className={Styles.tabDesc}>
                <Tab.Content>
                {content.map((tab: { id: any; isactive:any; title: any; description: any;  }, index: Key) => (
                  <Tab.Pane eventKey={tab.id} className="p-3" key={index}>
                    {tab.description}
                  </Tab.Pane>
                  ))}
                </Tab.Content>              
              </Col>
            </Row>           
          </Tab.Container>
        </section>
    )
}

export default TabVertical;
