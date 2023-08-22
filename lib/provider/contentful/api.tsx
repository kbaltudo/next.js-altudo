import { CONTACT_US } from "../../constants"

const Home_GRAPHQL_FIELDS = `
title
slug 
contentTile {
  title
  slug
  description
  media {
    width
    height
    url
    contentType
  }
  backgroundImage {
    width
    height
    url
  }
}
articleCollection{
  title
  description
  backgroundImage{
    url
  }
  variant
  roundedImage
  grid  
  cardsCollection{
    items{
      title
      slug
      linktext
      description
      subTitle
      image{
        url
        height
        width
      }
      thumbnail{
        url
        height
        width
      }
    }
  }
}
articleCollection2{
  title
  description
  backgroundImage{
    url
  }
  variant
  roundedImage
  grid
  cardsCollection{
    items{
      title
      slug
      linktext
      description
      subTitle
      image{
        url
        height
        width
      }
      thumbnail{
        url
        height
        width
      }
    }
  }
}
articleCollection4{
  title
  description
  backgroundImage{
    url
  }
  variant
  roundedImage
  grid
  cardsCollection{
    items{
      title
      slug
      linktext
      description
      subTitle
      image{
        url
        height
        width
      }
      thumbnail{
        url
        height
        width
      }
    }
  }
}
backgroundImage {
  width
  height
  url
}
carousel{
  slideToShow
  slideToScroll
  dots
  adaptiveHeight
  infiniteScroll
  arrows
  speed
  bannerCollection{
    items{
      title
      slug
      excerpt
      image{
        width
        height
        url
        title
      }
    }
  }
}

socialLinks{
  title
  alignment
  socialLinksCollection{
    items{
      icon
      link
    }
  }
}
`
const Career_GRAPHQL_FIELDS = `
title
twoContentTile {
  title1
  description1
  backgroundImage1 {
    title
    url
    width
    height
  }
  title2
  description2
  backgroundImage2 {
    url
    width
    height
  }
  backgroundImage {
    title
    url
    width
    height
  }
}
cardBlock {
  title
  slug
  description
  variant
  grid
  roundedImage
  cardsCollection {
    items {
      title
      slug
      linktext
      subTitle
      description
      image{
        url
        width
        height
        title
      }
      thumbnail {
        title
        url
        width
        height
      }
      category {
        title
        slug
      }
      attachment {
        title
        description
        url
        width
        height
      }
    }
  }
  backgroundImage {
    url
    width
    height
  }
}
innerBanner {
  title
  slug
  description
  image {
    url
    width
    height
    title
  }
}
contactUs{
  title
  slug
  subtitle
  content
  bannerBackgroundImage{
    url
    width
    height
  }
}
`
const About_GRAPHQL_FIELDS = `
title
      slug
      innerBanner {
        title
        excerpt
        image {
          url
        }
        description
      }
      twoColumnTile {
        title1
        description1
        backgroundImage1 {
          url
        }
        title2
        description2
        backgroundImage2 {
          url
        }
        backgroundImage {
          url
        }
      }
      ourTeams {
        title
        description
        roundedImage
        grid
        profileCard
        teamMemberCollection {
          items {
            authorName
            slug
            designation
            organization
            image {
              url
              height
              width
            }
            socialLinks {
              socialLinksCollection {
                items {
                  icon
                  link
                }
              }
            }
          }
        }
      }
      articleCollection4 {
        title
        description
        backgroundImage {
          url
        }
        variant
        roundedImage
        grid
        cardsCollection {
          items {
            title
            slug
            linktext
            description
            subTitle
            image {
              url
              height
              width
            }
            thumbnail {
              url
              height
              width
            }
          }
        }
      }
      testimonialCard {
        testimonialVariant {
          variants
        }
        isCarousel
        carouselConfiguations {
          slideToShow
          slideToScroll
          dots
          arrow
          infiniteScroll
          adaptiveHeight
          speed
        }
        testimonialsCardsCollection {
          items {
            description
            authorData {
              authorName
              designation
              organization
              image {
                url
                height
                width
              }
            }
          }
        }
      }

`
const OurProfessional_GRAPHQL_FIELDS = `
title
backgroundImage{
  url
}
ourProfessionals{  
  roundedImage
  grid
  profileCard
  teamMemberCollection{
    items{
      authorName
      email
      mobile
      designation
      organization
      description
      image{
        url
        height
        width        
      }
      slug
      linkText
      socialLinks{              
        socialLinksCollection{
          items{
            icon
            link
          }
        }
      }
    }
  }
}
cardBlock{
  title
  cardsCollection{
    items{
      title
      description
    }
  }
}
banner{
  title
  slug
  excerpt
  description
  image{
    url
  }
  
}
`
const Author_GRAPHQL_FIELDS = `
authorName
email
mobile
designation
organization
description
image{
  url
  height
  width        
}
slug
linkText
socialLinks{              
  socialLinksCollection{
    items{
      icon
      link
    }
  }
}
`
const PartnerWithUs_GRAPHQL_FIELDS = `
title
banner{
  title
  description
  image{
    url
    height
    width
  }
}
cardBlock{
  title
  description
  backgroundImage{
    url
  }
  variant
  roundedImage
  grid
  cardsCollection{
    items{
      title
      slug
      linktext
      description
      subTitle
      image{
        url
        height
        width
      }
      thumbnail{
        url
        height
        width
      }
    }
  }
}
contentTile {
  title
  slug
  description
  media {
    width
    height
    url
    contentType
  }
  backgroundImage {
    width
    height
    url
  }
}
twoTile {
  title1
  description1
  backgroundImage1 {
    url
  }
  title2
  description2
  backgroundImage2 {
    url
  }
  backgroundImage {
    url
  }
}  
`
const Blog_GRAPHQL_FIELDS = `
title
slug
titleDescription{
  title
  description
}
blogCollection{
  title
  description
  variant
  roundedImage
  imageAlignment
  grid 
  blogsCollection{
    items{
      title
      slug
      subTitle
      date
      description
      linkText
      image{
        url
        height
        width          
      }
      thumbnail{
        url
        height
        width
      }
      author{
        authorName
        designation
        organization
        image{
          url
          height
          width
        }
      }
      socialLinks{
        title
        alignment
        socialLinksCollection{
          items{
            icon
            link
          }
        }
      }
    }
  }
}
categories{
  title
  horizontalView
  categoriesCollection{
    items{
      title
      slug
    }
  }
}     
`
const Webinar_GRAPHQL_FIELDS = `
title
slug
webinarCollection{
  title
  description
  backgroundImage{
    url
    height
    width
  }
  webinarsCollection{
    items{
      title
      slug
      description
      linkText
      image{
        url
        height
        width              
      }
      video{
        title
        height
        width
        loop
        autoPlay
        controls
        video{
          url
        }
        thumbnail{
          url
        }
      }
      date
      startTime
      endTime
      author{
        authorName
        designation
        organization
      }
    }
  }
}  
`
const HEADER_GRAPHQL_FIELDS = `
logo {
  width
  height
  url
  title
}
navigationCollection {
  items {
    title
    slug
    navigationLinksCollection {
      items {
        title
        slug
      }
    }
  }
}
`
const DEFAULT_PAGE_DATA = `
title
description
banner {
  title
  image {
    width
    height
    title
    url
  }
  excerpt
}
cardsCollection {
  items {
    title
    subTitle
    slug
    linktext
    category {
      slug
    }
    image {
      width
      height
      title
      url
    }
  }
}
cards1Collection {
  items {
    title
    subTitle
    slug
    linktext
    category {
      slug
    }
    image {
      width
      height
      title
      url
    }
  }
}
`
const FOOTER_GRAPHQL_FIELDS = `
logo {
  width
  height
  url
}
`
const CONTACT_US_FIELD = `
title
slug
subtitle
content
bannerBackgroundImage {
  url
  title
}
`
const OUR_LOCATIONS_GRAPHQL_FIELDS = `
title
slug
description
sidebarTitle
`
const LOCATIONS_GRAPHQL_FIELDS = `
locationName
locationCity
address
phone
lattitude
longitude
sys{
  id
}
`
const SINGLE_BLOG_FIELDS = `
title
slug
date
subTitle
description
linkText
image{
  url
  height
  width          
}
thumbnail{
  url
  height
  width
}
author{
  authorName
  designation
  organization
  image{
    url
    height
    width
  }
}
socialLinks{
  title
  alignment
  socialLinksCollection{
    items{
      icon
      link
    }
  }
}         
`
const WELLNESS_GRAPHQL_FIELDS = `
title
banner {
  title
  image {
    url
    width
    height
    title
  }
}
articleCollection {
  title
  slug
  description
 backgroundImage {
   url
 }
 cardConfiguration {
   variant
   grid
   roundedImage
 }
 cardsCollection{
   items{
     title
     slug
     linktext
     description
     subTitle
   }
 }
}
articleCollection2 {
  title
  slug
  description
 backgroundImage{
   url
 }
 cardConfiguration {
   variant
   grid
   roundedImage
 }
 cardsCollection{
   items{
     title
     slug
     linktext
     description
     subTitle
   
   }
 }
}
socialLinks{
  title
  alignment
  socialLinksCollection{
    items{
      icon
      link
    }
  }
}
`
async function fetchGraphQL(query: string, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${preview
          ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
          : process.env.CONTENTFUL_ACCESS_TOKEN
          }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json())
}

