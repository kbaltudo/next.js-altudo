import { strapiAboutPage, strapiHomePage } from "./strapi/api";
import {
    getContentfulHomePage,
    getDefaultPage,
    getPageTemplate,
    getContentfulAboutPage,
    getContentfulNewsAndStoriesPage,
    getContactUsPage,
    getOurLocationPage,
    getArticleBySlug,
    getAuthorBySlug,
    getContentfulWebinarPage,
    getContentfulPartnerWithUsPage,
    getContentfulWellnessPage,
    getContentfulCareerPage,
    getContentfulOurProfessionalPage
} from "./contentful/api";
import { getDrupalHomePage, getDrupalOurProfessionalPage, getPageTemplateDrupal, strapibioDetails, strapibioUpdatedDetails, getDrupalNewsAndStoriesPage, getDrupalAboutPage, getDrupalProductsPage } from "./drupal/api";
import { getContentStackHomePage } from "./contentstack/api";

// import { strapiPageTemplate } from "./strapi/api";
export async function getGrowthbookFeatures() {
    const response = await fetch(`https://cdn.growthbook.io/api/features/prod_pNBs0rykwKBnEY8x7IxBxnA2zYpuNGJOsXcGJfL1U`)
    const jsonData = await response.json()
    return jsonData;
}
export async function homeRouter() {
    const { features } = await getGrowthbookFeatures()
    // get provider from multiple provider from growthbook
    let provider = null
    if (features?.strapi?.defaultValue)
        provider = 'strapi'
    else if (features?.contentful?.defaultValue)
        provider = 'contentful'
    else if (features?.wordpress?.defaultValue)
        provider = 'wordpress'
    else if (features?.drupal?.defaultValue)
        provider = 'drupal'
    else if (features?.contentstack?.defaultValue)
        provider = 'contentstack'
    else
        provider = 'strapi'
    let returnData: any;
    switch (provider) {
        case "contentful":
            returnData = {
                "provider": "contentful",
                "data": (await getContentfulHomePage()) ?? [],
                "pagetemplate": (await getPageTemplate() ?? [])
            }
            break;
        case "strapi":
            returnData = {
                "provider": "contentful",
                "data": (await getContentfulHomePage()) ?? [],
                "pagetemplate": (await getPageTemplate()) ?? []
            }
            break;
        case "drupal":
            returnData = {
                "provider": "drupal",
                "data": (await getDrupalHomePage()) ?? [],
                "pagetemplate": (await getPageTemplateDrupal() ?? [])
            }
            break;
        case "contentstack":
            returnData = {
                "provider": "contentstack",
                "data": (await getContentStackHomePage()) ?? [],
                "pagetemplate": (await getPageTemplate() ?? [])
            }
            break;
        default:
            returnData = {
                "provider": "contentful",
                "data": (await getContentfulHomePage()) ?? [],
                "pagetemplate": (await getPageTemplate()) ?? []
            }
            break;
    }
    return returnData;
}

export async function defaultRouter(slug: string) {
    const { features } = await getGrowthbookFeatures()
    // get provider from multiple provider from growthbook

    let returnData: any;
    returnData = {
        "data": (await getDefaultPage(slug)) ?? null,
        "pagetemplate": (await getPageTemplate()) ?? []
    }
    return returnData;
}

export async function aboutRouter() {
    const { features } = await getGrowthbookFeatures()
    // get provider from multiple provider from growthbook
    let provider = null
    if (features?.strapi?.defaultValue)
        provider = 'contentful'
    else if (features?.contentful?.defaultValue)
        provider = 'contentful'
    else if (features?.wordpress?.defaultValue)
        provider = 'contentful'
    else if (features?.contentstack?.defaultValue)
        provider = 'contentful'
    else if (features?.drupal?.defaultValue)
        provider = 'drupal'
    else
        provider = 'contentful'
    let returnData: any;
    switch (provider) {
        case "contentful":
            returnData = {
                "provider": "contentful",
                "data": (await getContentfulAboutPage()) ?? [],
                "pagetemplate": (await getPageTemplate() ?? [])
            }
            break;
        case "strapi":
            returnData = {
                "provider": "strapi",
                "data": (await strapiAboutPage()) ?? [],
                "pagetemplate": (await getPageTemplate()) ?? []
            }
            break;
        case "drupal":
            returnData = {
                "provider": "contentful",
                "data": (await getContentfulAboutPage()) ?? [],
                "pagetemplate": (await getPageTemplateDrupal() ?? [])
            }
            break;
        default:
            returnData = {
                "provider": "strapi",
                "data": (await strapiHomePage()) ?? [],
                "pagetemplate": (await getPageTemplate()) ?? []
            }
            break;
    }
    return returnData;
}

