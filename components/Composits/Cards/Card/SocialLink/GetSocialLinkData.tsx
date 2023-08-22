export function GetSocialLinkData(data: any, provider: string) {
   
    let returnData: { id: any; icon: any; link: any; };
    switch (provider) {
        case "strapi":
            returnData = {
                "id": data?.id ? data.id : "",
                "icon": data?.icon ? data.icon : "",
                "link": data?.link ? data.link : ""
            }
            break;
        case "contentful":
            returnData = {
                "id": data?.id ? data.id : "",
                "icon": data?.icon ? data.icon : "",
                "link": data?.link ? data.link : ""
            }
            break;
        case "drupal":
            returnData = {
                "id": data?.id ? data.id : "",
                "icon": data?.field_platform ? data.field_platform : "",
                "link": data?.field_username ? data.field_username : ""
            }
            break;
        default:
            returnData = {
                "id": "22",
                "icon": "fa-brands fa-square-twitter",
                "link": "https://twitter.com/login?lang=en"
            }
            break;
    }
    return returnData;
}