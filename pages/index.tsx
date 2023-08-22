import React from 'react'
import Head from 'next/head'
import Layout from '../components/PageStructure/Container/Layout'
import ContentTile from '../components/PageContent/ContentTile/ContentTile'
import HeroBanner from '../components/Media/HeroBanner/HeroBanner'
import { homeRouter } from '../lib/provider/mapper'
import CardBlock from '../components/Composits/CardBlock/CardBlock'
import ContactForm from '../components/Forms/ContactUs/ContactForm'
import SocialShare from '../components/Composits/Cards/Card/SocialShare/SocialShare'
import Section from '../components/PageStructure/Container/Section'
import { Container } from 'react-bootstrap'
import fetchTokenData from '../utils/fetchTokenData'

const Home = ({ pageTemplate, pageResponse, provider }: any) => {  
  return (
    <Layout header={pageTemplate} provider={provider}>
      <Head>
        <title>
          {provider == "drupal" ? "Home Drupal" : pageResponse.title}
        </title>
      </Head>
      <>
        <HeroBanner
          provider={provider}
          content={pageResponse.banner}
          content_over_image={false}
        />
        <ContentTile provider={provider} content={pageResponse.contentTile} />
         <CardBlock content={pageResponse.cardBlock} provider={provider} />                       
        <CardBlock content={pageResponse.cardBlock2} provider={provider} />
        <CardBlock content={pageResponse.cardBlock4} provider={provider} />
        <ContactForm content={pageResponse.contactUs} />
        <Section className="bg-light-grey">
          <Container>
            <SocialShare
              content={pageResponse.socialLinks}
              provider={provider}
            />
          </Container>
        </Section>
      </>
    </Layout>
  );
};

export default Home;

export async function getServerSideProps() {
  
  const data = await fetchTokenData();
  console.log({ data });
  const pageResponse = (await homeRouter()) ?? [];
  return {
    props: {
      pageTemplate: pageResponse.pagetemplate,
      pageResponse: pageResponse.data,
      provider: pageResponse.provider,
      apiTokenData: data,
    },
  };
}
