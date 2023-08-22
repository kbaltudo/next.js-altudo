import React from 'react'
import Head from 'next/head'
import Layout from '../components/PageStructure/Container/Layout'
import { webinarRouter } from '../lib/provider/mapper'
import Webinars from '../components/Engagement/WebinarListing/WebinarListing'


const partnersinpossibility = ({ pageTemplate, pageResponse, provider}:any) => { 
  
  return (
    <Layout header={pageTemplate} provider={'drupal'}>
      <Head>
        <title>{pageResponse.title}</title>        
      </Head>
      <>                
        <Webinars content={pageResponse.webinars} provider={provider} /> 
      </>
    </Layout>
  )
}

export default partnersinpossibility;

export async function getStaticProps() {
  const pageResponse = (await webinarRouter()) ?? [];
  return {
    props: {
      pageTemplate: pageResponse.pagetemplate,
      pageResponse: pageResponse.data,
      provider: pageResponse.provider
    }
  }
}