function extractpageTemplate(fetchResponse: { data: { headerCollection: { items: any[] } } }) {
  let header = fetchResponse?.data?.headerCollection?.items[0]
  return {
    "logo": {
      "url": header?.logo?.url ? header.logo.url : "",
      "width": header?.logo?.width ? header.logo.width : "",
      "height": header?.logo?.height ? header.logo.height : "",
      "alternativeText": header?.logo?.title ? header.logo.title : "",
    },
    "primaryNavigation": header?.navigationCollection?.items ? header.navigationCollection.items : ""
  }
}

function extractHomeEntries(fetchResponse: { data: { homePageCollection: { items: any[] } } }) {
  let data = fetchResponse?.data?.homePageCollection?.items[0]
  return {
    "title": data?.title ? data.title : "",
    "description": "",
    "slug": data?.slug ? data.slug : "",
    "backgroundImage": data?.backgroundImage?.url ? data.backgroundImage.url : "",
    "banner": data?.carousel ? data.carousel : "",
    "contentTile": data?.contentTile ? data?.contentTile : "",
    "cardBlock": data?.articleCollection ? data.articleCollection : [],
    "cardBlock2": data?.articleCollection2 ? data.articleCollection2 : [],
    "cardBlock4": data?.articleCollection4 ? data.articleCollection4 : [],
    "statCard": data?.statCardCollection?.items ? data.statCardCollection.items : [],
    "socialLinks": data?.socialLinks ? data.socialLinks : "",
    "webinars": data?.webinarCollection ? data.webinarCollection : "",
    "ourteam": data?.ourTeam ? data.ourTeam : "",
    "provider": "contentful"
  }
}

