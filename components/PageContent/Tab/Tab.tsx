import React from "react";
import { GetTabData } from "./GetTabData";
import TabHorizontal from "./TabHorizontal";
import TabVertical from "./TabVertical";

const Tab = ({ content, variant, provider, defaultActiveKey }:any) => {
  const tabData = GetTabData(content, provider);
  return (
    <div>
      {1 == variant ? 
        <TabHorizontal content={tabData} defaultActiveKey={defaultActiveKey}/>
      : 
        <TabVertical content={tabData} defaultActiveKey={defaultActiveKey}/>
      }
    </div>
  );
};

export default Tab;
Tab.defaultProps = {
  variant: 1,
  provider: "",
  defaultActiveKey: 1
};
