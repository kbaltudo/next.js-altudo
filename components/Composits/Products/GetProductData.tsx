export function GetProductsData(data: any, provider: string) {
   
    let returnData: { products: any[];};
    switch (provider) {
        case "drupal":
            returnData = {
                'products': data?.items ? data.items : "",
            }
            break;
        default:
            returnData = {
                'products': data?.items ? data.items : "",
            }
            break;
    }

    return returnData;
}