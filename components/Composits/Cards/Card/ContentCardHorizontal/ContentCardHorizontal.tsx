import { GetCardData } from "../GetCardData";
import Section from "../../../../PageStructure/Container/Section";
import Title from "../../../../Elements/Title";
import Image from "next/image";
import Styles from './ContentCardHorizontal.module.scss'
import Link from "next/link";
import Description from "../../../../Elements/Description";

const ContentCardHorizontal = ({ content, provider }: any) => {
    const returnData = GetCardData(content, provider)
    const grid = returnData?.thumbnail?.url ? " col-md-8 col-lg-9":" col-md-12";
    return (
        <>
            <Section replaceclass className={Styles.content_card_horizontal + " pt-4 pb-4"}>
                <div className="row">
                    {returnData?.thumbnail?.url ?
                        <figure className="col-md-4 col-lg-3">
                            <Image src={returnData.thumbnail.url} width={returnData.thumbnail.width} height={returnData.thumbnail.height} alt={returnData.thumbnail.alt} />
                        </figure> : ""
                    }
                    {returnData?.title ?
                        <div className={Styles.caption + grid +" align-self-center"} >
                            <Title replaceclass className="mt-2 mb-3" type="h5">{returnData.title}</Title>
                            {returnData?.shortDescription ?
                                <div className='mb-4'>
                                    <Description>{returnData.shortDescription}</Description>
                                </div> : ""
                            }
                            {returnData?.linkText ?                                
                                <Link href={`/` + returnData.slug}><button type="button" className="btn btn-primary">{returnData.linkText}</button></Link>
                                : ""
                            }
                        </div> : ""
                    }

                </div>
            </Section>
        </>
    );
};

export default ContentCardHorizontal;