export async function productsRouter() {
    const { features } = await getGrowthbookFeatures()
    // get provider from multiple provider from growthbook
    let provider = null
    if (features?.strapi?.defaultValue)
        provider = 'contentful'
    else if (features?.contentful?.defaultValue)
        provider = 'contentful'
    else if (features?.wordpress?.defaultValue)
        provider = 'contentful'
    else if (features?.contentstack?.defaultValue)
        provider = 'contentful'
    else if (features?.drupal?.defaultValue)
        provider = 'drupal'
    else
        provider = 'contentful'
    let returnData: any;
    switch (provider) {
        case "drupal":
            returnData = {
                "provider": "drupal",
                "data": (await getDrupalProductsPage()) ?? [],
                "pagetemplate": (await getPageTemplateDrupal() ?? [])
            }
            break;
        default:
            returnData = {
                "provider": "",
                "data": [],
                "pagetemplate": (await getPageTemplate() ?? [])
            }
            break;
    }
    return returnData;
}

export async function ourProfessionalRouter(pagenumber: Number, location: any[], title: String, expertise: any[]) {
    const { features } = await getGrowthbookFeatures()
    // get provider from multiple provider from growthbook
    let provider = null
    if (features?.strapi?.defaultValue)
        provider = 'contentful'
    else if (features?.contentful?.defaultValue)
        provider = 'contentful'
    else if (features?.wordpress?.defaultValue)
        provider = 'contentful'
    else if (features?.contentstack?.defaultValue)
        provider = 'contentful'
    else if (features?.drupal?.defaultValue)
        provider = 'drupal'
    else
        provider = ''
    let returnData: any;
    switch (provider) {
        case "contentful":
            returnData = {
                "provider": "contentful",
                "data": (await getContentfulOurProfessionalPage()) ?? [],
                "pagetemplate": (await getPageTemplate() ?? [])
            }
            break;
        case "drupal":
            returnData = {
                "provider": "drupal",
                "data": (await getDrupalOurProfessionalPage(pagenumber, location, title, expertise)) ?? [],
                "pagetemplate": (await getPageTemplateDrupal() ?? [])
            }
            break;

        default:
            returnData = {
                "provider": "",
                "data": [],
                "pagetemplate": (await getPageTemplate() ?? [])
            }
            break;
    }
    return returnData;
}

export async function careersRouter() {
    const { features } = await getGrowthbookFeatures()
    // get provider from multiple provider from growthbook
    let provider = null
    if (features?.strapi?.defaultValue)
        provider = 'contentful'
    else if (features?.contentful?.defaultValue)
        provider = 'contentful'
    else if (features?.wordpress?.defaultValue)
        provider = 'contentful'
    else if (features?.contentstack?.defaultValue)
        provider = 'contentful'
    else if (features?.drupal?.defaultValue)
        provider = 'contentful'
    else
        provider = 'contentful'
    let returnData: any;
    switch (provider) {
        case "contentful":
            returnData = {
                "provider": "contentful",
                "data": (await getContentfulCareerPage()) ?? [],
                "pagetemplate": (await getPageTemplate() ?? [])
            }
            break;
        case "strapi":
            returnData = {
                "provider": "strapi",
                "data": (await getContentfulCareerPage()) ?? [],
                "pagetemplate": (await getPageTemplate()) ?? []
            }
            break;
        case "drupal":
            returnData = {
                "provider": "drupal",
                "data": (await getContentfulCareerPage()) ?? [],
                "pagetemplate": (await getPageTemplateDrupal() ?? [])
            }
            break;
        default:
            returnData = {
                "provider": "strapi",
                "data": (await strapiHomePage()) ?? [],
                "pagetemplate": (await getPageTemplate()) ?? []
            }
            break;
    }
    return returnData;
}

