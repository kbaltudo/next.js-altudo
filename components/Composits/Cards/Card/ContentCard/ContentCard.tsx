import { GetCardData } from "../GetCardData";
import Section from "../../../../PageStructure/Container/Section";
import Title from "../../../../Elements/Title";
import Image from "next/image";
import Styles from './ContentCard.module.scss'
import Link from "next/link";
import Description from "../../../../Elements/Description";

const ContentCard = ({ content, provider }: any) => {
    const returnData = GetCardData(content, provider)    

    return (
        <Section replaceclass className={Styles.content_card + " pb-5"}>
            {returnData?.thumbnail?.url ?
                <figure className="pb-3">
                    <Image className="" src={returnData.thumbnail.url} width={returnData.thumbnail.width} height={returnData.thumbnail.height} alt={returnData.thumbnail.alt} />
                </figure> : ""
            }
            {returnData?.title ?
                <div className={Styles.caption}>
                    <Title replaceclass className="mt-2 mb-3" type="h5">{returnData.title}</Title>
                    {returnData?.shortDescription ?
                        <Description>{returnData.shortDescription}</Description>:""
                    }
                    {returnData?.linkText ?
                        <Link href={"/"+ returnData.slug}><button type="button" className="btn btn-primary">{returnData.linkText}</button></Link> : ""
                    }
                </div> : ""
            }

        </Section>
    );
};

export default ContentCard;



