export function GetCardData(data: any, provider: string) {
    
    let returnData: { id: any; title: any; slug: any; linkText: any; description: any; shortDescription: any; image: { url: string; width: any; height: any; alt: any; }; thumbnail: { url: string; width: any; height: any; alt: any; }; categories: any; tags: any };
    switch (provider) {
        case "strapi":
            returnData = {
                "id": data?.id ? data.id : "",
                "title": data?.attributes?.Title ? data.attributes.Title : "",
                'slug': data?.attributes?.Slug ? data.attributes.Slug : "",
                'linkText': data?.attributes?.linktext ? data.attributes.linktext : "",
                "description": data?.attributes?.Description ? data.attributes.Description : "",
                "shortDescription": data?.attributes?.ShortDescription ? data.attributes.ShortDescription : "",
                "image": {
                    "url": data?.attributes?.Image?.data?.attributes.url ? process.env.NEXT_PUBLIC_STRAPI_BASE_URL + data.attributes.Image.data.attributes.url : "",
                    "width": data?.attributes?.Image?.data?.attributes?.width ? data.attributes.Image.data.attributes.width : "",
                    "height": data?.attributes?.Image?.data?.attributes?.height ? data.attributes.Image.data.attributes.height : "",
                    'alt': data?.attributes?.Image?.data?.attributes?.alternativeText ? data.attributes.Image.data.attributes.alternativeText : "",
                },
                "thumbnail": {
                    "url": data?.attributes?.thumbnail?.data?.attributes.url ? process.env.NEXT_PUBLIC_STRAPI_BASE_URL + data.attributes.thumbnail.data.attributes.url : "",
                    "width": data?.attributes?.thumbnail?.data?.attributes?.width ? data.attributes.thumbnail.data.attributes.width : "",
                    "height": data?.attributes?.thumbnail?.data?.attributes?.height ? data.attributes.thumbnail.data.attributes.height : "",
                    'alt': data?.attributes?.thumbnail?.data?.attributes?.alternativeText ? data.attributes.thumbnail.data.attributes.alternativeText : "",
                },
                "categories": data?.attributes?.Categories?.data ? data.attributes.Categories.data : "",
                "tags": data?.attributes?.Tags?.data ? data.attributes.Tags.data : ""
            }
            break;
        case "contentful":
            returnData = {
                "id": data?.id ? data.id : "",
                "title": data?.title ? data.title : "",
                'slug': data?.slug ? data.slug : "",
                'linkText': data?.linktext ? data.linktext : "",
                "description": data?.description ? data.description : "",
                "shortDescription": data?.subTitle ? data.subTitle : "",
                "image": {
                    "url": data?.image?.url ? data.image.url : "",
                    "width": data?.image?.width ? data.image.width : "",
                    "height": data?.image?.height ? data.image.height : "",
                    'alt': data?.image?.alternativeText ? data.image.alternativeText : "",
                },
                "thumbnail": {
                    "url": data?.thumbnail?.url ? data.thumbnail.url : data?.image?.url ? data.image.url : "",
                    "width": data?.thumbnail?.width ? data.thumbnail.width : "",
                    "height": data?.thumbnail?.height ? data.thumbnail.height : "",
                    'alt': data?.thumbnail?.alternativeText ? data.thumbnail.alternativeText : "",
                },
                "categories": data?.Categories ? data.Categories : "",
                "tags": ""
            }
            break;
        case "contentstack":
            returnData = {
                "id": data?.id ? data.id : "",
                "title": data?.node?.title ? data.node.title : "",
                'slug': data?.node?.url ? data.node.url : "",
                'linkText': data?.node?.link_text ? data.node.link_text : "",
                "description": data?.node?.description ? data.node.description : "",
                "shortDescription": data?.node?.short_description ? data.node.short_description : "",
                "image": {
                    "url": data?.node?.imageConnection?.edges[0]?.node?.url ? data.node.imageConnection.edges[0].node.url : "",
                    "width": data?.node?.imageConnection?.edges[0]?.node?.dimension?.width ? data.node.imageConnection.edges[0].node.dimension.width : "",
                    "height": data?.node?.imageConnection?.edges[0]?.node?.dimension?.height ? data.node.imageConnection.edges[0].node.dimension.height : "",
                    'alt': data?.node?.imageConnection?.edges[0]?.node?.alt ? data.node.imageConnection.edges[0].node.alt : "",
                },
                "thumbnail": {
                    "url": data?.node?.thumbnailConnection?.edges[0]?.node?.url ? data.node.thumbnailConnection.edges[0].node.url : data?.node?.imageConnection?.edges[0]?.node?.url ? data.node.imageConnection.edges[0].node.url : "",
                    "width": data?.node?.thumbnailConnection?.edges[0]?.node?.dimension?.width ? data.node.thumbnailConnection.edges[0].node.dimension.width : data?.node?.imageConnection?.edges[0]?.node?.dimension?.width ? data.node.imageConnection.edges[0].node.dimension.width : "",
                    "height": data?.node?.thumbnailConnection?.edges[0]?.node?.dimension?.height ? data.node.thumbnailConnection.edges[0].node.dimension.height : data?.node?.imageConnection?.edges[0]?.node?.dimension?.height ? data.node.imageConnection.edges[0].node.dimension.height : "",
                    'alt': data?.node?.thumbnailConnection?.edges[0]?.node?.alt ? data.node.thumbnailConnection.edges[0].node.alt : data?.node?.imageConnection?.edges[0]?.node?.alt ? data.node.imageConnection.edges[0].node.alt : "",
                },
                "categories": data?.Categories ? data.Categories : "",
                "tags": ""
            }
            break;
        case "drupal":
            returnData = {
                "id": data?.field_id ? data.field_id :  "",
                "title": data?.title ? data.title : "",
                'slug': data?.field_card_slug ? data.field_card_slug : "",
                'linkText': data?.field_card_link_text[0]?.text ? data.field_card_link_text[0].text : "Read More",
                "description": data?.field__description ? data.field__description : "",
                "shortDescription": data?.field_card_short_description ? data.field_card_short_description : "",
                "image": {
                    "url": data?.field_card_image ? data.field_card_image : data?.field_card_thumbnail ? data.field_card_thumbnail : "",
                    "width": data?.field_bio_image?.width ? data.field_bio_image.width : "500",
                    "height": data?.field_bio_image?.height ? data.field_bio_image.height : "500",
                    'alt': data?.field_bio_image?.alt ? data.field_bio_image.alt : "",
                },
                "thumbnail": {
                    "url": data?.field_card_thumbnail ? data.field_card_thumbnail:data?.field_card_image ? data.field_card_image : "",
                    "width": data?.field_bio_image?.width ? data.field_bio_image.width : "500",
                    "height": data?.field_bio_image?.height ? data.field_bio_image.height : "500",
                    'alt': data?.field_bio_image?.alt ? data.field_bio_image.alt : "",
                },
                "categories": data?.Categories ? data.Categories : "",
                "tags": ""
            }
            break;
        default:
            returnData = {
                "id": "1",
                "title": "Dummy Title Dummy Ut quaerat autem",
                'slug': "Dummy Dummy Ut quaerat autem",
                'linkText': "Read More",
                "description": "Dummy Ut quaerat autem id dolorum voluptatem est vitae minima sit nulla temporibus rem voluptas molestiae non laborum galisum eos iusto dolore! Et accusamus necessitatibus ab totam voluptatem et repudiandae fugit.",
                "shortDescription": "Dummy Ut quaerat autem id dolorum voluptatem",
                "image": {
                    "url": process.env.NEXT_PUBLIC_STRAPI_BASE_URL + "/uploads/card_c47cac70df.jpg",
                    "width": "300",
                    "height": "300",
                    'alt': "ALT dummy",
                },
                "thumbnail": {
                    "url": "",
                    "width": "",
                    "height": "",
                    'alt': "",
                },
                "categories": "",
                "tags": ""
            }
            break;
    }
    return returnData;
}