function extractCareerEntries(fetchResponse: { data: { careerCollection: { items: any[] } } }) {
  let data = fetchResponse?.data?.careerCollection?.items[0]
  return {
    "title": data?.title ? data.title : "",
    "innerBanner": data?.innerBanner ? data.innerBanner : "",
    "twoContentTile": data?.twoContentTile ? data.twoContentTile : "",
    "cardBlock": data?.cardBlock ? data.cardBlock : "",
    "contactUs": data?.contactUs ? data.contactUs : "",
    "provider": "contentful"
  }
}

function extractAboutEntries(fetchResponse: { data: { aboutUsCollection: { items: any[] } } }) {
  let data = fetchResponse?.data?.aboutUsCollection?.items[0]

  return {
    "title": data?.title ? data.title : "",
    "slug": data?.slug ? data.slug : "",
    "innerBanner": data?.innerBanner ? data.innerBanner : "",
    "twoColumnTile": data?.twoColumnTile ? data.twoColumnTile : "",
    "cardBlock": data?.articleCollection4 ? data.articleCollection4 : "",
    "testimonialCard": data?.testimonialCard ? data.testimonialCard : "",
    "accordion": data?.accordionCollection?.items ? data.accordionCollection.items : "",
    "titleDescription": data?.pageContent ? data.pageContent : "",
    "pageContent": data?.pageContent ? data.pageContent : "",
    "impactCard": data?.impactCard ? data.impactCard : "",
    "profileCard": data?.profileCard ? data.profileCard : "",
    "componentHeading": data?.componentHeading ? data.componentHeading : "",
    "ourTeams": data?.ourTeams ? data.ourTeams : "",
    "provider": "contentful"
  }
}

