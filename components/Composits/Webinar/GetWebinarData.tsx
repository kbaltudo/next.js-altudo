export function GetWebinarData(data: any, provider: any) {
    let returndata: { image: { url: string; width: number; height: number; alt: string; }; title: string; slug: any; description: string; video: any, date: any; startTime: any; author: { authorName: string; designation: any; organization: any; }; endTime: any; linkText: any };
    switch (provider) {
        case "contentful":
            returndata = {
                "title": data?.title ? data.title : "",
                "slug": data?.slug ? data.slug : "",
                "description": data?.description ? data.description : "",
                "linkText": data?.linkText ? data.linkText : "",
                "image": {
                    "url": data?.image?.url ? data.image.url : "",
                    "width": data?.image?.width ? data.image.width : "",
                    "height": data?.image?.height ? data.image.height : "",
                    "alt":data?.image?.alt ? data.image.alt : "Webinar Image"
                },
                "video": data?.video ? data.video:"",
                "date": data?.date ? data.date : "",
                "startTime": data?.startTime ? data.startTime : "",
                "endTime": data?.endTime ? data.endTime : "",
                "author": {
                    "authorName": data?.author?.authorName ? data.author.authorName : "",
                    "designation": data?.author?.designation ? data.author.designation : "",
                    "organization": data?.author?.organization ? data.author.organization : "",
                }
            }
            break;
        default:
            returndata = {
                title: 'illo voluptatem cum sunt minima',
                slug: 'illo-voluptatem-cum-sunt-minima',
                linkText: 'Read more',
                description: 'Hic illo voluptatem cum sunt minima eum repellendus illo vel aliquam blanditiis. Eum consequuntur voluptates est libero mollitia et atque ducimus id exercitationem rerum. Ut quia animi et consequuntur error ut ipsam officia qui eius ullam in tempora sint et ipsa repellendus.\n',
                image: {
                    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWps21FxUekhQTSRx0xeiKXRxNb4O63WX1EdQ_pLHnUcbZ7kP0Rt-qmCxcBsZh-GkC9uo&usqp=CAU',
                    width: 200,
                    height: 100,
                    alt: "Demo",
                },
                "video": "",
                date: '2023-01-11T00:00:00.000Z',
                startTime: '2023-01-04T00:00:00.000+05:30',
                endTime: '2023-01-04T14:00:00.000+05:30',
                author: {
                    authorName: 'Jon Doe',
                    designation: 'Sr. Associate',
                    organization: 'Atudo'
                }
            }
            break;
    }
    return returndata;
}