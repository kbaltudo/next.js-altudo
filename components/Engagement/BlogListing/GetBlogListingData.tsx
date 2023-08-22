export function GetBlogListingData(data: any, provider: string) {
    let returnData: { id: any; title: any; description: any; roundedImage: boolean;variant:number; imageAlignment: any;grid:number; blogs:any[] };
    switch (provider) {
        case "strapi":
            returnData = {
                "id": data?.id ? data.id : "",                
                "title": data?.title ? data.title : "",
                "description": data?.description ? data.description : "",
                "roundedImage": data?.roundedImage ? data.roundedImage : "",
                "imageAlignment": data?.imageAlignment ? data.imageAlignment : "",
                "variant":data?.variant ? data.variant:1,
                "grid": data?.grid ? data.grid : "",
                "blogs": data?.blogsCollection?.items ? data.blogsCollection.items:""
            }
            break;
        case "contentful":
            returnData = {
                "id": data?.id ? data.id : "",                
                "title": data?.title ? data.title : "",
                "description": data?.description ? data.description : "",
                "roundedImage": data?.roundedImage ? data.roundedImage : "",
                "imageAlignment": data?.imageAlignment ? data.imageAlignment : "",
                "variant":data?.variant ? data.variant: 1,
                "grid": data?.grid ? data.grid : "",
                "blogs": data?.blogsCollection?.items ? data.blogsCollection.items:""
            }
            break;
        case "drupal":
            returnData = {
                "id": data?.id ? data.id : "",                
                "title": data?.title ? data.title : "",
                "description": data?.description ? data.description : "",
                "roundedImage": data?.roundedImage ? data.roundedImage : "",
                "imageAlignment": data?.imageAlignment ? data.imageAlignment : "",
                "variant":data?.variant ? data.variant: 1,
                "grid": data?.grid ? data.grid : "",
                "blogs": data
            }
            break
        default:
            returnData = {
                "id":  "",                
                "title":  "",
                "description":  "",
                "roundedImage":true  ,
                "imageAlignment": "",
                "variant":1,
                "grid": 1,
                "blogs": []
            }
            break
    }
    return returnData;
}