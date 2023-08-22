export function GetHeadingData(data: any, provider: string) {
    let returnData: { heading: any; size:any; alignment: any;};
    switch (provider) {
        case "strapi":
            returnData = {               
                "heading": data?.heading ? data.heading : null,
                "size": data?.size ? data.size : "",
                "alignment": data?.alignment != null ? data.alignment :"",
              }
            break;
        case "contentful":
            returnData = {               
                "heading": data?.heading ? data.heading : null,
                "size": data?.size ? data.size : "",
                "alignment": data?.alignment != null ? data.alignment :"",
              }
            break;
        case "drupal":
            return null;
            break;
        default:
            returnData = {               
                "heading": "Dummy title",
                "size": "h1",
                "alignment": "text-center",
              }
            break;
    }
    return returnData;
}