function extractOurProfessionalEntries(fetchResponse: { data: { ourProfessionalsCollection: { items: any[] } } }) {
  let data = fetchResponse?.data?.ourProfessionalsCollection?.items[0]

  return {
    "title": data?.title ? data.title : "",
    "backgroundImage": data?.backgroundImage?.url ? data.backgroundImage.url : "",
    "slug": data?.slug ? data.slug : "",
    "ourTeams": data?.ourProfessionals ? data.ourProfessionals : "",
    "banner": data?.banner ? data.banner : "",
    "accordion": data?.cardBlock ? data.cardBlock : "",
    "provider": "contentful"
  }
}

function extractPartnerWithUs(fetchResponse: { data: { partnerWithUsCollection: { items: any[] } } }) {
  let data = fetchResponse?.data?.partnerWithUsCollection?.items[0]
  return {
    "title": data?.title ? data.title : "",
    "slug": data?.slug ? data.slug : "",
    "banner": data?.banner ? data.banner : "",
    "cardBlock4": data?.cardBlock ? data.cardBlock : [],
    "contentTile": data?.contentTile ? data.contentTile : "",
    "twoColumnTile": data?.twoTile ? data.twoTile : "",
    "provider": "contentful"
  }
}

function extractNewsAndStoriesEntries(fetchResponse: { data: { newsAndStoriesCollection: { items: any[] } } }) {
  let data = fetchResponse?.data?.newsAndStoriesCollection?.items[0]
  return {
    "title": data?.title ? data.title : "",
    "slug": data?.slug ? data.slug : "",
    "titleDescription": data?.titleDescription ? data.titleDescription : "",
    "blogListing": data?.blogCollection ? data.blogCollection : "",
    "categories": data?.categories ? data.categories : "",
    "provider": "contentful"
  }
}

const extractContactUsEntries = (fetchResponse: { data: { contactUsCollection: { items: any[] } } }) => {
  const data = fetchResponse?.data?.contactUsCollection?.items[0] || []

  return {
    "title": data?.title ? data.title : "",
    "subTitle": data?.subtitle ? data.subtitle : "",
    "slug": data?.slug ? data.slug : "",
    "description": data?.content ? data.content : "",
    "backgroundImage": data?.bannerBackgroundImage?.url ? data.bannerBackgroundImage.url : "",
    "provider": "contentful"
  }
}

async function extractLocationpageEntries(fetchResponse: { data: { ourLocationCollection: any, contentTypeLocationCollection: any } }) {
  let data = fetchResponse?.data?.ourLocationCollection?.items[0];
  let locations = fetchResponse?.data?.contentTypeLocationCollection?.items ? fetchResponse.data.contentTypeLocationCollection.items : [];
  const locationsData = await GetLocations(locations);

  return {
    "data": {
      "title": data?.title ? data.title : "",
      "description": data?.description ? data.description : "",
      "slug": data.slug ? data.slug : "",
      "subTitle": data.sidebarTitle ? data.sidebarTitle : "",
    },
    "locations": locationsData,
    "provider": "contentful"
  }
}

async function GetLocations(data: any[]) {
  return data ? data.map((card: any) => {

    return {
      'id': card?.sys?.id ? card.sys.id : "",
      'locationName': card?.locationName ? card.locationName : "",
      'locationCity': card?.locationCity ? card.locationCity : "",
      'address': card?.address ? card.address : "",
      'phone': card?.phone ? card.phone : "",
      'link': card?.link ? card.link : "",
      'lattitude': card?.lattitude ? card.lattitude : "",
      'longitude': card?.longitude ? card.longitude : "",
    }
  }) : []
}

