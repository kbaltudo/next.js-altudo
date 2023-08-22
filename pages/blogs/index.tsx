import Head from "next/head";
import TitleDescription from "../../components/Molecule/TitleDescription/TitleDescription";
import Layout from "../../components/PageStructure/Container/Layout";
import Section from "../../components/PageStructure/Container/Section"
import { newsAndStoriesRouter } from "../../lib/provider/mapper";
import BlogListing from "../../components/Engagement/BlogListing/BlogListing";
import CategoryListing from "../../components/Engagement/CategoryListing/CategoryListing"

const NewsAndStories = ({ pageResponse, pageTemplate, provider }: any) => {
 
  const titleDescription = {
    title: pageResponse?.titleDescription?.title ? pageResponse.titleDescription.title : "",
    description: pageResponse?.titleDescription?.description ? pageResponse.titleDescription.description : "",
  }
  return (
    <Layout header={pageTemplate} provider={'drupal'}>
      <Head>
        <title>{pageResponse.title}</title>        
      </Head>
      <>
        <Section>
          <TitleDescription type={'h3'} title={titleDescription.title} description={titleDescription.description} />
        </Section>
        {/* <Blog content={pageResponse.blogListing[0]} provider={provider} /> */}
        <div className="container">
          {2 == pageResponse.blogListing.variant ?
            <>
              <CategoryListing content={pageResponse.categories} provider={provider} />
              <BlogListing content={pageResponse.blogListing} provider={provider} />
            </> :
            <>
              <div className="row">
                <div className="col-md-9">
                  <BlogListing content={pageResponse.blogListing} provider={provider} />
                </div>
                <div className="col-md-3">
                  <CategoryListing content={pageResponse.categories} provider={provider} />
                </div>
              </div>
            </>
          }

        </div>
      </>
    </Layout >
  );
};

export async function getStaticProps() {
  const pageResponse = (await newsAndStoriesRouter()) ?? [];
  return {
    props: {
      pageTemplate: pageResponse.pagetemplate,
      pageResponse: pageResponse.data,
      provider: pageResponse.provider
    }
  }
}

export default NewsAndStories;
