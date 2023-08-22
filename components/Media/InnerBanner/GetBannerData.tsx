export function GetBannerData(data: any, provider: string) {
    let returnData: { id: any; title: any; description: any; image: { url: string; width: any; height: any; alt: any; } | { url: string; width: any; height: any; alt: any; } | { url: string; width: any; height: any; alt: any; }; };
    switch (provider) {
        case "strapi":
            returnData = {
                "id": data?.id ? data.id : "",
                "title": data?.Title ? data.Title : "",
                "description": data?.Description ? data.Description : "",
                "image": {
                    "url": data?.Image?.data?.attributes.url ? process.env.NEXT_PUBLIC_STRAPI_BASE_URL + data.Image.data.attributes.url : "",
                    "width": data?.Image?.data?.attributes?.width ? data.Image.data.attributes.width : "",
                    "height": data?.Image?.data?.attributes?.height ? data.Image.data.attributes.height : "",
                    'alt': data?.Image?.data?.attributes?.alternativeText ? data.Image.data.attributes.alternativeText : "",
                }
            }
            break;
        case "contentful":
            returnData = {
                "id": data?.id ? data.id : "",
                "title": data?.title ? data.title : "",
                "description": data?.excerpt ? data.excerpt : "",
                "image": {
                    "url": data?.image?.url ? data.image.url : "",
                    "width": data?.image?.width ? data.image.width : "",
                    "height": data?.image?.height ? data.image.height : "",
                    'alt': data?.image?.title ? data.image.title : "",
                }
            }
            break;
        default:
            returnData = {
                "id": "1",
                "title": "This is Dummy title from Dictonary",
                "description": "This is Dummy Description from Dictonary",
                "image": {
                    "url": "/image.jpg",
                    "width": "2010",
                    "height": "1400",
                    'alt': "Dummy Description",
                }                
            }
            break;
    }
    return returnData;
}