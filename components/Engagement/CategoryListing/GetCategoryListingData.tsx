export function GetCategoryListingData(data: any, provider: string ) {
    let returnData: { id: any; title: any; horizontalView:boolean; categories: any; };
    switch (provider) {
        case "strapi":
            returnData = {
                "id": data?.id ? data.id : "",
                "title": data?.attributes?.Title ? data.attributes.Title : "",     
                "horizontalView": data?.horizontalView ? data.horizontalView : "",          
                "categories": data?.attributes?.Categories?.data ? data.attributes.Categories.data : "",                
            }
            break;
        case "contentful":
            returnData = {
                "id": data?.id ? data.id : "",
                "title": data?.title ? data.title : "", 
                "horizontalView": data?.horizontalView ? data.horizontalView : "",               
                "categories": data?.categoriesCollection?.items ? data.categoriesCollection.items : "",                
            }
            break;
        default:
            returnData = {
                "id": "1",
                "title":  "Dummy Title Dummy Ut quaerat autem",  
                "horizontalView": false,              
                "categories":  "",
                
            }
            break;
    }
    return returnData;
}