export async function partnerWithUSRouter() {
    const { features } = await getGrowthbookFeatures()
    // get provider from multiple provider from growthbook
    let provider = null
    if (features?.strapi?.defaultValue)
        provider = 'contentful'
    else if (features?.contentful?.defaultValue)
        provider = 'contentful'
    else if (features?.wordpress?.defaultValue)
        provider = 'contentful'
    else if (features?.contentstack?.defaultValue)
        provider = 'contentful'
    else if (features?.drupal?.defaultValue)
        provider = 'drupal'
    else
        provider = 'contentful'
    let returnData: any;
    switch (provider) {
        case "contentful":
            returnData = {
                "provider": "contentful",
                "data": (await getContentfulPartnerWithUsPage()) ?? [],
                "pagetemplate": (await getPageTemplate() ?? [])
            }
            break;
        case "strapi":
            returnData = {
                "provider": "strapi",
                "data": (await strapiAboutPage()) ?? [],
                "pagetemplate": (await getPageTemplate()) ?? []
            }
            break;
        case "drupal":
            returnData = {
                "provider": "contentful",
                "data": (await getContentfulPartnerWithUsPage()) ?? [],
                "pagetemplate": (await getPageTemplateDrupal() ?? [])
            }
            break;
        default:
            returnData = {
                "provider": "strapi",
                "data": (await strapiHomePage()) ?? [],
                "pagetemplate": (await getPageTemplate()) ?? []
            }
            break;
    }
    return returnData;
}

export async function newsAndStoriesRouter() {
    const { features } = await getGrowthbookFeatures()
    // get provider from multiple provider from growthbook
    let provider = null
    if (features?.strapi?.defaultValue)
        provider = 'contentful'
    else if (features?.contentful?.defaultValue)
        provider = 'contentful'
    else if (features?.wordpress?.defaultValue)
        provider = 'contentful'
    else if (features?.contentstack?.defaultValue)
        provider = 'contentful'
    else if (features?.drupal?.defaultValue)
        provider = 'drupal'
    else
        provider = 'contentful'
    let returnData: any;
    switch (provider) {
        case "contentful":
            returnData = {
                "provider": "contentful",
                "data": (await getContentfulNewsAndStoriesPage()) ?? [],
                "pagetemplate": (await getPageTemplate() ?? [])
            }
            break;
        case "strapi":
            returnData = {
                "provider": "strapi",
                "data": (await strapiAboutPage()) ?? [],
                "pagetemplate": (await getPageTemplate()) ?? []
            }
            break;
        case "drupal":
            returnData = {
                "provider": "drupal",
                "data": (await getDrupalNewsAndStoriesPage()) ?? [],
                "pagetemplate": (await getPageTemplateDrupal() ?? [])
            }
            break;
        default:
            returnData = {
                "provider": "strapi",
                "data": (await strapiHomePage()) ?? [],
                "pagetemplate": (await getPageTemplate()) ?? []
            }
            break;
    }
    return returnData;
}

export async function contactUsRouter() {
    const { features } = await getGrowthbookFeatures()
    // get provider from multiple provider from growthbook
    let provider = null
    if (features?.strapi?.defaultValue)
        provider = 'contentful'
    else if (features?.contentful?.defaultValue)
        provider = 'contentful'
    else if (features?.wordpress?.defaultValue)
        provider = 'contentful'
    else if (features?.contentstack?.defaultValue)
        provider = 'contentful'
    else if (features?.drupal?.defaultValue)
        provider = 'drupal'
    else
        provider = 'contentful'
    let returnData: any;
    switch (provider) {
        case "contentful":
            returnData = {
                "provider": "contentful",
                "data": (await getContactUsPage()) ?? [],
                "pagetemplate": (await getPageTemplate() ?? [])
            }
            break;
        case "strapi":
            returnData = {
                "provider": "strapi",
                "data": (await strapiAboutPage()) ?? [],
                "pagetemplate": (await getPageTemplate()) ?? []
            }
            break;
        case "drupal":
            returnData = {
                "provider": "drupal",
                "data": (await getContactUsPage()) ?? [],
                "pagetemplate": (await getPageTemplateDrupal() ?? [])
            }
            break;
        default:
            returnData = {
                "provider": "strapi",
                "data": (await strapiHomePage()) ?? [],
                "pagetemplate": (await getPageTemplate()) ?? []
            }
            break;
    }
    return returnData;
}

