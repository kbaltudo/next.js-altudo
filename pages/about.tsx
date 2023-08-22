import React from 'react'
import Head from 'next/head'
import Layout from '../components/PageStructure/Container/Layout'
import { aboutRouter } from '../lib/provider/mapper'
import Banner from '../components/Media/Banner/Banner'
import CardBlock from '../components/Composits/CardBlock/CardBlock'
import TwoColumnTile from '../components/PageContent/TwoColumnTile/TwoColumnTile'
import ContentHeading from '../components/PageContent/ComponentHeading/ComponentHeading'
import ComponentTestimonial from '../components/Composits/Cards/Card/TestimonialCard/ComponentTestimonial'
import ImpactCard from '../components/Composits/Cards/Card/ImpactCard/ImpactCard'
import ProfileCard from '../components/Composits/Cards/Card/ProfileCard/ProfileCard'
import Teams from '../components/Composits/Teams/Teams'
import AccordionComponent from '../components/PageContent/Accordion/Accordion'
import Container from '../components/PageStructure/Container/Container'
import Loader from '../components/PageContent/Loader/Loader'
const About = ({ pageTemplate, pageResponse, provider }: any) => {
console.log(pageTemplate)
  return (
    <Layout header={pageTemplate} provider={'drupal'}>
      <Head>
        <title>{pageResponse.title}</title>
      </Head>
      <>
        <Banner content={pageResponse.innerBanner} provider={'contentful'} />
        <CardBlock content={pageResponse.cardBlock} provider={'contentful'} />
        <TwoColumnTile content={pageResponse.twoColumnTile} provider={'contentful'} />
        <ComponentTestimonial content={pageResponse.testimonialCard} provider={'contentful'} />
        <Container>
          <Teams content={pageResponse.ourTeams} provider={'contentful'} />
        </Container>
        {/* <Container><div className="row mb-5">
          <div className="col-md-6">

          </div>
          <div className="col-md-6">
            <AccordionComponent content={pageResponse.cardBlock.cardsCollection.items} provider={provider} flush={true} />
          </div>
        </div></Container> */}



      </>
    </Layout>
  )
}

export default About;

export async function getStaticProps() {
  const pageResponse = (await aboutRouter()) ?? [];
  return {
    props: {
      pageTemplate: pageResponse.pagetemplate,
      pageResponse: pageResponse.data,
      provider: pageResponse.provider
    }
  }
}