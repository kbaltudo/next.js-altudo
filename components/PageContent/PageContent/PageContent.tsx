import Title from '../../Elements/Title';
import { GetPageContent } from './GetPageContentData';
import Section from '../../PageStructure/Container/Section';

const PageContent = ({ content, provider }: any) => {
    const returnData = GetPageContent(content, provider);
    const Configuration = {
        alignment: returnData?.title?.alignment ? returnData.title.alignment : "text-center",
        titleType: returnData?.title?.titleType ? returnData.title.titleType : "h2"
    }
    return (
        <Section className="bg-light-grey">
            <Title className={Configuration.alignment} type={Configuration.titleType}>{returnData.title}</Title>
            {returnData?.description ?
                <div className={Configuration.alignment + " body-copy"} dangerouslySetInnerHTML={{ __html: returnData.description }} /> : ""}
        </Section>

    )

}
export default PageContent;