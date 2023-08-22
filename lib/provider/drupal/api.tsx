// Fetcher
export async function fetcher(url: string, option = {}) {
    let response: Response,
        defaultoption = {
            method: "GET",
        },
        fetcherUrl = url
    if (!option) {
        response = await fetch(fetcherUrl);
    } else {
        response = await fetch(fetcherUrl, defaultoption);
    }
    const data = await response.json();
    return data;
}

async function extractHomeEntries(carouselResponse: { data: any }, cardBlockResponse: { data: any }) {

    return {
        "banner": carouselResponse?.data ? carouselResponse?.data : "",
        "cardBlock": cardBlockResponse?.data ? cardBlockResponse.data : "",
    }
}

async function extractOurProfessionalEntries(bioResponse: { data: any; metadata: any }, locationsResponse: any, area_of_focusResponse: any) {

    return {
        "ourTeams": bioResponse?.data?.items ? bioResponse.data.items : "",
        "metadata": bioResponse?.metadata ? bioResponse.metadata : "",
        "locations": locationsResponse?.data ? locationsResponse.data : "",
        "area_of_focus": area_of_focusResponse?.data ? area_of_focusResponse.data : ""
    }
}

async function extractOurProfessionalEntry(bioResponse: { data: any; metadata: any }) {

    return {
        "ourTeams": bioResponse?.data?.items ? bioResponse.data.items : "",
        "metadata": bioResponse?.metadata ? bioResponse.metadata : "",

    }
}

async function extractOurProfessionalEntryUpdated(bioResponse: { data: any; metadata: any }) {
    return {
        "bioDetails": bioResponse?.data ? bioResponse.data : "" 
    }
}

function extractpageTemplate(fetchResponse: { data: { field_header_item: { items: any[] } } }) {
    let header = fetchResponse?.data?.field_header_item?.items[0]
    return {
        "provider": "drupal",
        "logo": {
            "url": header?.field_header_logo ? header.field_header_logo : "",
            "width": header?.field_header_logo?.width ? header.field_header_logo.width : "500",
            "height": header?.field_header_logo?.height ? header.field_header_logo.height : "500",
            "alternativeText": header?.field_header_logo?.title ? header.field_header_logo.title : "",
        },
        "primaryNavigation": header?.field_header_menu_links ? header.field_header_menu_links : ""
    }
}

function extractNewsAndStoriesEntries(fetchResponse: {data: any}) {
    return {
        "title": fetchResponse?.data?.title ? fetchResponse?.data.title : "",
        "slug": fetchResponse?.data?.slug ? fetchResponse?.data.slug : "",
        "titleDescription": fetchResponse?.data?.titleDescription ? fetchResponse?.data.titleDescription : "",
        "blogListing": fetchResponse?.data?.items ? fetchResponse?.data.items : "",
        "categories": fetchResponse?.data?.categories ? fetchResponse?.data.categories : "",
        "provider": "drupal"
    }
}

async function extractAboutEntries(carouselResponse: { data: any }, ourTeamsEnteries: { data: any }, cardBlockEnteries: { data: any }, testimonialCardEnteries: { data: any }, twoColumnTileEnteries: { data: any }) {

    return {
        "innerBanner": carouselResponse?.data?.field_carousel_item.items[0] ? carouselResponse.data.field_carousel_item.items[0] : "",
        "ourTeams": ourTeamsEnteries?.data?.field_bio_section?.items ? ourTeamsEnteries.data.field_bio_section.items : "",
        "cardBlock": cardBlockEnteries?.data ? cardBlockEnteries.data : "",
        "testimonialCard": testimonialCardEnteries?.data ? testimonialCardEnteries.data : "",
        "twoColumnTile": twoColumnTileEnteries?.data?.items[0] ? twoColumnTileEnteries.data.items[0] : ""
    }
}

// Export Data
export async function getDrupalHomePage() {
    const carouselEntries = await fetcher(
        'https:\/\/dev-drupal-headless-legal.pantheonsite.io\/v1\/page\/4'
    ),
        cardBlockEntries = await fetcher(
            'https://dev-drupal-headless-legal.pantheonsite.io/v1/page/47'
        )
    return extractHomeEntries(carouselEntries, cardBlockEntries)
}

export async function getDrupalOurProfessionalPage(pageNumer: Number, location: any[], title: String, area_of_focus: any[]) {
    const apiUrl = 'https://dev-drupal-headless-legal.pantheonsite.io/v1/bio';
    const params = [];

    // Validate and append page
    if (pageNumer && typeof pageNumer === 'number') {
        params.push(`page=${pageNumer}`);
    }

    // Validate and append title
    if (title && typeof title === 'string') {
        params.push(`title=${encodeURIComponent(title)}`);
    }

    // Validate and append location
    if (location && location.length > 0) {
        params.push(`location=${encodeURIComponent(location.toString())}`);
    }

    // Validate and append area_of_focus
    if (area_of_focus && area_of_focus.length>0) {
        params.push(`area_of_focus=${encodeURIComponent(area_of_focus.toString())}`);
    }

    // Construct the final URL with the validated parameters
    const url = `${apiUrl}?${params.join('&')}`;

    const bioEntries = await fetcher(
            url
        ),
        locationEntries = await fetcher(
            `https://dev-drupal-headless-legal.pantheonsite.io/v1/locations`
        ),
        area_of_focusEntries = await fetcher(
            `https://dev-drupal-headless-legal.pantheonsite.io/v1/area-of-focus`
        )
    return extractOurProfessionalEntries(bioEntries, locationEntries, area_of_focusEntries)
}

export async function strapibioDetails(slug: string) {
    const bioEntries = await fetcher(
        `https://dev-drupal-headless-legal.pantheonsite.io/v1/bio?slug=${slug}`
    )
    return extractOurProfessionalEntry(bioEntries)
}

export async function strapibioUpdatedDetails(id: string) {
    const bioEntriesUpdated = await fetcher(
        `https://dev-drupal-headless-legal.pantheonsite.io/v1/page/${id}`
    )
    return extractOurProfessionalEntryUpdated(bioEntriesUpdated)
}

export async function getPageTemplateDrupal() {
    const headerEntries = await fetcher(
        'https://dev-drupal-headless-legal.pantheonsite.io/v1/page/2'
    )
    return extractpageTemplate(headerEntries)
}

export async function getDrupalNewsAndStoriesPage() {
    const blogEntries = await fetcher(
        'https://dev-drupal-headless-legal.pantheonsite.io/v1/blog_post'
    )
    return extractNewsAndStoriesEntries(blogEntries)
}

export async function getDrupalAboutPage() {
    const carouselEntries = await fetcher(
        'https://dev-drupal-headless-legal.pantheonsite.io/v1/page/64'
    ),
        ourTeamsEnteries = await fetcher(
            'https://dev-drupal-headless-legal.pantheonsite.io/v1/page/74'
        ),
        cardBlockEnteries = await fetcher(
            'https://dev-drupal-headless-legal.pantheonsite.io/v1/page/73'
        ),
        testimonialCardEnteries = await fetcher(
            'https://dev-drupal-headless-legal.pantheonsite.io/v1/page/91'
        ),
        twoColumnTileEnteries = await fetcher(
            'https://dev-drupal-headless-legal.pantheonsite.io/v1/page/429'
        )
    return extractAboutEntries(carouselEntries, ourTeamsEnteries, cardBlockEnteries, testimonialCardEnteries, twoColumnTileEnteries)
}