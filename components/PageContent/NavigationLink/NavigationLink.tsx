import React from 'react'
import Styles from './NavigationLink.module.scss'
import { GetNavigationLinkData } from './GetNavigationLinkData'
import Link from 'next/link'

const NavigationLink = ({ content, provider }: any) => {
    const returnData = GetNavigationLinkData(content, provider)
    return (
        <>
            <li className={Styles.navlink + " nav-item dropdown"}>
                <Link className="nav-link" href={"/" + returnData.slug} aria-current="page">
                    {returnData.title}
                </Link>
            </li>
        </>
    )
}

export default NavigationLink;
