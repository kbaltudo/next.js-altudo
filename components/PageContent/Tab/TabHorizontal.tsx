import React from "react";
import { Key } from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Styles from './Tab.module.scss';

const TabHorizontal = ({ content, defaultActiveKey }:any) => {
    return (
        <section className={Styles.tabComponent + " mt-3 mb-3"}>
            <Tabs defaultActiveKey={defaultActiveKey} id="uncontrolled-tab-example">
                {content.map((tab: { id: any; isactive: any; title: any; description: any;  }, index: Key) => (
                    <Tab key={index} eventKey={tab.id} title={tab.title} className={Styles.tabContent + " p-3"}>
                        {tab.description}
                    </Tab>
                ))}
            </Tabs>
        </section>
    )
}

export default TabHorizontal;

