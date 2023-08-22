import React from "react";
import Link from "next/link";
import NavigationLink from "../../PageContent/NavigationLink/NavigationLink";

const LinkList = ({ content, provider }: any) => {
 
  return (
    <ul className="navbar-nav mb-2 mb-lg-0 me-3">
      {content ? content.map((nav: any, index: React.Key) => (
        <NavigationLink key={index} content={nav} provider={provider} />
      ))
        : ""}
    </ul>
  );
};
export default LinkList;
