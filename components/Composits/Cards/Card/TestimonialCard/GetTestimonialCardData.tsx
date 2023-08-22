export function GetTestimonialData(data: any, provider: string) {
  let returnData: {id:any; description:any; author: {nickname: any; designation: any; organization: any;authorImage: {url:any;width: any; height: any;alt: any;};};};;
 
 switch (provider) {
    case "strapi":
      returnData = {
        "id":data?.id ? data.id:"",
        "description":data?.description ? data.description:"",
        "author": {
          "nickname": data?.author?.nickname ? data.author.nickname : "",         
          "designation": data?.author?.designation ? data.author.designation : "",
          "organization": data?.author?.organization ? data.author.organization : "",
          "authorImage": {
            "url": data?.author?.authorImage?.url ? data.author.authorImage.url : "",
            "width": data?.author?.authorImage?.width ? data.author.authorImage.width : "",
            "height": data?.author?.authorImage?.height ? data.author.authorImage.height : "",
            "alt": data?.author?.authorImage?.alt ? data.author.authorImage.alt : "",
          }
        }
      }
      break;
    case "contentful":

      returnData = {
        "id":data?.id ? data.id:"",
        "description": data?.description ? data.description : "",
        "author": {
          "nickname": data?.authorData?.authorName ? data.authorData.authorName : "",
          "designation": data?.authorData?.designation ? data.authorData.designation : "",
          "organization": data?.authorData?.organization ? data.authorData?.organization : "",
          "authorImage": {
            "url": data?.authorData?.image?.url ? data.authorData.image.url : "",
            "width": data?.authorData?.image?.width ? data.authorData.image.width : "",
            "height": data?.authorData?.image?.height ? data.authorData.image.height : "",
            "alt": data?.authorData?.image?.alt ? data.authorData.image.alt : "",
          }
        }
      }
      break;
    case "drupal":
      returnData = {
        "id": data?.id ? data.id:"",
        "description": data?.field_interest ? data.field_interest : "",
        "author": {
          "nickname": data?.title ? data.title : "",
          "designation": data?.field_designation ? data.field_designation : "",
          "organization": data?.field_organization ? data.field_organization : "",
          "authorImage": {
            "url": data?.field_bio_image ? data.field_bio_image : "",
            "width": data?.authorData?.image?.width ? data.authorData.image.width : "500",
            "height": data?.authorData?.image?.height ? data.authorData.image.height : "500",
            "alt": data?.authorData?.image?.alt ? data.authorData.image.alt : "",
          }
        }
      }
      break;
      default:
      returnData = {
        "id":"1",
        "description": "dummy content dummy content",
        "author": {
          "nickname": "nickname",          
          "designation": "designation",
          "organization": "organization",
          "authorImage": {
            "url": "author_image",
            "width": "width",
            "height": "height",
            "alt": "alternativeText",
          }
        }
      }

      break;
  }
  return returnData;
}


