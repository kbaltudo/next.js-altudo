import Head from "next/head";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
const Layout = ({ children, header, provider }: any) => {
    const providerData = provider ? provider : "drupal"
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header content={header} provider={providerData} />
            <main>
                {children}
            </main>
            <Footer content={header} />
        </>
    )
}
export default Layout;