import Image from "next/image";
import Styles from './Image.module.scss';
import Container from "../../PageStructure/Container/Container";
import Section from "../../PageStructure/Container/Section";

const ImageComponent = ({ content }:any) => {
    const data = {
        url: content ? content.url : "",
        alt: content ? content.alt : "",
        width: content ? content.width : "",
        height: content ? content.height : ""
    }
    return (
        <>
            {data.url
                ?
                <Section className={Styles.image + " component"}>
                    <Container>
                        <div className='row'>
                            <div className='col-12 fill-layout mb-5'>
                                <Image src={data.url} className="img-responsive center-block" alt={data.alt} layout="fill" />
                            </div>
                        </div>
                    </Container>
                </Section>
                : ""
            }
        </>
    )
}

export default ImageComponent;