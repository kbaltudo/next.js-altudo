export function GetWebinarListingData(data: any, provider: any) {
    let returndata: { backgroundImage: { url: string; width: number; height: number; alt: string; }; title: string; description: string; webinarsCollection: any; };
    switch (provider) {
        case "contentful":
            returndata =
            {
                "title": data?.title ? data.title : "",
                "description": data?.description ? data.description : "",
                "backgroundImage": {
                    "url": data?.backgroundImage?.url ? data.backgroundImage.url : "",
                    "width": data?.backgroundImage?.width ? data.backgroundImage.width : "",
                    "height": data?.backgroundImage?.height ? data.backgroundImage.height : "",
                    "alt": data?.backgroundImage?.fileName ? data.backgroundImage.fileName : "",
                },
                "webinarsCollection": data?.webinarsCollection ? data.webinarsCollection : "",
            }
            break;
        default:
            returndata = {
                "title": "DEMO",
                "description": "DEMO",
                "backgroundImage": {
                    "url": "https://st3.depositphotos.com/7865540/13723/i/450/depositphotos_137230234-stock-photo-communication-working-concept.jpg",
                    "width": 100,
                    "height": 100,
                    "alt": "Demo",
                },
                "webinarsCollection": [
                    {
                        "title": "Demo",
                        "slug": "Demo",
                        "description": "Demo",
                        "image": {
                            "url": "https://images.ctfassets.net/7t3ufz7voqol/Ra30ILxCDE1qMPMi6jjAR/b0b69fd621b8205de597ae969c4463d7/Online_page-pana.png"
                        },
                        "video": "Demo",
                        "publishedDate": "2023-01-11T00:00:00.000Z",
                        "startTime": "2023-01-04T00:00:00.000+05:30",
                        "endTime": "2023-01-04T14:00:00.000+05:30",
                        "author": {
                            "authorName": "Demo",
                            "designation": "Demo",
                            "organization": "Demo"
                        }
                    }
                ]
            }

            break;
    }
    return returndata;
}