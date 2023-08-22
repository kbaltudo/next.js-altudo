export function GetNavigationLinkData(data: any, provider: string) {    
    let returnData: { id: any; title: any; slug: any;};
    switch (provider) {
        case "strapi":
            returnData = {
                "id": data?.id ? data.id : "yt",
                "title": data?.Title ? data.Title : "",
                "slug": data?.slug ? data.slug : "",                
            }
            break;
        case "contentstack":
            returnData = {
                "id": data?.id ? data.id : "yt",
                "title": data?.Title ? data.Title : "",
                "slug": data?.slug ? data.slug : "",                
            }
            break;
        case "contentful":
            returnData = {
                "id": data?.id ? data.id : "yt",
                "title": data?.title ? data.title : "",
                "slug": data?.slug ? data.slug : "",                
            }
            break;
        case "drupal":
            returnData = {
                "id": data?.id ? data.id : "yt",
                "title": data?.text ? data.text : "",
                "slug": data?.url ? data.url.split("/")[3] : "",                
            }
            break
        default:
            returnData = {
                "id":  "yt",
                "title":  "Dummy Title",
                "slug": "dummy-title",                
            }
            break
    }
    return returnData;
}