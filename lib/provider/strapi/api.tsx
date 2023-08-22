const PAGE_TEMPLATE_FIELDS = `
page-templates/1?populate[0]=Header.Logo
&populate[1]=Header.PrimaryNavigation.NavigationLinks.NavigationLinks
`
const HOME_STRAPI_FIELDS = `
home?populate[0]=BackgroundImage
&populate[1]=Banner.Image
&populate[2]=Banner.Mobile_Image
&populate[3]=ContentTile.Background_Image
&populate[4]=ContentTile.Image
&populate[5]=CardBlock.Background_Image
&populate[6]=CardBlock.cards.Image
&populate[7]=CardBlock2.Background_Image
&populate[8]=CardBlock2.cards.Image
&populate[9]=ContactUs
&populate[10]=SocialLinks.SocialLink
`
const ABOUT_STRAPI_FIELDS = `
about?populate[0]=BackgroundImage
&populate[1]=Banner.Image
&populate[2]=TwoColumnCallout.BackgroundImage
&populate[3]=TeamMembers.Team.Image
&populate[4]=CoreValues.Background_Image
&populate[5]=CoreValues.cards.Image
`
const CAREER_STRAPI_FIELDS = `
careers?populate[0]=Banner.Image
&populate[1]=Cards.Background_Image
&populate[2]=Cards.cards.Image
&populate[3]=Cards1.Background_Image
&populate[4]=Cards1.cards.Image
&populate[5]=Location.Image
`
const PARTNER_STRAPI_FIELDS = `
partner-with-us?
populate[1]=Banner.Image
&populate[2]=Image.Image
&populate[3]=ContentTile.Image
&populate[4]=ContentTile.Background_Image
&populate[5]=ContentTile.Image
&populate[6]=ContentTile2.Background_Image
&populate[7]=ContentTile2.Image
&populate[8]=ContactUs.Description
&populate[9]=Cards.cards
&populate[10]=Cards.Image
&populate[11]=Cards.Background_Image
&populate[13]=Cards.cards.Image
&populate[12]=Cards2.Background_Image
&populate[14]=Cards2.cards.Image
&populate[15]=Cards2.Cards.cards
&populate[16]=Cards2.Image
`
const EDUCATION_STRAPI_FIELDS = `
education?populate[0]=Banner.Image
&populate[1]=Infographics.Asset.Image
&populate[2]=Infographics.Asset.Media
`
const WEBINARPAGE_STRAPI_FIELDS = `
partners-in-possibility?
populate[0]=Banner.Image
`
const CONTACT_STRAPI_FIELDS = `
contact-us?populate=*
`
const LOCATIONPAGE_STRAPI_FIELDS = `
our-location?populate=*
`
const LOCATIONS_STRAPI_FIELDS = `
locations
`
const WEBINARS_STRAPI_FIELDS = `
webinars?populate=*
`
const BLOGDETAILS_STRAPI_FILED = `

`
const CATEGORIES_STRAPI_FIELD = `
categories?populate=*
`


const TESTIMONIAL_STRAPI_FIELD = `
testimonials?populate=*
`