export async function OurLocationsRouter() {
    const { features } = await getGrowthbookFeatures()
    // get provider from multiple provider from growthbook
    let provider = null
    if (features?.strapi?.defaultValue)
        provider = 'contentful'
    else if (features?.contentful?.defaultValue)
        provider = 'contentful'
    else if (features?.wordpress?.defaultValue)
        provider = 'contentful'
    else if (features?.contentstack?.defaultValue)
        provider = 'contentful'
    else if (features?.drupal?.defaultValue)
        provider = 'drupal'
    else
        provider = 'contentful'
    let returnData: any;
    switch (provider) {
        case "contentful":
            const pageData = await getOurLocationPage()
            returnData = {
                "provider": "contentful",
                "data": pageData?.data ? pageData.data : null,
                "locations": pageData?.locations || [],
                "pagetemplate": (await getPageTemplate() ?? [])
            }
            break;
        case "strapi":
            returnData = {
                "provider": "strapi",
                "data": (await strapiAboutPage()) ?? [],
                "pagetemplate": (await getPageTemplate()) ?? []
            }
            break;
        case "drupal":
            const pageDataDrupal = await getOurLocationPage()
            returnData = {
                "provider": "contentful",
                "data": pageDataDrupal?.data ? pageDataDrupal.data : null,
                "locations": pageDataDrupal?.locations || [],
                "pagetemplate": (await getPageTemplateDrupal() ?? [])
            }
            break;
        default:
            returnData = {
                "provider": "strapi",
                "data": null,
                "pagetemplate": null
            }
            break;
    }
    return returnData;
}

export async function getArticleRouter(slug: string) {
    const { features } = await getGrowthbookFeatures()
    // get provider from multiple provider from growthbook
    let provider = null
    if (features?.strapi?.defaultValue)
        provider = 'contentful'
    else if (features?.contentful?.defaultValue)
        provider = 'contentful'
    else if (features?.wordpress?.defaultValue)
        provider = 'contentful'
    else if (features?.contentstack?.defaultValue)
        provider = 'contentful'
    else if (features?.drupal?.defaultValue)
        provider = 'drupal'
    else
        provider = 'contentful'
    let returnData: any;
    switch (provider) {
        case "contentful":
            const pageData = await getArticleBySlug(slug)
            returnData = {
                "provider": "contentful",
                "data": pageData || null,
                "pagetemplate": (await getPageTemplate() ?? [])
            }
            break;
        case "strapi":
            returnData = {
                "provider": "strapi",
                "data": (await strapiAboutPage()) ?? [],
                "pagetemplate": (await getPageTemplate()) ?? []
            }
            break;
        case "drupal":
            const pageDataDrupal = await getArticleBySlug(slug)
            returnData = {
                "provider": "contentful",
                "data": pageDataDrupal || null,
                "pagetemplate": (await getPageTemplateDrupal() ?? [])
            }
            break;
        default:
            returnData = {
                "provider": "strapi",
                "data": null,
                "pagetemplate": null
            }
            break;
    }
    return returnData;
}

