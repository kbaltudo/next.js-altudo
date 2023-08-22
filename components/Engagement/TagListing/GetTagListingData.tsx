export function GetTags(data: any) {
    let returndata: any;
    let result = "CONTENTFUL"
    switch (result) {
        case "STRAPI":
            returndata = data.map((tag: { id: any; title: any; description: any; slug: any }) => {
                return {

                    'id': tag?.id ? tag.id : "",
                    'title': tag?.title ? tag.title : "",
                    'slug': tag?.slug ? tag.slug : "",
                    'description': tag?.description ? tag.description : "",
                }
            })
            break;
        default:
            returndata = [{
                'id': "1",
                'title': "Tag Dummy Title from Dictonary",
                'description': "tag Dummy Discription from Dictonary",
                'slug': "slug dummy"
            }]
            break;
    }
    return returndata;

}