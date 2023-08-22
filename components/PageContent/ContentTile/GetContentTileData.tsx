export function GetContentTileData(data: any, provider: string) {
    let returnData: { id: any; description: any; media: { url: string; width: any; height: any; alt: any; contentType: string } | { url: string; width: any; height: any; alt: any; contentType: string } | { url: string; width: any; height: any; alt: any; contentType: string }; backgroundImage: string; };
    switch (provider) {
        case "strapi":
            returnData = {
                "id": data?.id ? data.id : "",
                "description": data?.Description ? data.Description : "",
                "media": {
                    "url": data?.media?.data?.attributes.url ? process.env.NEXT_PUBLIC_STRAPI_BASE_URL + data.media.data.attributes.url : "",
                    "width": data?.media?.data?.attributes?.width ? data.media.data.attributes.width : "",
                    "height": data?.media?.data?.attributes?.height ? data.media.data.attributes.height : "",
                    'alt': data?.media?.data?.attributes?.alternativeText ? data.media.data.attributes.alternativeText : "",
                    'contentType': data?.media?.data?.attributes?.contentType ? data.media.data.attributes.contentType : "",
                },
                "backgroundImage": data?.Background_Image?.data?.attributes?.url ? process.env.NEXT_PUBLIC_STRAPI_BASE_URL + data.Background_Image.data.attributes.url : "",
            }
            break;
        case "contentful":
            returnData = {
                "id": "1",
                "description": data?.description ? data.description : "",
                "media": {
                    "url": data?.media?.url ? data.media.url : "",
                    "width": data?.media?.width ? data.media.width : "",
                    "height": data?.media?.height ? data.media.height : "",
                    'alt': data?.media?.title ? data.media.title : "",
                    'contentType': data?.media?.contentType ? data.media?.contentType : "",
                },
                "backgroundImage": data?.backgroundImage?.url ? data.backgroundImage.url : "",
            }
            break;
        case "drupal":
            return null;
            break;
        case "contentstack":
            return null;
            break;
        default:
            returnData = {
                "id": "1",
                "description": "This is Dummy Description from Dictonary",
                "media": {
                    "url": "/image.jpg",
                    "width": "2010",
                    "height": "1400",
                    'alt': "Dummy Description",
                    'contentType': ""
                },
                "backgroundImage": "",
            }
            break;
    }
    return returnData;
}