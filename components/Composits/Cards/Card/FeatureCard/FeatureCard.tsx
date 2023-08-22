import { GetCardData } from "../GetCardData";
import Section from "../../../../PageStructure/Container/Section";
import Title from "../../../../Elements/Title";
import Image from "next/image";
import Styles from './FeatureCard.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';


const Card_Feature_Card = ({ content, provider }: any) => {
    const returnData = GetCardData(content, provider)

    return (
        <>
            <Section replaceclass className={Styles.faeturecard + " pt-4 pb-4"}>
                {returnData.thumbnail.url ?
                    <figure className={Styles.icon}>
                        <Image className="" src={returnData.thumbnail.url} width={returnData.thumbnail.width} height={returnData.thumbnail.height} alt={returnData.thumbnail.alt} />
                    </figure> : ""}
                {returnData.title ?
                    <div className={Styles.caption + " p-3"}>
                        <Title replaceclass className="mt-2 mb-3" type="h5">{returnData.title}</Title>
                        <div className="body-copy mb-4" dangerouslySetInnerHTML={{ __html: returnData.shortDescription }} />
                        {returnData.slug ? <Link href={returnData.slug}>
                            <button type="button" className="btn btn-secondary">{returnData.linkText}
                                <FontAwesomeIcon className="ms-1 fa-1x" icon={faAngleRight} />
                            </button>
                        </Link> : ""}
                    </div> : ""}
            </Section>

        </>
    );
};

export default Card_Feature_Card;