function extractdefaultEntries(fetchResponse: { data: { defaultPageCollection: { items: any[] } } }) {
  let data = fetchResponse?.data?.defaultPageCollection?.items[0]
  if (data) {
    return {
      "title": data?.title ? data.title : "",
      "description": data?.description ? data.description : "",
      "slug": data?.slug ? data.slug : "",
      "banner": data?.banner ? data.banner : "",
      "cards": data?.cardsCollection ? data.cardsCollection : [],
      "cards1": data?.cardsCollection ? data.cardsCollection : [],
    }
  }
  else {
    return null;
  }
}

function extractBlogFields(fetchResponse: { data: { blogCollection: { items: any[] } } }) {
  let blogs = fetchResponse?.data?.blogCollection?.items
  let blog = fetchResponse?.data?.blogCollection?.items[0]
  if (blogs) {
    return {
      "title": blog?.title ? blog.title : "",
      "slug": blog?.slug ? blog.slug : "",
      "subTitle": blog?.subTitle ? blog.subTitle : "",
      "description": blog?.description ? blog.description : "",
      "linkText": blog?.linkText ? blog.linkText : "",
      "image": {
        "url": blog?.image?.url ? blog.image.url : null,
        "width": blog?.image?.width ? blog.image.width : null,
        "height": blog?.image?.height ? blog.image.height : null,
        "alt": blog?.image?.title ? blog.image.title : null,
      },
      "thumbnail": {
        "url": blog?.thumbnail?.url ? blog.thumbnail.url : null,
        "width": blog?.thumbnail?.width ? blog.thumbnail.width : null,
        "height": blog?.thumbnail?.height ? blog.thumbnail.height : null,
        "alt": blog?.thumbnail?.alt ? blog.thumbnail.alt : null,
      },
      "date": blog?.date ? blog.date : "",
      "author": {
        "authorName": blog?.author?.authorName ? blog.author.authorName : "",
        "designation": blog?.author?.designation ? blog.author.designation : "",
        "organization": blog?.author?.organization ? blog.author.organization : "",
        "image": {
          "url": blog?.author?.image?.url ? blog.author.image.url : "",
          "height": blog?.author?.image?.url ? blog.author.image.url : "",
          "width": blog?.author?.image?.url ? blog.author.image.url : "",
        }
      },
      "socialLinks": blog?.socialLinks ? blog.socialLinks : ""

    }
  }
  else {
    return null;
  }
}

function extractAuthorFields(fetchResponse: { data: { authorCollection: { items: any[] } } }) {
  let authors = fetchResponse?.data?.authorCollection?.items
  let author = fetchResponse?.data?.authorCollection?.items[0]
  if (authors) {
    return {
      "authorName": author?.authorName ? author.authorName : "",
      "slug": author?.slug ? author.slug : "",
      "designation": author?.designation ? author.designation : "",
      "organization": author?.organization ? author.organization : "",
      "email": author?.email ? author.email : "",
      "mobile": author?.mobile ? author.mobile : "",
      "description": author?.description ? author.description : "",
      "image": {
        "url": author?.image?.url ? author.image.url : null,
        "width": author?.image?.width ? author.image.width : null,
        "height": author?.image?.height ? author.image.height : null,
        "alt": author?.image?.title ? author.image.title : null,
      },
      "socialLinks":author?.socialLinks?.socialLinksCollection?.items ? author.socialLinks.socialLinksCollection.items:""

    }
  }
  else {
    return null;
  }
}

function extractWebinarEntries(fetchResponse: { data: { webinarPageCollection: { items: any[] } } }) {
  let data = fetchResponse?.data?.webinarPageCollection?.items[0]
  return {
    "title": data?.title ? data.title : "",
    "slug": data?.slug ? data.slug : "",
    "webinars": data?.webinarCollection ? data.webinarCollection : "",
    "provider": "contentful"
  }
}

function extractWellnessEntries(fetchResponse: { data: { wellnessAndEducationCollection: { items: any[] } } }) {
  let data = fetchResponse?.data?.wellnessAndEducationCollection?.items[0]
  return {
    "title": data?.title ? data.title : "",
    "slug": data?.slug ? data.slug : "",
    "banner": data?.banner ? data.banner : "",
    "cardBlock": data?.articleCollection ? data.articleCollection : [],
    "cardBlock2": data?.articleCollection2 ? data.articleCollection2 : [],
    "socialLinks": data?.socialLinks ? data.socialLinks : "",
    "provider": "contentful"
  }
}

