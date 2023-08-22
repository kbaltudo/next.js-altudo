export function GetAudioData(data: any, provider: string) {
    let returnData: { audio:any; loop:boolean; autoPlay:boolean; controls:boolean };
    switch (provider) {
        case "strapi":
            returnData = {                              
                "audio": {
                    "url": data?.video?.url ? data.video.url : "",
                    "height": data?.height ? data.height : "",
                    "width": data?.width ? data.width : "",                    
                },               
                "loop":data?.loop ? data.loop:false,
                "autoPlay":data?.autoPlay ? data.autoPlay:false,
                "controls":data?.controls ? data.controls:true,
            }
            break;
        case "contentful":
            returnData = {                              
                "audio": {
                    "url": data?.video?.url ? data.video.url : "",
                    "height": data?.height ? data.height : "",
                    "width": data?.width ? data.width : "",                    
                },               
                "loop":data?.loop ? data.loop:false,
                "autoPlay":data?.autoPlay ? data.autoPlay:false,
                "controls":data?.controls ? data.controls:true,
            }
            break;
        case "drupal":
            returnData = {                              
                "audio": {
                    "url": data?.video?.url ? data.video.url : "",
                    "height": data?.height ? data.height : "",
                    "width": data?.width ? data.width : "",                    
                },               
                "loop":data?.loop ? data.loop:false,
                "autoPlay":data?.autoPlay ? data.autoPlay:false,
                "controls":data?.controls ? data.controls:true,
            }
            break
        default:
            returnData = {
                "audio": {
                    "url":  "",
                    "height":  "",
                    "width": "",                    
                },                
                "loop":false,
                "autoPlay":false,
                "controls":true,
            }
            break
    }
    return returnData;
}