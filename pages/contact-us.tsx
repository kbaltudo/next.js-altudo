import React from 'react';
import Head from 'next/head';
import Layout from '../components/PageStructure/Container/Layout';
import { contactUsRouter } from '../lib/provider/mapper';
import TitleDescription from '../components/Molecule/TitleDescription/TitleDescription';
import Section from '../components/PageStructure/Container/Section';
import ContactForm from '../components/Forms/ContactUs/ContactForm';



const Contact = ({ pageTemplate, pageResponse, provider }: any) => {
    
    return (
        <Layout header={pageTemplate} provider={'drupal'}>
            <Head>
                <title>{pageResponse.title}</title>
            </Head>
            <>
                <Section className="">
                    <TitleDescription type={'h3'} title={pageResponse.title} description={pageResponse.description} />
                </Section>
                <ContactForm content={pageResponse.contactUs} />
            </>
        </Layout>
    )
}

export default Contact;

export async function getStaticProps() {
    const pageResponse = (await contactUsRouter()) ?? [];
    return {
        props: {
            pageTemplate: pageResponse.pagetemplate,
            pageResponse: pageResponse.data,
            provider: pageResponse.provider
        }
    }
}