export async function getContentfulHomePage() {
  const entries = await fetchGraphQL(
    `query {
      homePageCollection(limit:1){
        items {
          ${Home_GRAPHQL_FIELDS}
        }
      }
    }`
  )
  return extractHomeEntries(entries)
}


export async function getContentfulCareerPage() {
  const entries = await fetchGraphQL(
    `query {
      careerCollection(limit:1){
        items {
          ${Career_GRAPHQL_FIELDS}
        }
      }
    }`
  )
  return extractCareerEntries(entries)
}

export async function getContentfulAboutPage() {
  const entries = await fetchGraphQL(
    `query {
      aboutUsCollection(limit:1){
        items {
          ${About_GRAPHQL_FIELDS}
        }
      }
    }`
  )
  return extractAboutEntries(entries)
}

export async function getContentfulOurProfessionalPage() {
  const entries = await fetchGraphQL(
    `query {
      ourProfessionalsCollection(limit:1){
        items {
          ${OurProfessional_GRAPHQL_FIELDS}
        }
      }
    }`
  )
  return extractOurProfessionalEntries(entries)
}

export async function getContentfulPartnerWithUsPage() {
  const entries = await fetchGraphQL(
    `query {
      partnerWithUsCollection(limit:1){
        items {
          ${PartnerWithUs_GRAPHQL_FIELDS}
        }
      }
    }`
  )
  return extractPartnerWithUs(entries)
}

export async function getContentfulNewsAndStoriesPage() {
  const entries = await fetchGraphQL(
    `query {
      newsAndStoriesCollection(limit:1){
        items {
          ${Blog_GRAPHQL_FIELDS}
        }
      }
    }`
  )

  return extractNewsAndStoriesEntries(entries)
}

export async function getArticleBySlug(slug: string) {
  const data = await fetchGraphQL(
    `query {
      blogCollection( where: {slug: "${slug}"}){
      items{
       ${SINGLE_BLOG_FIELDS}
      }
    }
  }`
  )
  return extractBlogFields(data)
}

export async function getAuthorBySlug(slug: string) {
  const data = await fetchGraphQL(
    `query {
      authorCollection( where: {slug: "${slug}"}){
      items{
       ${Author_GRAPHQL_FIELDS}
      }
    }
  }`
  )
  return extractAuthorFields(data)
}

export async function getContentfulWebinarPage() {
  const entries = await fetchGraphQL(
    `query {
      webinarPageCollection(limit:1){
        items {
          ${Webinar_GRAPHQL_FIELDS}
        }
      }
    }`
  )
  return extractWebinarEntries(entries)
}

export async function getContactUsPage() {
  const entries = await fetchGraphQL(
    `query {
      contactUsCollection(limit: 1) {
        items {
          ${CONTACT_US_FIELD}
        }
      }
    }
    `)
  return extractContactUsEntries(entries)
}

export async function getDefaultPage(slug: string) {
  const entries = await fetchGraphQL(
    `query {
      defaultPageCollection(limit:1, where: {slug:"${slug}"}){
        items {
          ${DEFAULT_PAGE_DATA}
        }
      }
    }`
  )
  return extractdefaultEntries(entries)
}

export async function getPageTemplate() {
  const entries = await fetchGraphQL(
    `query {
      headerCollection(limit:1){
        items {
          ${HEADER_GRAPHQL_FIELDS}
        }
      }
    }`
  )
  return extractpageTemplate(entries)
}

export async function getOurLocationPage() {
  const entries = await fetchGraphQL(
    `query {
      ourLocationCollection(limit:1){
        items {
          ${OUR_LOCATIONS_GRAPHQL_FIELDS}
        }
      }
      contentTypeLocationCollection{
        items{
         ${LOCATIONS_GRAPHQL_FIELDS} 
        }
      }
    }`
  )
  return extractLocationpageEntries(entries)
}

export async function getContentfulWellnessPage() {
  const entries = await fetchGraphQL(
    `query {
      wellnessAndEducationCollection(limit:1){
        items {
          ${WELLNESS_GRAPHQL_FIELDS}
        }
      }
    }`
  )
  return extractWellnessEntries(entries)
}

