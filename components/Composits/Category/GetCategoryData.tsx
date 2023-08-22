export function GetCategoryData(data: any, provider: string) {
    let returnData: { id: any; slug:any; title: any;};
    switch (provider) {
        case "strapi":
            returnData = {
                "id": data?.id ? data.id : "",
                "slug":data?.slug ? data.slug : "",
                "title": data?.title ? data.title : "",                         
            }
            break;
        case "contentful":
            returnData = {
                "id": data?.id ? data.id : "",
                "slug":data?.slug ? data.slug : "",
                "title": data?.title ? data.title : "",                        
            }            
            break;
        case "drupal":
            returnData = {
                "id": data?.id ? data.id : "",
                "slug":data?.slug ? data.slug : "",
                "title": data?.title ? data.title : "",                        
            }
            break
        default:
            returnData = {
                "id":  "33",
                "slug": "",
                "title": "Dummy Title",                          
            }
            break            
    }
    return returnData;
}