import React from 'react'
import Head from 'next/head'
import Layout from '../components/PageStructure/Container/Layout'
import Banner from '../components/Media/Banner/Banner'
import { partnerWithUSRouter } from '../lib/provider/mapper'
import CardBlock from '../components/Composits/CardBlock/CardBlock'
import ContentTile from '../components/PageContent/ContentTile/ContentTile'
const PartnerWithUs = ({ pageTemplate, pageResponse, provider }: any) => {
    
    return (
        <Layout header={pageTemplate} provider={'drupal'} >
            <Head>
                <title>  {pageResponse.title} </title>
            </Head>
            <>
                <Banner content={pageResponse.banner} provider={provider} />
                <CardBlock content={pageResponse.cardBlock4} provider={provider} />
                <ContentTile content={pageResponse.contentTile} provider={provider} />
                </>
        </Layout>
    )
}
export default PartnerWithUs;

export async function getStaticProps() {
    const pageResponse = (await partnerWithUSRouter()) ?? [];
    return {
      props: {
        pageTemplate: pageResponse.pagetemplate,
        pageResponse: pageResponse.data,
        provider: pageResponse.provider
      }
    }
  }