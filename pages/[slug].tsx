import React from "react";
import Head from "next/head";

import Layout from "../components/PageStructure/Container/Layout";
import Image from "next/image";
import { title } from "process";
import { defaultRouter } from "../lib/provider/mapper";
import InnerBanner from "../components/Media/InnerBanner/InnerBanner";

function Index({ pageResponse, pageTemplate }: any) {
    return (
        <Layout header={pageTemplate} provider={'drupal'} >
            <Head>
                <title>{pageResponse.title}</title>
            </Head>
            <section className="page-content pb-5">
                <InnerBanner content={pageResponse.banner} alignment="align-center" provider="contentful" />
                <div className="container custom_container pt-5">
                    <h1>{pageResponse.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: pageResponse.description }} />
                </div>
            </section>
        </Layout>
    );
}

export default Index;
export async function getServerSideProps({ params }: any) {
    const { slug } = params;
    const pageResponse = await defaultRouter(slug);
    // 404 if we does not found the data in API response
    if (!pageResponse.data) {
        return {
            notFound: true
        };
    }
    return {
        props: {
            pageTemplate: pageResponse.pagetemplate,
            pageResponse: pageResponse.data,
        }
    }
}