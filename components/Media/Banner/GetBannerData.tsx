export function GetBanner(data: any, provider: string) {
    let returndata: { id: any; title: any; description: any; linkText: any; slug: any; desktopImage: { url: string; width: any; height: any; alt: any; }; };
    switch (provider) {
        case "strapi":
            returndata = {
                'id': data?.id ? data.id : "",
                'title': data?.Title ? data.Title : "",
                'slug': "",
                'description': data?.Description ? JSON.stringify(data.Description) : "",
                'linkText':"Learn More",
                'desktopImage': {
                    "url": data?.Image?.data?.attributes?.url ? process.env.NEXT_PUBLIC_STRAPI_BASE_URL + data.Image.data.attributes.url : "",
                    "width": data?.Image?.data?.attributes?.width ? data.Image.data.attributes.width : "",
                    "height": data?.Image?.data?.attributes?.height ? data.Image.data.attributes.height : "",
                    'alt': data?.Image?.data?.attributes?.alternativeText ? data.Image.data.attributes.alternativeText : "",
                },
                // 'mobileimage': {
                //     "url": data?.Mobile_Image?.data?.attributes?.url ? process.env.NEXT_PUBLIC_STRAPI_BASE_URL + data.Mobile_Image.data.attributes.url : process.env.NEXT_PUBLIC_STRAPI_BASE_URL + data.Image.data.attributes.url,
                //     "width": data?.Mobile_Image?.data?.attributes?.width ? data.Mobile_Image.data.attributes.width : "",
                //     "height": data?.Mobile_Image?.data?.attributes?.height ? data.Mobile_Image.data.attributes.height : "",
                //     'alt': data?.Mobile_Image?.data?.attributes?.alternativeText ? data.Mobile_Image.data.attributes.alternativeText : "",
                // }
            }
            break;
        case "drupal":
            returndata = {
                'id': data?.id ? data.id : "",
                'title': data?.field_carousel_item_title ? data.field_carousel_item_title : "",
                'slug': data?.field_carousel_item_cta?.[0]?.url ? data.field_carousel_item_cta[0].url : "",
                'description': data?.field_carousel_item_description ? data.field_carousel_item_description : "",
                "linkText": data?.field_carousel_item_cta?.[0]?.text ? data.field_carousel_item_cta[0].text : "",
                'desktopImage': {
                    "url": data?.field_carousel_item_image ? data.field_carousel_item_image : "",
                    "width": data?.carousel_item_image?.width ? data.carousel_item_image.width : "",
                    "height": data?.carousel_item_image?.height ? data.carousel_item_image.height : "",
                    'alt': data?.carousel_item_image?.alt ? data.carousel_item_image.alt : "",
                }
            }
            break;
        case "contentful":
            returndata = {
                'id': "",
                'title': data?.title ? data.title : "",
                'slug': data?.slug ? data.slug : "",
                'description': data?.excerpt ? JSON.stringify(data.excerpt) : "",
                'linkText':"Learn More",
                'desktopImage': {
                    "url": data?.image?.url ? data.image.url : "",
                    "width": data?.image?.width ? data.image.width : "",
                    "height": data?.image?.height ? data.image.height : "",
                    'alt': data?.image?.title ? data.image.title : "",
                }
            }
            break;
        case "contentstack":
            returndata = {
                'id': "",
                'title': data?.node?.title ? data.node.title : "",
                'slug': data?.node?.url ? data.node.url : "",
                'description': data?.node?.excerpt ? JSON.stringify(data.node.excerpt) : "",
                'linkText':"Learn More",
                'desktopImage': {
                    "url": data?.node?.background_imageConnection?.edges[0]?.node?.url ? data.node.background_imageConnection.edges[0].node.url : "",
                    "width": data?.node?.background_imageConnection?.edges[0]?.node?.dimension?.width ? data.node.background_imageConnection.edges[0].node.dimension.width : "",
                    "height": data?.node?.background_imageConnection?.edges[0]?.node?.dimension?.height ? data.node.background_imageConnection.edges[0].node.dimension.height : "",
                    'alt': data?.node?.background_imageConnection?.edges[0]?.node?.alt ? data.node.background_imageConnection.edges[0].node.alt : "",
                }
            }
            break;
        default:
            returndata = {
                'id': "1",
                'title': "Dummy Banner Title",
                'description': "Dummy Banner",
                'linkText':"Learn More",
                'slug': "",
                'desktopImage': {
                    "url": "/logo.png",
                    "width": "200",
                    "height": "200",
                    'alt': "Banner",
                },
                // 'mobileimage': {
                //     "url": process.env.NEXT_PUBLIC_STRAPI_BASE_URL + "/logo.png",
                //     "width": "200",
                //     "height": "200",
                //     'alt':  "Banner",
                // }
            }
            break;
    }
    return returndata;
}