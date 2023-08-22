import React from "react";
import Image from "next/image";
import Styles from "./LogoCard.module.scss"
import { GetCardData } from "../GetCardData";

const LogoCard = ({ content, provider }: any) => {
    const cardData = GetCardData(content, provider);
    return (
        <section className={Styles.logo_card + " mt-3 mb-3"}>
            <figure>
                <Image src={cardData.image.url} width={cardData.image.width} height={cardData.image.height} alt={cardData.image.alt} />
            </figure>
        </section>
    )
}

export default LogoCard;

LogoCard.defaultProps = {
    provider: ""
};

