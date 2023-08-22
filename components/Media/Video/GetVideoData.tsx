export function GetVideoData(data: any, provider: string) {
    let returnData: { video:any; image:any; loop:boolean; autoPlay:boolean; controls:boolean };
    switch (provider) {
        case "strapi":
            returnData = {                              
                "video": {
                    "url": data?.video?.url ? data.video.url : "",
                    "height": data?.height ? data.height : "",
                    "width": data?.width ? data.width : "",                    
                },
                "image": {
                    "url": data?.image?.url ? data.image.url : "",                                     
                },
                "loop":data?.loop ? data.loop:false,
                "autoPlay":data?.autoPlay ? data.autoPlay:false,
                "controls":data?.controls ? data.controls:true,
            }
            break;
        case "contentful":
            returnData = {
                "video": {
                    "url": data?.video?.url ? data.video.url : "",
                    "height": data?.height ? data.height : "",
                    "width": data?.width ? data.width : "",                    
                },
                "image": {
                    "url": data?.image?.url ? data.image.url : "",                                     
                },
                "loop":data?.loop ? data.loop:false,
                "autoPlay":data?.autoPlay ? data.autoPlay:false,
                "controls":data?.controls ? data.controls:true,
            }
            break;
        case "drupal":
            returnData = {
                "video": {
                    "url": data?.video?.url ? data.video.url : "",
                    "height": data?.height ? data.height : "",
                    "width": data?.width ? data.width : "",                    
                },
                "image": {
                    "url": data?.image?.url ? data.image.url : "",                                     
                },
                "loop":data?.loop ? data.loop:false,
                "autoPlay":data?.autoPlay ? data.autoPlay:false,
                "controls":data?.controls ? data.controls:true,
            }
            break
        default:
            returnData = {
                "video": {
                    "url":  "",
                    "height":  "",
                    "width": "",                    
                },
                "image": {
                    "url":  "",                                     
                },
                "loop":false,
                "autoPlay":false,
                "controls":true,
            }
            break
    }
    return returnData;
}