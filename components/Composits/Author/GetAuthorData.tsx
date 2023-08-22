export function GetAuthorData(data: any, provider: string) {
    let returnData: { authorName: any; slug: any; email: any; facebook: any; linkedin: any; twitter: any; tumblr: any; mobile: any; designation: any; organization: any; description: any; linkText: any; image: { url: any; width: any, height: any; alt: any }; socialLinks: any; address: any };
    switch (provider) {
        case "contentful":
            returnData = {
                'authorName': data?.authorName ? data.authorName : "",
                'slug': data?.slug ? data.slug : "",
                'designation': data?.designation ? data.designation : "",
                'organization': data?.organization ? data.organization : "",
                'email': data?.email ? data.email : "",
                'facebook': data?.facebook ? data.facebook : "",
                'linkedin': data?.linkedin ? data.linkedin : "",
                'twitter': data?.twitter ? data.twitter : "",
                'tumblr': data?.tumblr ? data.tumblr : "",
                'mobile': data?.mobile ? data.mobile : "",
                'description': data?.description ? data.description : "",
                'linkText': data?.linkText ? data.linkText : "",
                "address":data?.address ? data.address :"",
                "image": {
                    'url': data?.image?.url ? data.image.url : "",
                    'width': data?.image?.width ? data.image.width : "",
                    'height': data?.image?.height ? data.image.height : "",
                    'alt': data?.image?.title ? data.image.title : "",

                },
                'socialLinks': data?.socialLinks ? data.socialLinks : "",
            }
            break;
        case "drupal":
            returnData = {
                'authorName': data?.title ? data.title : "",
                'slug': data?.field_slug ? data.field_slug : "",
                'designation': data?.field_designation ? data.field_designation : "",
                'organization': data?.field_organization ? data.field_organization : "",
                'email': data?.field_email ? data.field_email : "",
                'facebook': data?.field_facebooklink ? data.field_facebooklink : "",
                'linkedin': data?.field_linkedin ? data.field_linkedin : "",
                'twitter': data?.field_twiterlink ? data.field_twiterlink : "",
                'tumblr': data?.field_tumblr ? data.field_tumblr : "",
                'mobile': data?.field_mobile ? data.field_mobile : "",
                'description': data?.body ? data.body : "",
                'linkText': data?.linkText ? data.linkText : "",
                "address":data?.field_bio_address ? data.field_bio_address :"",
                "image": {
                    'url': data?.field_bio_image?.image_url ? data.field_bio_image.image_url : (typeof data.field_bio_image === 'object' ? data.field_bio_image.image_url : data.field_bio_image || ""),
                    'width': data?.field_bio_image?.width ? data.field_bio_image.width : "500",
                    'height': data?.field_bio_image?.height ? data.field_bio_image.height : "500",
                    'alt': data?.field_bio_image?.title ? data.field_bio_image.title : "",

                },
                'socialLinks': data?.socialLinks ? data.socialLinks : "",
            }
            break;
        default:
            returnData = {
                'authorName': "Demo",
                'slug': "demo",
                'description': "demo",
                'linkText': "vp",
                'email': "",
                'mobile': "",
                'facebook': "https://facebook.com",
                'linkedin': "https://linkedin.com",
                'twitter': "https://twitter.com",
                'tumblr': "https://tumblr.com",
                'designation': "Demo",
                'organization': "Demo",
                'address':"",
                "image": {
                    'url': "",
                    'width': "",
                    'height': "",
                    'alt': "",

                },
                'socialLinks': "",
            }
            break;
    }

    return returnData;
}