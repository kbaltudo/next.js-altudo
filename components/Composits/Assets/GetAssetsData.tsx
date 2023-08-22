export function GetAssetsData(data: any) {
    let returnData: { id: any; title: any; description: any; linkText: any; assets: any[]},
    provider = "STRAPI";
    switch (provider) {
        case "STRAPI":
            returnData = {
                'id': data?.id ? data.id : "",
                'title': data?.Title ? data.Title : "",
                'description': data?.Description ? data.Description : "",
                'linkText': data?.LinkText ? data.LinkText : "",
                "assets": data?.Asset?.data ? data.Asset.data.map((card: { attributes: any; id: any; }) => {
                    let carddata = card.attributes;
                    return {
                        'id': card?.id ? card.id : "",
                        'title': carddata?.Title ? carddata?.Title : "",
                        'slug': carddata?.Slug ? carddata.Slug : "",
                        'image': {
                            "url": carddata?.Image?.data?.attributes?.url ? process.env.NEXT_PUBLIC_STRAPI_BASE_URL + carddata.Image.data.attributes.url : "",
                            "width": carddata?.Image?.data?.attributes?.width ? carddata.Image.data.attributes.width : "",
                            "height": carddata?.Image?.data?.attributes?.height ? carddata.Image.data.attributes.height : "",
                            'alt': carddata?.Image?.data?.attributes?.alternativeText ? carddata.Image.data.attributes.alternativeText : "",
                        },
                        'media': {
                            "url": carddata?.Media?.data?.attributes?.url ? process.env.NEXT_PUBLIC_STRAPI_BASE_URL + carddata.Media.data.attributes.url : "",
                            'alt': carddata?.Media?.data?.attributes?.alternativeText ? carddata.Media.data.attributes.alternativeText : "",
                        }
                    }
                }) : ""
            }
            break;
        default:
            returnData = {
                'id': "1",
                'title': "Dummy Title",
                'description': "Dummy Description",
                'linkText': "Learn More",
                "assets": 
                    [{
                        'id': "1",
                        'title': "Dummy Assets Title",
                        'slug': "dummy-slug",
                        'image': {
                            "url": "/images.jpg",
                            "width": "400",
                            "height": "400",
                            'alt': "Dummy Alt",
                        },
                        'media': {
                            "url": "/assets.pdf",
                            'alt': "Dummy Alt",
                        }
                    }]
            }
            break;
    }
    return returnData;
}