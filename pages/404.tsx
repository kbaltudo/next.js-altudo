// pages/404.js
import React from 'react';
import Head from "next/head";
import Link from "next/link";
import Container from "../components/PageStructure/Container/Container";
import Layout from "../components/PageStructure/Container/Layout";
import Style from "../styles/404.module.css"
import Title from "../components/Elements/Title";
import { fetcher } from '../lib/provider/strapi/api';
import Slug from '../components/Elements/Slug';
import { homeRouter } from '../lib/provider/mapper';

const Custom404 = ({ pageTemplate ,provider } : any) => {
  return (
    <Layout header={pageTemplate} provider={'drupal'}>
      <Head>
        <title>404 - Page Not found.</title>
      </Head>
      <Container>
        <div className="row d-flex justify-content-center p-5 text-center">
          <div className={" col-md-6" + Style.pageheight}>
            <Title className={Style.heading} type={undefined}> 404 </Title>
            <p>Sorry&#39; we can&apos;t find the page you&apos;re looking for. 😞  </p>
            <Link className="btn btn-primary" href="/" type={undefined}>
              Go back Home
            </Link>
          </div>
        </div>
      </Container>
    </Layout>
  );
}

export default Custom404;

export async function getStaticProps() {
  const pageResponse = (await homeRouter()) ?? [];
  return {
    props: {
      pageTemplate: pageResponse.pagetemplate
    }
  }
}