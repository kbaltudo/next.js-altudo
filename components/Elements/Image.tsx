import React from 'react';

function Image({ src, ...props }:any) {
    
    if( !src ){
        return null;
    }
    let newclass = '';
    if (props.replaceclass) {
      newclass = props.className;
    } else {
      newclass = 'img-responsive mb-2 ' + (props.className ? props.className : '' );
    }

    let extensionpath = '';
    if (props.size == "thumbnail") {
        extensionpath = (src.attributes.formats && src.attributes.formats.thumbnail) ? (src.attributes.formats.thumbnail.url ? src.attributes.formats.thumbnail.url : src.attributes.url):src.attributes.url;
    } else if (props.size == "medium") {
        extensionpath = (src.attributes.formats && src.attributes.formats.medium) ? (src.attributes.formats.medium.url ? src.attributes.formats.medium.url : src.attributes.url):src.attributes.url;
    } else if (props.size == "large") {
        extensionpath = (src.attributes.formats && src.attributes.formats.large) ? (src.attributes.formats.large.url ? src.attributes.formats.large.url : src.attributes.url):src.attributes.url;
    } else if (props.size == "small") {
        extensionpath = (src.attributes.formats && src.attributes.formats.small) ? (src.attributes.formats.small.url ? src.attributes.formats.small.url : src.attributes.url):src.attributes.url;
    } else {
        extensionpath = src.attributes.url;
    }
    const url = `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${extensionpath}`;
    delete props.replaceclass;
    const newprops = { ...props, src: url, className:newclass }
    return React.createElement(
        'img',
        newprops
    );
}

export default Image;