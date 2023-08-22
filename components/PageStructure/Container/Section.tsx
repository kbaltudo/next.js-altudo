import React from 'react';

function Section({ children, ...props }:any) {
    let newclass = '';
    if (props.replaceclass) {
        newclass = props.className;
    } else {
        newclass = 'p-xl-5 p-3 ' + (props.className ? props.className : '' );
    }
    delete props.replaceclass;
    const newprops = {...props,className:newclass};
    return React.createElement(
        "section",
        newprops,
        children
    );
}

export default Section;
