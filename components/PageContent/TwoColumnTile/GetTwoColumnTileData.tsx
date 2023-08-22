export function GetTwoColumnCallout(data: any, provider: string) {
    let returnData: { id: any; title1: any; description1: any; backgroundImage1:any; title2: any; description2: any; backgroundImage2:any; backgroundImage: any };
    switch (provider) {
        case "strapi":
            returnData = {
                "id": data?.id ? data.id : "",
                "title1": data?.title1 ? data.title1 : "",
                "description1": data?.description1 ? data.description1 : "",
                "backgroundImage1": data?.backgroundImage1?.data?.attributes?.url ? data.backgroundImage1.data.attributes.url : "",
                "title2": data?.title2 ? data.title2 : "",
                "description2": data?.description2 ? data.description2 : "",
                "backgroundImage2": data?.backgroundImage2?.data?.attributes?.url ? data.backgroundImage2.data.attributes.url : "",
                "backgroundImage": data?.backgroundImage?.data?.attributes?.url ? data.backgroundImage.data.attributes.url : "",
            }
            break;
        case "contentful":
            returnData = {
                "id": data?.id ? data.id : "",
                "title1": data?.title1 ? data.title1 : "",
                "description1": data?.description1 ? data.description1 : "",
                "backgroundImage1": data?.backgroundImage1?.url ? data.backgroundImage1.url : "",
                "title2": data?.title2 ? data.title2 : "",
                "description2": data?.description2 ? data.description2 : "",
                "backgroundImage2": data?.backgroundImage2?.url ? data.backgroundImage2.url : "",
                "backgroundImage": data?.backgroundImage?.url ? data.backgroundImage.url : "",
            }
            break;
        case "drupal":
            returnData = {
                "id": data?.id ? data.id : "",
                "title1": data?.field_title ? data.field_title : "",
                "description1": data?.field_description ? data.field_description : "",
                "backgroundImage1": data?.backgroundImage1?.url ? data.backgroundImage1.url : "",
                "title2": data?.title2 ? data.title2 : "",
                "description2": data?.description2 ? data.description2 : "",
                "backgroundImage2": data?.field_image ? data.field_image : "",
                "backgroundImage": data?.backgroundImage?.url ? data.backgroundImage.url : "",
            }
            break;
        default:
            returnData = {
                "id": "23",
                "title1": "Dummy Title1",
                "description1": "Dummy Description1",
                "backgroundImage1":  "",
                "title2": "Dummy Title2",
                "description2": "Dummy Description2",
                "backgroundImage2":  "",
                "backgroundImage":  "",
            }
            break;
    }
    return returnData;
}