export function GetModals(data: any, provider:string) {
    let returndata: { description: any; title:any; image: { url: string; width: any; height: any; alt: any; } | { url: string; width: any; height: any; alt: any; } | { url: string; width: any; height: any; alt: any; }};
    switch (provider) {
        case "strapi":           
                returndata = {
                    'title': data?.title ? data.title : "",
                    'description': data?.description ? data.description : "",
                    "image": {
                        "url": data?.Image?.data?.attributes.url ? process.env.NEXT_PUBLIC_STRAPI_BASE_URL + data.Image.data.attributes.url : "",
                        "width": data?.Image?.data?.attributes?.width ? data.Image.data.attributes.width : "",
                        "height": data?.Image?.data?.attributes?.height ? data.Image.data.attributes.height : "",
                        'alt': data?.Image?.data?.attributes?.alternativeText ? data.Image.data.attributes.alternativeText : "",
                    },
                }
            break;
            case "contentful":           
            returndata = {
                'title': data?.title ? data.title : "",
                'description': data?.description ? data.description : "",
                "image": {
                    "url": data?.Image?.data?.attributes.url ? process.env.NEXT_PUBLIC_STRAPI_BASE_URL + data.Image.data.attributes.url : "",
                    "width": data?.Image?.data?.attributes?.width ? data.Image.data.attributes.width : "",
                    "height": data?.Image?.data?.attributes?.height ? data.Image.data.attributes.height : "",
                    'alt': data?.Image?.data?.attributes?.alternativeText ? data.Image.data.attributes.alternativeText : "",
                },
            }
        break;            
        default:
            returndata = {
                'title': "Modal Title",
                'description': "Modal Description Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                "image": {
                    "url": "/logo.png",
                    "width": "300",
                    "height": "150",
                    'alt': "Dummy Description",
                },
            }
            break;
    }
    return returndata;
}