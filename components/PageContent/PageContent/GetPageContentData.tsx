export function GetPageContent(data: any, provider:string) {
    let returndata :{description: any; title:any; }
    switch (provider) {
        case "strapi":           
                returndata = {
                    'title': data?.title ? data.title : "",
                    'description': data?.description ? data.description : ""
                }
            break;
            case "contentful":           
            returndata = {
                'title': data?.title ? data.title : "",
                'description': data?.description ? data.description : ""
            }
        break;            
        default:
            returndata = {
                'title': "PageContent Title",
                'description': "PageContent Description Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
            break;
    }
    return returndata;
}