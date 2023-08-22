export function GetHomeBanner(data: any, provider: string) {
    let returndata: { adaptiveHeight: boolean; arrows: boolean; dots: boolean; infiniteScroll: boolean; slideToScroll: number; slideToShow: number; speed: number; };

    switch (provider) {
        case "contentstack":
            returndata = {
                'adaptiveHeight': data?.adaptive_height ? data.adaptive_height : true,
                'arrows': data?.arrows ? data.arrows : true,
                'dots': data?.dots ? data.dots : true,
                'infiniteScroll': data?.infinite_scroll ? data.infinite_scroll : true,
                'slideToScroll': data?.slide_to_scroll ? data.slide_to_scroll : 1,
                'slideToShow': data?.slidetoshow ? data.slidetoshow : 1,
                'speed': data?.speed ? data.speed : 15000,
            }
            break;
        case "contentful":
            returndata = {
                'adaptiveHeight': data?.adaptiveHeight ? data.adaptiveHeight : true,
                'arrows': data?.arrows ? data.arrows : true,
                'dots': data?.dots ? data.dots : true,
                'infiniteScroll': data?.infiniteScroll ? data.infiniteScroll : true,
                'slideToScroll': data?.slideToScroll ? data.slideToScroll : 1,
                'slideToShow': data?.slideToShow ? data.slideToShow : 1,
                'speed': data?.speed ? data.speed : 15000,
            }
            break;

        default:
            returndata = {
                'adaptiveHeight': true,
                'arrows': true,
                'dots': true,
                'infiniteScroll': true,
                'slideToScroll': 1,
                'slideToShow': 1,
                'speed': 15000,
            }
            break;
    }
    return returndata;
}