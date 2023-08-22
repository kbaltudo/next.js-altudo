import React from "react";
const elements = {
    anchor: 'a',
    button: 'button',
};

function Slug({ type, children, ...props }:any) {
    let attributes = {};
    let classes = "btn ", border = "-";

    if (type == 'button') {
        if (props.replaceclass) {
            classes = props.className;
        } else {
            if (props.size == 'large') {
                classes = classes + 'btn-lg ' + (props.className ? props.className : "")
            } else if (props.size == 'small') {
                classes = classes + 'btn-sm ' + (props.className ? props.className : "")
            }
            if (props.bordered) {
                border = '-outline-'
            }
            if (props.styleclass == 'secondary') {
                classes = classes + "btn" + border + "secondary " + (props.className ? props.className : "")
            } else if (props.styleclass == 'info') {
                classes = classes + "btn" + border + "info " + (props.className ? props.className : "")
            } else {
                classes = classes + "btn" + border + "primary " + (props.className ? props.className : "")
            }
        }
        attributes = {
            className: classes,
            type: 'button',
        }
    }
    else {
        if (props.replaceclass) {
            classes = props.className;
        } else {
            classes = 'link-primary ' + (props.className ? props.className : "")
        }
        attributes = {
            className: classes,
            href: (props.Link ? props.Link : "/")
        }
    }
    delete props.Link, delete props.styleclass, delete props.bordered, delete props.replaceclass;
    const newprops = { ...props, ...attributes }
    return React.createElement(
       // elements[type] || elements.anchor,
       elements.anchor,
        newprops,
        children
    );
}

{/*Example:  <Slug type="button" bordered size="large" Link="#" styleclassName="primary">{content.Description}</Slug> */ }

export default Slug;