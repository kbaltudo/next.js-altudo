export function GetCartItemsData(data: any, provider: string) { 
  let returnData: { title: string; body: any; field_price: any; self: any; field_id: any; field_product_image: { items: {id:any; field_image:any; } }; };
  switch (provider) {
    case "drupal":
      returnData = {
        'title': data?.title ? data.title : "",
        'body': data?.body ? data.body : "",
        'field_price': data?.field_price ? data.field_price : 100,
        'self': data?.self ? data?.self : "",
        'field_id': data?.field_id ? data.field_id : "",
        'field_product_image': {
          'items':{
            'id': data?.field_product_image?.items?.[0]?.id ? data?.field_product_image.items[0].id : 3,
            'field_image': data?.field_product_image?.items?.[0]?.field_image ? data.field_product_image.items[0].field_image : "/",
          }
        },
      }
      break;
    default:
      returnData = {
        "title": "",
        "body": "dummy content dummy content",
        'field_price': 100,
        'self' : "",
        'field_id' : 2,
        'field_product_image': {
          'items':{
            'id': 100,
            'field_image': "/",
          }
        }
      }
      break;
  }
  return returnData;
}