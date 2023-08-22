import React from 'react'
import Container from '../Container/Container';
import Link from 'next/link';
import Styles from './Footer.module.scss';
import Image from 'next/image';

const Footer = ({ content }:any) => {
    const data = {
        logo: content?.logo ? content.logo : "",
    };
    return (
        <footer className={Styles.footer + " pt-5 pb-4 bg-dark"}>
            <Container>
                <div className='row justify-content-between'>
                    <div className='col-12 col-md-auto mb-4 text-center text-md-left'>
                        <Link className={Styles.logo} href="/" passHref>
                            
                                <Image
                                    src={data.logo.url}
                                    width={data.logo.width}
                                    height={data.logo.height}
                                    alt={data.logo.alternativeText}
                                />
                        </Link>
                    </div>
                    <div className='col-12 col-md-auto mb-2 text-center text-md-left'>
                        <div className={Styles.footertext}>
                            <p>Address: <i>Vivamus efficitur,<br /> eros at quam lacinia.</i> <br /> Phone: 99 XX XX XXXX <br /> Email: <i>email@host.com</i></p>
                        </div>
                    </div>
                </div>
                <div className='row text-center'>
                    <span className={Styles.textsmall}>© 2022 NVA | Privacy Policy</span>
                </div>
            </Container>
        </footer>
    )
}

export default Footer;