export async function getAuthorRouter(slug: string) {
    const { features } = await getGrowthbookFeatures()
    // get provider from multiple provider from growthbook
    let provider = null
    if (features?.strapi?.defaultValue)
        provider = 'contentful'
    else if (features?.contentful?.defaultValue)
        provider = 'contentful'
    else if (features?.wordpress?.defaultValue)
        provider = 'contentful'
    else if (features?.contentstack?.defaultValue)
        provider = 'contentful'
    else if (features?.drupal?.defaultValue)
        provider = 'drupal'
    else
        provider = 'contentful'
    let returnData: any;
    switch (provider) {
        case "contentful":
            const pageData = await getAuthorBySlug(slug)
            returnData = {
                "provider": "contentful",
                "data": pageData || null,
                "pagetemplate": (await getPageTemplate() ?? [])
            }
            break;
        case "strapi":
            returnData = {
                "provider": "strapi",
                "data": (await strapiAboutPage()) ?? [],
                "pagetemplate": (await getPageTemplate()) ?? []
            }
            break;
        case "drupal":
            returnData = {
                "provider": "drupal",
                "data": (await strapibioDetails(slug)) ?? [],
                "pagetemplate": (await getPageTemplateDrupal() ?? [])
            }
            break;
        default:
            returnData = {
                "provider": "strapi",
                "data": null,
                "pagetemplate": null
            }
            break;
    }
    return returnData;
}
export async function getUpdatedAuthorRouter(id: string) {
    const { features } = await getGrowthbookFeatures()
    // get provider from multiple provider from growthbook
    let provider = null
    if (features?.strapi?.defaultValue)
        provider = 'contentful'
    else if (features?.contentful?.defaultValue)
        provider = 'contentful'
    else if (features?.wordpress?.defaultValue)
        provider = 'contentful'
    else if (features?.contentstack?.defaultValue)
        provider = 'contentful'
    else if (features?.drupal?.defaultValue)
        provider = 'drupal'
    else
        provider = 'contentful'
    let returnData: any;
    switch (provider) {
        case "contentful":
            const pageData = await getAuthorBySlug(id)
            returnData = {
                "provider": "contentful",
                "data": pageData || null,
                "pagetemplate": (await getPageTemplate() ?? [])
            }
            break;
        case "strapi":
            returnData = {
                "provider": "strapi",
                "data": (await strapiAboutPage()) ?? [],
                "pagetemplate": (await getPageTemplate()) ?? []
            }
            break;
        case "drupal":
            returnData = {
                "provider": "drupal",
                "data": (await strapibioUpdatedDetails(id)) ?? [],
                "pagetemplate": (await getPageTemplateDrupal() ?? [])
            }
            break;
        default:
            returnData = {
                "provider": "strapi",
                "data": null,
                "pagetemplate": null
            }
            break;
    }
    return returnData;
}

export async function webinarRouter() {
    const { features } = await getGrowthbookFeatures()
    // get provider from multiple provider from growthbook
    let provider = null
    if (features?.strapi?.defaultValue)
        provider = 'contentful'
    else if (features?.contentful?.defaultValue)
        provider = 'contentful'
    else if (features?.wordpress?.defaultValue)
        provider = 'contentful'
    else if (features?.contentstack?.defaultValue)
        provider = 'contentful'
    else if (features?.drupal?.defaultValue)
        provider = 'drupal'
    else
        provider = 'contentful'
    let returnData: any;
    switch (provider) {
        case "contentful":
            returnData = {
                "provider": "contentful",
                "data": (await getContentfulWebinarPage()) ?? [],
                "pagetemplate": (await getPageTemplate() ?? [])
            }
            break;
        case "drupal":
            returnData = {
                "provider": "contentful",
                "data": (await getContentfulWebinarPage()) ?? [],
                "pagetemplate": (await getPageTemplateDrupal() ?? [])
            }
            break;


        default:
            returnData = {
                "provider": "contentful",
                "data": (await getContentfulWebinarPage()) ?? [],
                "pagetemplate": (await getPageTemplate() ?? [])
            }
            break;
    }
    return returnData;
}

export async function WellnessRouter() {
    const { features } = await getGrowthbookFeatures()
    // get provider from multiple provider from growthbook
    let provider = null
    if (features?.strapi?.defaultValue)
        provider = 'strapi'
    else if (features?.contentful?.defaultValue)
        provider = 'contentful'
    else if (features?.wordpress?.defaultValue)
        provider = 'wordpress'
    else if (features?.drupal?.defaultValue)
        provider = 'drupal'
    else
        provider = 'strapi'
    let returnData: any;
    switch (provider) {
        case "contentful":
            returnData = {
                "provider": "contentful",
                "data": (await getContentfulWellnessPage()) ?? [],
                "pagetemplate": (await getPageTemplate() ?? [])
            }
            break;
        case "strapi":
            returnData = {
                "provider": "contentful",
                "data": (await getContentfulWellnessPage()) ?? [],
                "pagetemplate": (await getPageTemplate()) ?? []
            }
            break;
        case "drupal":
            returnData = {
                "provider": "contentful",
                "data": (await getContentfulWellnessPage()) ?? [],
                "pagetemplate": (await getPageTemplateDrupal() ?? [])
            }
            break;
        default:
            returnData = {
                "provider": "contentful",
                "data": (await getContentfulWellnessPage()) ?? [],
                "pagetemplate": (await getPageTemplate()) ?? []
            }
            break;
    }
    return returnData;
}
