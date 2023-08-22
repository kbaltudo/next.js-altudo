import { GetCardData } from "../GetCardData";
import Section from "../../../../PageStructure/Container/Section";
import Title from "../../../../Elements/Title";
import Styles from './ImpactCard.module.scss'
import Link from "next/link";
import Description from "../../../../Elements/Description";

const ImpactCard = ({ content, provider }: any) => {
    const returnData = GetCardData(content, provider)
    return (
        <>
            <div className={"card mb-3 " + Styles.impact_card}>
                <div className="card-body">
                    <Title className="card-title" type={'h4'}>{returnData.title}</Title>
                    <Description>{returnData.description}</Description>
                    <Link className="mt-2 btn btn-secondary" href={returnData.slug}>
                        {returnData.linkText}
                    </Link>
                </div>
            </div>
        </>
    );
};

export default ImpactCard;



