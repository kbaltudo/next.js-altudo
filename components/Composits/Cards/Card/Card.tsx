import ContentCardHorizontal from "./ContentCardHorizontal/ContentCardHorizontal";
import Card_Feature_Card from "./FeatureCard/FeatureCard";
import Section from "../../../PageStructure/Container/Section";
import Styles from "./Card.module.scss"
import StatCard from "./StatCard/StatCard";
import ContentCard from "./ContentCard/ContentCard";
import ImpactCard from "./ImpactCard/ImpactCard";


const Card = ({ content, provider, variant }: any) => {

    return (
        <>
            <Section replaceclass className={Styles.card}>
                {"contentcardhorizontal" === variant ?
                    <ContentCardHorizontal content={content} provider={provider} /> :
                    <>
                        {"contentcard" === variant ?
                            <ContentCard content={content} provider={provider} /> :
                            <>
                                {"statcard" === variant ?
                                    <StatCard content={content} provider={provider} /> :
                                    <>
                                        {"impactcard" === variant ?
                                            <ImpactCard content={content} provider={provider} /> :
                                            <Card_Feature_Card content={content} provider={provider} />
                                        }
                                    </>

                                }
                            </>

                        }
                    </>
                }
            </Section>
        </>
    );
};

export default Card;



