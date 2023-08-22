import React from 'react';

const elements:any = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
};
 
function Title({ type, children, ...props }:any) {
  let newclass = '';
  if (props.replaceclass) {
    newclass = props.className;
  } else {
    newclass = 'mt-2 mb-3 ' + (props.className ? props.className : '' );
  }
  delete props.replaceclass;
  const newprops = { ...props, className:newclass }
  return React.createElement(
    elements[type] || elements.h1,
    newprops,
    children
  );
}

Title.defaultProps = {
  type: 'h1'
};

export default Title;
