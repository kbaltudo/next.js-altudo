export function GetHeroBannerData(data: any, provider: string) {
    let returndata: { adaptiveHeight: boolean; arrows: boolean; dots: boolean; infiniteScroll: boolean; slideToScroll: number; slideToShow: number; speed: number; bannerCollection: any[] };
  
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
                'bannerCollection': data?.banner_collectionConnection?.edges ? data.banner_collectionConnection.edges : []
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
                'bannerCollection': data?.bannerCollection?.items ? data.bannerCollection.items : []
            }
            break;
        case "drupal":
            returndata = {
                'adaptiveHeight': data?.adaptiveHeight ? data.adaptiveHeight : true,
                'arrows': data?.arrows ? data.arrows : true,
                'dots': data?.dots ? data.dots : true,
                'infiniteScroll': data?.infiniteScroll ? data.infiniteScroll : true,
                'slideToScroll': data?.slideToScroll ? data.slideToScroll : 1,
                'slideToShow': data?.slideToShow ? data.slideToShow : 1,
                'speed': data?.speed ? data.speed : 500,
                'bannerCollection': data?.field_carousel_item?.items ? data.field_carousel_item.items : []
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
                'bannerCollection': [
                    {
                        'id': "1",
                        'title': "Dummy Banner Title",
                        'description': "Dummy Banner",
                        'slug': "",
                        'desktopImage': {
                            "url": "/logo.png",
                            "width": "200",
                            "height": "200",
                            'alt': "Banner",
                        },
                    },
                    {
                        'id': "2",
                        'title': "Dummy Banner Title",
                        'description': "Dummy Banner",
                        'slug': "",
                        'desktopImage': {
                            "url": "/logo.png",
                            "width": "200",
                            "height": "200",
                            'alt': "Banner",
                        },
                    }
                ]
            }
            break;
    }
    return returndata;
}