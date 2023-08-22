import Head from "next/head";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
const Layout2 = ({ children, header, provider,className }: any) => {
    const providerData = provider ? provider : "drupal"
    className ? className : ""
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header content={header} provider={providerData} className={'header-position-fixed'} />
            <main className="pt-5 pt-lg-2">
                {children}
            </main>
            
        </>
    )
}
export default Layout2;