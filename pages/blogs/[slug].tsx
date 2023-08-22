import React from "react";
import Head from "next/head";
import { getArticleRouter } from "../../lib/provider/mapper";
import Container from "../../components/PageStructure/Container/Container";
import Layout from "../../components/PageStructure/Container/Layout";
import BlogVariant3 from "../../components/Composits/Blog/Variant-3/Variant-3";


function BlogDetails(props: any) {
    const { pagetemplate, article, params, provider } = props;
    return (
        <Layout header={pagetemplate} provider={'drupal'}>
            <Head>
                <title>{article.title}</title>                
            </Head>
            <>
                <BlogVariant3 content={article} provider={'contentful'} />
            </>
        </Layout>
    );
}

export default BlogDetails;

export async function getServerSideProps({ params }: any) {
    const { slug } = params;
    let data: any = null
    data = await getArticleRouter(slug)
    // 404 if we does not found the data in API response
    if (null === data.data) {
        return {
            notFound: true
        };
    }

    return {
        props: {
            article: data.data,
            pagetemplate: data.pagetemplate
        }
    }
}

