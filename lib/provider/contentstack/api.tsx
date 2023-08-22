const requestHeaders: HeadersInit = new Headers();
requestHeaders.set('Content-Type', 'application/json');
requestHeaders.set('access_token', `${process.env.CONTENTSTACK_API_KEY}`)
requestHeaders.set('branch', `${process.env.CONTENTSTACK_BRANCH}`)

async function fetchContentStackGraphQL(query: string, preview = false) {
    const entries = await fetch(
    `https://graphql.contentstack.com/stacks/${process.env.CONTENTSTACK_STACK_ID}?environment=${process.env.CONTENTSTACK_ENVIRONMENT}`,
    {
      method: 'POST',
      headers: requestHeaders,
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json())
  return entries;
}
export default fetchContentStackGraphQL

export async function getContentStackHomePage() {
  const entries = await fetchContentStackGraphQL(
    `query {
      all_homepage(limit:1){
        items {
          ${Home_GRAPHQL_FIELDS}
        }
      }
    }`
  )
  return extractHomeEntries(entries)
}

const Home_GRAPHQL_FIELDS = `
title
card_blockConnection {
  edges {
    node {
      ... on CardBlock {
        title
        description
        background_imageConnection {
          edges {
            node {
              dimension {
                width
                height
              }
              url
            }
          }
        }
        grid
        rounded_image
        variant
        card_collectionConnection {
          edges {
            node {
              ... on Card {
                title
                url
                description
                link_text
                short_description
                imageConnection {
                  edges {
                    node {
                      dimension {
                        height
                        width
                      }
                      url
                    }
                  }
                }
                thumbnailConnection {
                  edges {
                    node {
                      dimension {
                        height
                        width
                      }
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
home_bannerConnection {
  edges {
    node {
      ... on Carousel {
        title
        url
        adaptive_height
        arrows
        dots
        infinite_scroll
        slide_to_scroll
        slidetoshow
        speed
        banner_collectionConnection {
          edges {
            node {
              ... on Banner {
                title
                url
                background_imageConnection {
                  edges {
                    node {
                      url
                    }
                  }
                }
                description
                excerpt
              }
            }
          }
        }
      }
    }
  }
}
`

function extractHomeEntries(fetchResponse: { data: { all_homepage: { items: any[] } } }) {
  let data = fetchResponse?.data?.all_homepage?.items[0]  
  return {
    "title": data?.title ? data.title : "",   
    "banner": data?.home_bannerConnection?.edges[0]?.node ? data.home_bannerConnection.edges[0].node : "",
    "cardBlock": data?.card_blockConnection?.edges[0]?.node ? data.card_blockConnection.edges[0].node : [], 
    "provider": "contentstack"
  }
}











