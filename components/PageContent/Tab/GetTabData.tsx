export function GetTabData(data: any, provider: string) {
    let returnData:any;
    switch (provider) {
        case "strapi":
            returnData =  data.map((tab: { id: any; isactive:any; Title: any; Description: any;  }) => {
                return {
                    "id":tab?.id ? tab.id : "",
                    "isactive":tab?.isactive ? tab.isactive : "",
                    "title":  tab?.Title ? tab.Title : "",
                    "description": tab?.Description ? JSON.stringify(tab.Description) : ""
                }
            })
            break;
       
        default:
            returnData = [{
                "id":"1",
                "isactive": true,
                "title": "Dummy Dictionary Title1",
                "description": "Dummy Description 1 from Dictonary.",
            },
            {
                "id":"2",
                "isactive": false,
                "title": "Dummy Dictionary Title2",
                "description": "Dummy Description 2 from Dictonary.",
            }
        ]
            break;
    }
   
    return returnData;
}