export function GetTeamsData(data: any, provider: string) {
   
    let returnData: { title: any; description: any; roundedImage: boolean; profileCard: boolean; grid: number; authors: any[]; };
    switch (provider) {
        case "contentful":
            returnData = {
                'title': data?.title ? data.title : "",
                'description': data?.description ? data.description : "",
                'roundedImage': data?.roundedImage ? data.roundedImage : false,
                'grid': data?.grid ? data.grid : 3,
                'profileCard': data?.profileCard ? data.profileCard : false,
                "authors": data?.teamMemberCollection?.items ? data.teamMemberCollection.items : "",
            }
            break;
        case "drupal":
            returnData = {
                'title': data?.title ? data.title : "",
                'description': data?.description ? data.description : "",
                'roundedImage': data?.roundedImage ? data.roundedImage : false,
                'grid': data?.grid ? data.grid : 2,
                'profileCard': data?.profileCard ? data.profileCard : true,
                "authors": data ? data : "",
            }
            break;
        default:
            returnData = {
                'title': "Dummy Title",
                'description': "",
                'roundedImage': false,
                'grid': 3,
                'profileCard': false,
                "authors": [],
            }
            break;
    }

    return returnData;
}