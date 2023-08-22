import React from 'react'
import Head from 'next/head'
import Layout from '../components/PageStructure/Container/Layout'
import { WellnessRouter } from '../lib/provider/mapper'
import CardBlock from '../components/Composits/CardBlock/CardBlock'
import Banner from '../components/Media/Banner/Banner'
import SocialShare from '../components/Composits/Cards/Card/SocialShare/SocialShare'


const Wellness = ({ pageTemplate, pageResponse, provider}: any) => {
    return ( 
        <Layout header={pageTemplate} provider={'drupal'}>
        <Head>
          <title>{pageResponse.title}</title>          
        </Head>
        <>
        <Banner content={pageResponse.banner} provider={provider} />
        <CardBlock content={pageResponse.cardBlock} provider={provider}  />
        <CardBlock content={pageResponse.cardBlock2} provider={provider}  />
        <SocialShare content={pageResponse.socialLinks} provider={provider} />
        </>
      </Layout>
     );
}
 
export default Wellness;

export async function getStaticProps() {
    const pageResponse = (await WellnessRouter()) ?? [];
    return {
      props: {
        pageTemplate: pageResponse.pagetemplate,
        pageResponse: pageResponse.data,
        provider: pageResponse.provider
      }
    }
  }