import React from 'react'
import Head from 'next/head'
import Layout from '../components/PageStructure/Container/Layout'
import { careersRouter } from '../lib/provider/mapper'
import Banner from '../components/Media/Banner/Banner'
import TwoColumnTile from '../components/PageContent/TwoColumnTile/TwoColumnTile'
import CardBlock from '../components/Composits/CardBlock/CardBlock'
import ContactForm from '../components/Forms/ContactUs/ContactForm'
const Careers = ({ pageTemplate, pageResponse, provider }: any) => {
  return (
    <Layout header={pageTemplate} provider={'drupal'}>
      <Head>
        <title>{pageResponse.title}</title>
      </Head>
      <>
        <Banner content={pageResponse.innerBanner} provider={provider} />
        <TwoColumnTile content={pageResponse.twoContentTile} provider={provider} />
        <CardBlock content={pageResponse.cardBlock} provider={provider} />
        <ContactForm content={pageResponse.contactUs} provider={provider} />
      </>
    </Layout>
  )
}

export default Careers;

export async function getServerSideProps() {
  const pageResponse = (await careersRouter()) ?? [];
  return {
    props: {
      pageTemplate: pageResponse.pagetemplate,
      pageResponse: pageResponse.data,
      provider: pageResponse.provider
    }
  }
}
