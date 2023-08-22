export function GetSocialShareData(data: any, provider: string) {
   
    let returnData: { id: any; title: any; alignment: any; socialLinks: any };
    switch (provider) {
        case "strapi":
            returnData = {
                "id": data?.id ? data.id : "",
                "title": data?.title ? data.title : "",
                "alignment": data?.alignment ? data.alignment : "",
                "socialLinks": data?.socialLinksCollection?.items ? data.socialLinksCollection.items : ""
            }
            break;
        case "contentful":
            returnData = {
                "id": data?.id ? data.id : "",
                "title": data?.title ? data.title : "",
                "alignment": data?.alignment ? data.alignment : "",
                "socialLinks": data?.socialLinksCollection?.items ? data.socialLinksCollection.items : ""
            }
            break;
        case "drupal":
            returnData = {
                "id": data?.id ? data.id : "",
                "title": data?.title ? data.title : "",
                "alignment": data?.alignment ? data.alignment : "",
                "socialLinks": data?.items ? data.items : ""
            }
            break;
        default:
            returnData = {
                "id": "33",
                "title": "Follow Us",
                "alignment": "Horizontal",
                "socialLinks": [
                    {
                        "id": "1",
                        "icon": "fa-brands fa-square-facebook",
                        "link": "https://www.facebook.com/"
                    },
                    {
                        "id": "2",
                        "icon": "fa-brands fa-linkedin",
                        "link": "https://in.linkedin.com/"
                    },
                    {
                        "id": "3",
                        "icon": "fa-brands fa-square-youtube",
                        "link": "https://www.youtube.com/"
                    }
                ]
            }
            break;
    }
    return returnData;
}