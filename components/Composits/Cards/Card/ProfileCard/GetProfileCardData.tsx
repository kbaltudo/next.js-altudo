export function GetProfileCardData(data: any, provider: string) { 
  let returnData: { name: string; designation: any; organization: any; profileImage: { url: any; alt: any; height: any; width: any; }; };
  switch (provider) {
    case "contentful":
      returnData = {
        "name": data?.authorName ? data.authorName : "",
        "designation": data?.designation ? data.designation : "",
        "organization": data?.organization ? data.organization : "",
        "profileImage": {
          "url": data?.image?.url ? data.image.url : "",
          "alt": data?.image?.title ? data.image.title : "",
          "width": data?.image?.width ? data.image.width : "",
          "height": data?.image?.height ? data.image.height : "",
        }
      }
      break;
    case "drupal":
      returnData = {
        "name": data?.authorName ? data.authorName : "",
        "designation": data?.designation ? data.designation : "",
        "organization": data?.organization ? data.organization : "",
        "profileImage": {
          "url": data?.image?.url ? data.image.url : "",
          "alt": data?.image?.title ? data.image.title : "",
          "width": data?.image?.width ? data.image.width : "",
          "height": data?.image?.height ? data.image.height : "",
        }
      }
      break;
    case "strapi":
      returnData = {
        "name": data?.authorName ? data.authorName : "",
        "designation": data?.designation ? data.designation : "",
        "organization": data?.organization ? data.organization : "",
        "profileImage": {
          "url": data?.image?.url ? data.image.url : "",
          "alt": data?.image?.title ? data.image.title : "",
          "width": data?.image?.width ? data.image.width : "",
          "height": data?.image?.height ? data.image.height : "",
        }
      }
      break;
    default:
      returnData = {
        "name": "nickname",
        "designation": "dummy content dummy content",
        "organization": "designation",
        "profileImage": {
          "url": "/",
          "alt": "dummy image",
          "width": "100",
          "height": "100",
        }
      }
      break;
  }
  return returnData;
}