const BLOGLISTINGPAGE_STRAPI_FIELD = `
news-and-storie?populate[0]=CategoryListing.Categories
&populate[1]=BlogListing.Articles.Image
&populate[2]=BlogListing.Articles.Author
&populate[3]=BlogListing.Articles.Tags
&populate[4]=BlogListing.Articles.Categories
&populate[5]=BlogListing.Articles.Author.designation
`
const CARDS_STRAPI_FIELD = `
cards?populate=*
`
// Fetcher
export async function fetcher(url: string, option = {}) {
    let response: Response,
        defaultoption = {
            method: "GET",
            headers: {
                Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
            },
        },
        fetcherUrl = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/${url}`
    if (!option) {
        response = await fetch(fetcherUrl);
    } else {
        response = await fetch(fetcherUrl, defaultoption);
    }
    const data = await response.json();
    return data;
}

//Repeaters

function GetTeams(data: any[]) {
    return data ? data.map((card: { attributes: any; id: any }) => {
        let carddata = card.attributes;
        return {
            'id': card?.id ? card.id : "",
            'title': carddata?.Title ? carddata.Title : "",
            'role': carddata?.Role ? carddata.Role : "",
            'shortDescription': carddata?.ShortDescription ? carddata.ShortDescription : "",
            'slug': carddata?.Slug ? carddata.Slug : "",
            'image': {
                "url": carddata?.Image?.data?.attributes?.url ? process.env.NEXT_PUBLIC_STRAPI_BASE_URL + carddata.Image.data.attributes.url : "",
                "width": carddata?.Image?.data?.attributes?.width ? carddata.Image.data.attributes.width : "",
                "height": carddata?.Image?.data?.attributes?.height ? carddata.Image.data.attributes.height : "",
                'alt': carddata?.Image?.data?.attributes?.alternativeText ? carddata.Image.data.attributes.alternativeText : "",
            }
        }
    }) : ""
}

function GetTags(data: any[]) {
    return data ? data.map((tag: { attributes: any; id: any }) => {
        let tagdata = tag.attributes;
        return {
            'id': tag?.id ? tag.id : "",
            'title': tagdata?.Title ? tagdata.Title : "",
            'slug': tagdata?.Slug ? tagdata.Slug : "",
            'description': tagdata?.Description ? tagdata.Description : "",
        }
    }) : ""
}

function GetAuthors(data: any[]) {
    return data ? data.map((author: { attributes: any; id: any }) => {
        let authordata = author.attributes;
        return {
            'id': author?.id ? author.id : "",
            'email': authordata?.email ? authordata.email : "",
            'nickname': authordata?.NickName ? authordata.NickName : "",
            //'name' : authordata?.FirstName ? authordata.FirstName : "" + " " + authordata?.LastName ? authordata.LastName : "",
            'designation': {
                'data': authordata?.designation?.data ? authordata.designation.data : ""
            }
        }
    }) : ""
}

function GetCategories(data: any[]) {
    return data ? data.map((category: { attributes: any; id: any }) => {
        let categorydata = category.attributes;
        return {
            'id': category?.id ? category.id : "",
            'title': categorydata?.Title ? categorydata.Title : "",
            'slug': categorydata?.Slug ? categorydata.Slug : "",
            'description': categorydata?.Description ? categorydata.Description : ""
        }
    }) : ""
}

function GetLocations(data: any[]) {
    return data ? data.map((card: { attributes: any; id: any }) => {
        let carddata = card.attributes;
        return {
            'id': card?.id ? card.id : "",
            'locationName': carddata?.LocationName ? carddata.LocationName : "",
            'locationCity': carddata?.LocationCity ? carddata.LocationCity : "",
            'address': carddata?.Address ? carddata.Address : "",
            'phone': carddata?.Phone ? carddata.Phone : "",
            'link': carddata?.Link ? carddata.Link : "",
            'lattitude': carddata?.Lattitude ? carddata.Lattitude : "",
            'longitude': carddata?.Longitude ? carddata.Longitude : "",
        }
    }) : ""
}

function GetWebinars(data: any[]) {
    return data ? data.map((card: { attributes: any; id: any }) => {
        let carddata = card.attributes;
        return {
            'id': card?.id ? card.id : "",
            'title': carddata?.Title ? carddata.Title : "",
            'date': carddata?.Date ? carddata.Date : "",
            'description': carddata?.Description ? carddata.Description : "",
            'link': carddata?.Link ? carddata.Link : "",
            'phone': carddata?.Phone ? carddata.Phone : "",
            'author': carddata?.Author ? carddata.Author : "",
            'startTime': carddata?.StartTime ? carddata.StartTime : "",
            'endTime': carddata?.EndTime ? carddata.EndTime : "",
            'image': {
                "url": carddata?.Image?.data?.attributes?.url ? process.env.NEXT_PUBLIC_STRAPI_BASE_URL + carddata.Image.data.attributes.url : "",
                "width": carddata?.Image?.data?.attributes?.width ? carddata.Image.data.attributes.width : "",
                "height": carddata?.Image?.data?.attributes?.height ? carddata.Image.data.attributes.height : "",
                'alt': carddata?.Image?.data?.attributes?.alternativeText ? carddata.Image.data.attributes.alternativeText : "",
            },
            'video': {
                "url": carddata?.Video?.data?.attributes?.url ? process.env.NEXT_PUBLIC_STRAPI_BASE_URL + carddata.Video.data.attributes.url : "",
                "width": carddata?.Video?.data?.attributes?.width ? carddata.Video.data.attributes.width : "",
                "height": carddata?.Video?.data?.attributes?.height ? carddata.Video.data.attributes.height : "",
                'alt': carddata?.Video?.data?.attributes?.alternativeText ? carddata.Video.data.attributes.alternativeText : "",
            }
        }
    }) : ""
}

function GetCategoriesListing(data: { id: any; Title: any; Categories: { data: any } }) {
    return {
        'id': data?.id ? data.id : "",
        'title': data?.Title ? data.Title : "",
        'categories': GetCategories(data.Categories.data)
    }
}

function GetArticles(data: any[]) {
    return data ? data.map((article: { attributes: any; id: any }) => {
        let articledata = article.attributes;
        return {
            'id': article?.id ? article.id : "",
            'title': articledata?.Title ? articledata.Title : "",
            'date': articledata?.Date ? articledata.Date : "",
            'description': articledata?.Description ? articledata.Description : "",
            'slug': articledata?.Slug ? articledata.Slug : "",
            'excerpt': articledata?.Phone ? articledata.Phone : "",
            'image': {
                "url": articledata?.Image?.data?.attributes?.url ? process.env.NEXT_PUBLIC_STRAPI_BASE_URL + articledata.Image.data.attributes.url : "",
                "width": articledata?.Image?.data?.attributes?.width ? articledata.Image.data.attributes.width : "",
                "height": articledata?.Image?.data?.attributes?.height ? articledata.Image.data.attributes.height : "",
                'alt': articledata?.Image?.data?.attributes?.alternativeText ? articledata.Image.data.attributes.alternativeText : "",
            },
            'author': articledata?.Author ? GetAuthors(articledata.Author.data) : "",
            'tags': articledata?.Tags ? GetTags(articledata.Tags.data) : "",
            'categories': articledata?.Categories ? GetCategories(articledata.Categories.data) : "",
        }
    }) : ""
}

function GetBlogListing(data: any) {
    const bloglistingdata = data ? data : "";
    return {
        'id': bloglistingdata?.id ? bloglistingdata.id : "",
        'title': bloglistingdata?.Title ? bloglistingdata.Title : "",
        'description': bloglistingdata?.Description ? bloglistingdata.Description : "",
        'articles': bloglistingdata?.Articles ? GetArticles(bloglistingdata.Articles.data) : ""
    }
}

function GetContactUs(data: { id: any; Title: any; Description: any }) {
    return {
        'id': data?.id ? data.id : "",
        'title': data?.Title ? data.Title : "",
        'description': data?.Description ? JSON.stringify(data.Description) : ""
    }
}

function GetLinkList(data: { id: any; Title: any; NavigationLinks: { data: any[] } }) {
    return {
        'id': data?.id ? data.id : "",
        'title': data?.Title ? data.Title : "",
        "navigationLinks": data?.NavigationLinks?.data ? data.NavigationLinks.data.map((link: { attributes: any; id: any; classes: any }) => {
            let nav = link.attributes;
            return {
                "id": link?.id ? link.id : "",
                "title": nav?.Title ? nav.Title : "",
                "slug": nav?.Slug ? nav.Slug : "",
                "description": nav?.Description ? nav.Description : "",
                "classes": link?.classes ? link.classes : "",
                "subNav": nav?.NavigationLinks?.data?.length ? nav.NavigationLinks.data.map((sublink: { attributes: any; id: any }) => {
                    let subnav = sublink.attributes;
                    return {
                        "id": sublink?.id ? sublink.id : "",
                        "title": subnav?.Title,
                        "slug": subnav?.Slug ? subnav.Slug : "",
                        "description": subnav?.Description ? subnav.Description : "",
                        "classes": subnav?.classes ? subnav.classes : "",
                    }
                }) : ""
            }
        }) : ""
    }
}

function GetTwoColumnCallout(data: { data: any; id: any; Title1: any; Description1: any; Title2: any; Description2: any; BackgroundImage: { data: { attributes: { url: string } } } }) {
    return {
        "id": data?.data ? data.id : "",
        "title1": data?.Title1 ? data.Title1 : "",
        "description1": data?.Description1 ? data.Description1 : "",
        "title2": data?.Title2 ? data.Title2 : "",
        "description2": data?.Description2 ? data.Description2 : "",
        "backgroundImage": data?.BackgroundImage?.data?.attributes?.url ? process.env.NEXT_PUBLIC_STRAPI_BASE_URL + data.BackgroundImage.data.attributes.url : "",
    }
}

function GetTeamMembers(data: { id: any; Title: any; Description: any; Background_Image: { data: { attributes: { url: string } } }; Team: { data: any } }) {
    return {
        'id': data?.id ? data.id : "",
        'title': data?.Title ? data.Title : "",
        'description': data?.Description ? JSON.stringify(data.Description) : "",
        "backgroundImage": data?.Background_Image?.data?.attributes?.url ? process.env.NEXT_PUBLIC_STRAPI_BASE_URL + data.Background_Image.data.attributes.url : "",
        "teamMembers": data?.Team?.data ? GetTeams(data.Team.data) : ""
    }
}

function getImages(imageData: any) {
    let image = imageData ? imageData : {}
    return {
        "url": image?.attributes?.url ? process.env.NEXT_PUBLIC_STRAPI_BASE_URL + image.attributes.url : "",
        "width": image?.attributes?.width ? image.attributes.width : "",
        "height": image?.attributes?.height ? image.attributes.height : "",
        'alt': image?.attributes?.alternativeText ? image.attributes.alternativeText : "",
    }
}

function extractPartnerEntries(fetchResponse: { data: { attributes: any } }) {
    let data = fetchResponse?.data?.attributes;
    return {
        "title": data?.Title ? data.Title : "",
        "description": data?.Description ? data.Description : "",
        "slug": data.Slug ? data.Slug : "",
        "backgroundImage": data?.BackgroundImage?.data?.attributes?.url ? process.env.NEXT_PUBLIC_STRAPI_BASE_URL + data.BackgroundImage.data.attributes.url : "",
        "banner": data?.Banner ? data.Banner:"",
        "contentTile": data?.ContentTile ? data.ContentTile:"",
        "contentTile2": data?.ContentTile2 ? data.ContentTile2 :"",
        'image': getImages(data.Image.Image.data),
        "cards": data?.Cards ? data.Cards:"",
        "cards2": data?.Cards2 ? data.Cards2:"",
        "contactUs": GetContactUs(data.ContactUs)
    }
}

function extractLocationpageEntries(fetchResponse: { data: { attributes: any } }) {
    let data = fetchResponse?.data?.attributes;
    return {
        "title": data?.Title ? data.Title : "",
        "description": data?.Description ? data.Description : "",
        "slug": data.Slug ? data.Slug : "",
        "subTitle": data.SidebarTitle ? data.SidebarTitle : "",
    }
}

function extractLocationsEntries(fetchResponse: { data: any }) {
    return GetLocations(fetchResponse?.data ? fetchResponse.data : "");
}

function extractWebinarspageEntries(fetchResponse: { data: { attributes: any } }) {
    let data = fetchResponse?.data?.attributes;
    return {
        "title": data?.Title ? data.Title : "",
        "description": data?.Description ? data.Description : "",
        "slug": data.Slug ? data.Slug : "",
        "banner": data?.Banner ? data.Banner : ""
    }
}

function extractWebinarEntries(fetchResponse: { data: any }) {
    return GetWebinars(fetchResponse?.data ? fetchResponse.data : "");
}

function extractCategoriesEntries(fetchResponse: { data: any }) {
    return GetCategoriesListing(fetchResponse?.data ? fetchResponse.data : "");
}

function extractpageTemplate(fetchResponse: { data: { attributes: { Header: any } } }) {
    let data = fetchResponse?.data?.attributes;
    let header = fetchResponse?.data?.attributes.Header;
    return {
        "logo": {
            "url": header?.Logo?.data?.attributes?.url ? process.env.NEXT_PUBLIC_STRAPI_BASE_URL + header.Logo.data.attributes.url : "",
            "width": header?.Logo?.data?.attributes?.width ? header.Logo.data.attributes.width : "",
            "height": header?.Logo?.data?.attributes?.height ? header.Logo.data.attributes.height : "",
            "alternativeText": header?.Logo?.data?.attributes?.alternativeText ? header.Logo.data.attributes.alternativeText : "",
        },
        "primaryNavigation": GetLinkList(header.PrimaryNavigation),
    }
}

function extractHomeEntries(fetchResponse: { data: { attributes: any } }) {
    let data = fetchResponse?.data?.attributes;
    return {
        "title": data?.Title ? data.Title : "",
        "description": data?.Description ? data.Description : "",
        "slug": data.Slug ? data.Slug : "",
        "backgroundImage": data?.BackgroundImage?.data?.attributes?.url ? process.env.NEXT_PUBLIC_STRAPI_BASE_URL + data.BackgroundImage.data.attributes.url : "",
        "banner": data?.Banner,
        "contentTile": data?.ContentTile ? data.ContentTile : "",
        "cardBlock": data?.CardBlock ? data.CardBlock : "",
        "cardBlock2": data?.CardBlock2 ? data.CardBlock2 : "",
        "contactUs": data?.ContactUs ? GetContactUs(data.ContactUs) : "",
        "socialLinks": data?.SocialLinks ? data.SocialLinks : "",
    }
}

function extractAboutEntries(fetchResponse: { data: { attributes: any } }) {
    let data = fetchResponse?.data?.attributes;
    return {
        "title": data?.Title ? data.Title : "",
        "description": data?.Description ? data.Description : "",
        "slug": data?.Slug ? data.Slug : "",
        "backgroundImage": data?.BackgroundImage?.data?.attributes?.url ? process.env.NEXT_PUBLIC_STRAPI_BASE_URL + data.BackgroundImage.data.attributes.url : "",
        "banner": data?.Banner ? data?.Banner : "",
        "twoColumnCallout": data?.TwoColumnCallout ? GetTwoColumnCallout(data.TwoColumnCallout) : "",
        "teamMembers": data?.TeamMembers ? GetTeamMembers(data.TeamMembers) : "",
        "coreValues": data?.CoreValues ? data.CoreValues : ""
    }
}

function extractCareerEntries(fetchResponse: { data: { attributes: any } }) {
    let data = fetchResponse?.data?.attributes;
    return {
        "title": data?.Title ? data.Title : "",
        "description": data?.Description ? data.Description : "",
        "slug": data.Slug ? data.Slug : "",
        "banner": data?.Banner ? data.Banner:"",
        "cardBlock": data?.Cards ? data.Cards :"" ,
        "cardBlock2": data?.Cards1 ? data.Cards1:"",
    }
}

function extractEducationEntries(fetchResponse: { data: { attributes: any } }) {
    let data = fetchResponse?.data?.attributes;
    return {
        "title": data?.Title ? data.Title : "",
        "description": data?.Description ? data.Description : "",
        "slug": data.Slug ? data.Slug : "",
        "banner": data?.Banner ? data.Banner:"",
        "infographics": data.Infographics
    }
}

function extractContactUsEntries(fetchResponse: { data: { attributes: any } }) {
    let data = fetchResponse?.data?.attributes;
    return {
        "title": data?.Title ? data.Title : "",
        "description": data?.Description ? data.Description : "",
        "slug": data.Slug ? data.Slug : "",
        "email": data.ContactEmail ? data.ContactEmail : "",
        "phone": data.ContactPhone ? data.ContactPhone : ""
    }
}
function extractCardsEntries(fetchResponse: { data: any }) {
    let data = fetchResponse?.data;   
        
    return data?data.map((card: { attributes: any; id: any }) => {               
        return {  
            'id': card?.id ? card.id : "",
            'title':  card?.attributes?.Title ? card.attributes.Title : "",
            'description': card?.attributes?.Description ? JSON.stringify(card.attributes.Description) : "",
            'Link': {
                'text': card?.attributes?.text ? card.attributes.text : "",
                'url': card?.attributes?.url ? card.attributes.url : "",
            }           
        }
    }) : ""
   
}
function extractTestimonialEntries(fetchResponse: { data:any }) {
    let data = fetchResponse?.data;   
    return data?data.map((data: { attributes: any; id: any }) => {     
        let author =  data?.attributes; 
        
        return {  
            'id': data?.id?data.id:"",
            "author":{
              "nickname": author?.nickname?author.nickname : "",
              "description": author?.description?author.description : "",
              "designation": author?.designation?author.designation : "",
              "organization":author?.organization?author.organization : "",
              "authorImage": {
                "url": author?.author_image?.data?.attributes?.url?process.env.NEXT_PUBLIC_STRAPI_BASE_URL + author.author_image.data.attributes.url : "",
                "width": author?.author_image?.data?.attributes?.width?author.author_image.data.attributes.width : "",
                "height": author?.author_image?.data?.attributes?.height?author.author_image.data.attributes.height : "",
                "alt": author?.author_image?.data?.attributes?.alternativeText?author.author_image.data.attributes.alternativeText : "",
              }
            }             
        }
    }) : ""
   
}
function extractBlogListingPageEntries(fetchResponse: { data: { attributes: any } }) {
    let data = fetchResponse?.data?.attributes;
    return {
        "title": data?.Title ? data.Title : "",
        "description": data?.Description ? data.Description : "",
        "slug": data.Slug ? data.Slug : "",
        "categorylisting": data.CategoryListing ? GetCategoriesListing(data.CategoryListing) : "",
        "bloglisting": data.BlogListing ? GetBlogListing(data.BlogListing) : "",
    }
}

// Export Data
export async function strapiPageTemplate() {
    const entries = await fetcher(
        PAGE_TEMPLATE_FIELDS
    )
    return extractpageTemplate(entries)
}

export async function strapiHomePage() {
    const entries = await fetcher(
        HOME_STRAPI_FIELDS
    )
    return extractHomeEntries(entries)
}

export async function strapiAboutPage() {
    const entries = await fetcher(
        ABOUT_STRAPI_FIELDS
    )
    return extractAboutEntries(entries)
}

export async function strapiCareerPage() {
    const entries = await fetcher(
        CAREER_STRAPI_FIELDS
    )
    return extractCareerEntries(entries)
}

export async function strapiPartnerPage() {
    const entries = await fetcher(
        PARTNER_STRAPI_FIELDS
    )
    return extractPartnerEntries(entries)
}

export async function strapiEducationPage() {
    const entries = await fetcher(
        EDUCATION_STRAPI_FIELDS
    )
    return extractEducationEntries(entries)
}

export async function strapiContactUsPage() {
    const entries = await fetcher(
        CONTACT_STRAPI_FIELDS
    )
    return extractContactUsEntries(entries)
}

export async function strapiLocationPage() {
    const entries = await fetcher(
        LOCATIONPAGE_STRAPI_FIELDS
    )
    return extractLocationpageEntries(entries)
}

export async function strapiLocations() {
    const entries = await fetcher(
        LOCATIONS_STRAPI_FIELDS
    )
    return extractLocationsEntries(entries)
}

export async function strapiPartnerPossibilityPage() {
    const entries = await fetcher(
        WEBINARPAGE_STRAPI_FIELDS
    )
    return extractWebinarspageEntries(entries)
}

export async function strapiWebinars() {
    const entries = await fetcher(
        WEBINARS_STRAPI_FIELDS
    )
    return extractWebinarEntries(entries)
}

export async function strapiCategories() {
    const entries = await fetcher(
        CATEGORIES_STRAPI_FIELD
    )
    return extractCategoriesEntries(entries)
}

export async function strapiBlogListingPage() {
    const entries = await fetcher(
        BLOGLISTINGPAGE_STRAPI_FIELD
    )
    return extractBlogListingPageEntries(entries)
}

export async function strapiTestimonial() {
    const entries = await fetcher(
        TESTIMONIAL_STRAPI_FIELD
    ) 
  
    return extractTestimonialEntries(entries)    
}

export async function strapiCards() {
    const entries = await fetcher(
        CARDS_STRAPI_FIELD
    )     
   
    return extractCardsEntries(entries)    
};

