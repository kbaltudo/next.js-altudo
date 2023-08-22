export function GetCardBlockData(data: any, provider: string) {
    let returnData: { id: any; title: any; description: any; backgroundImage: any; button: any; cards: any;  roundedImage: boolean; variant: number; grid: number };
    switch (provider) {
        case "strapi":
            returnData = {
                "id": data?.id ? data.id : "yt",
                "title": data?.Title ? data.Title : "",
                "description": data?.Description ? data.Description : "",
                "backgroundImage": data?.Background_Image?.data?.attributes?.url ? process.env.NEXT_PUBLIC_STRAPI_BASE_URL + data.Background_Image.data.attributes.url : "",
                "button": data?.ButtonTitle ? data.ButtonTitle : "",
                "cards": data?.cards.data ? data.cards.data : "",                
                "roundedImage": data?.CardImageRounded ? data.CardImageRounded : "",
                "variant": 1,
                "grid": 1
            }
            break;
        case "contentstack":
            returnData = {
                "id": data?.id  ? data.id:"",
                "title": data?.title ? data.title : "",
                "description": data?.description ? data.description : "",
                "backgroundImage": data?.background_imageConnection?.edges[0]?.node?.url ? data.background_imageConnection.edges[0].node.url : "",
                "button": data?.ButtonTitle ? data.ButtonTitle : "",
                "cards": data?.card_collectionConnection?.edges ? data.card_collectionConnection.edges : "",                
                "roundedImage": data?.rounded_image ? data.rounded_image : false,
                "variant": data?.variant ? data.variant : 1,
                "grid": data?.grid ? data.grid : 3
            }
            break;
        case "contentful":
            returnData = {
                "id": data?.id ? data.id : "yt",
                "title": data?.title ? data.title : "",
                "description": data?.description ? data.description : "",
                "backgroundImage": data?.backgroundImage?.url ? data.backgroundImage.url : "",
                "button": data?.buttonTitle ? data.buttonTitle : "",
                "cards": data?.cardsCollection?.items ? data.cardsCollection.items : "",                
                "roundedImage": data?.roundedImage ? data.roundedImage : false,
                "variant": data?.variant ? data.variant : 1,
                "grid": data?.grid ? data.grid : 3
            }
            break;
        case "drupal":
            returnData = {
                "id": data?.id ? data.id : "",
                "title": data?.title ? data.title : "",
                "description": data?.body ? data.body : "",
                "backgroundImage": data?.field_bio_image ? data.field_bio_image : "",
                "button": data?.buttonTitle ? data.buttonTitle : "",
                "cards": data?.field_featured_card?.items ? data.field_featured_card.items:"",                
                "roundedImage": data?.roundedImage ? data.roundedImage : true,
                "variant": data?.variant ? data.variant : 1,
                "grid": data?.grid ? data.grid : 3
            }
            break
        default:
            returnData = {
                "id": "55",
                "title": "Dummy Title",
                "description": "Dummy Description Sit nihil eius vel suscipit eaque sed porro obcaecati ab consectetur minima sed vero ullam. Eum voluptatem deleniti id deserunt aliquam ab pariatur reprehenderit eos nulla dicta. Eos sunt officiis et quia omnis et enim incidunt",
                "backgroundImage": process.env.NEXT_PUBLIC_STRAPI_BASE_URL + "/uploads/1368x500_5_634d0c434c.png",
                "button": "Dummy Click Me",
                "cards": [
                    {
                        'id': "1",
                        'title': "Dummy Card Title 1",
                        'slug': "abc",
                        "description": "Dummy Description Sit nihil eius vel suscipit eaque sed porro obcaecati ab consectetur minima sed vero ullam. Eum voluptatem deleniti id deserunt aliquam ab pariatur reprehenderit eos nulla dicta. Eos sunt officiis et quia omnis et enim incidunt",
                        'shortdescription': "Dummy Card short description 1 Sit nihil eius vel suscipit eaque sed porro obcaecati ab consectetur minima sed vero ullam. Eum voluptatem deleniti id deserunt aliquam ab pariatur reprehenderit eos nulla dicta. Eos sunt officiis et quia omnis et enim incidunt",
                        'image': {
                            "url": process.env.NEXT_PUBLIC_STRAPI_BASE_URL + "/uploads/400x400_af3b8c58a1.png",
                            "width": "250",
                            "height": "250",
                            'alt': "card Image",
                        }
                    },
                    {
                        'id': "2",
                        'title': "Dummy Card Title 2",
                        'slug': "abc",
                        "description": "Dummy Description Sit nihil eius vel suscipit eaque sed porro obcaecati ab consectetur minima sed vero ullam. Eum voluptatem deleniti id deserunt aliquam ab pariatur reprehenderit eos nulla dicta. Eos sunt officiis et quia omnis et enim incidunt",
                        'shortdescription': "Dummy Card short description 2 Sit nihil eius vel suscipit eaque sed porro obcaecati ab consectetur minima sed vero ullam. Eum voluptatem deleniti id deserunt aliquam ab pariatur reprehenderit eos nulla dicta. Eos sunt officiis et quia omnis et enim incidunt",
                        'image': {
                            "url": process.env.NEXT_PUBLIC_STRAPI_BASE_URL + "/uploads/400x400_af3b8c58a1.png",
                            "width": "250",
                            "height": "250",
                            'alt': "card Image",
                        }
                    },
                    {
                        'id': "1",
                        'title': "Dummy Card Title 3",
                        'slug': "abc",
                        "description": "Dummy Description Sit nihil eius vel suscipit eaque sed porro obcaecati ab consectetur minima sed vero ullam. Eum voluptatem deleniti id deserunt aliquam ab pariatur reprehenderit eos nulla dicta. Eos sunt officiis et quia omnis et enim incidunt",
                        'shortdescription': "Dummy Card short description 3 Sit nihil eius vel suscipit eaque sed porro obcaecati ab consectetur minima sed vero ullam. Eum voluptatem deleniti id deserunt aliquam ab pariatur reprehenderit eos nulla dicta. Eos sunt officiis et quia omnis et enim incidunt",
                        'image': {
                            "url": process.env.NEXT_PUBLIC_STRAPI_BASE_URL + "/uploads/400x400_af3b8c58a1.png",
                            "width": "250",
                            "height": "250",
                            'alt': "card Image",
                        }
                    }
                ],                
                "roundedImage": true,
                "variant": 1,
                "grid": 1

            }
            break
    }
    return returnData;
}