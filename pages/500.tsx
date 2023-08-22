// pages/500.js
import React from 'react';
import Head from "next/head";
import Link from "next/link";
import Container from "../components/PageStructure/Container/Container";
import Layout from "../components/PageStructure/Container/Layout";
import { homeRouter } from '../lib/provider/mapper';


const Custom500 = ({pagetemplate, provider}:any) => {
  return (
    <Layout  header={pagetemplate} provider={'drupal'}>
      <Head>
        <title>500 - Server-side error occurred</title>
      </Head>
      <Container>
        <div className="row d-flex justify-content-center pt-5">
          <div className="col-6">
            <h1>500 - Server-side error occurred</h1>
            <Link href="/">
              Go back Home
            </Link>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Custom500;
 
export async function getStaticProps() {
  const pageResponse = (await homeRouter()) ?? [];
  return {
    props: {
      pageTemplate: pageResponse.pagetemplate
    }
  }
}