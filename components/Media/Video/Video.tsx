import Styles from './Video.module.scss';
import Section from "../../PageStructure/Container/Section";
import { GetVideoData } from "./GetVideoData";

const Video = ({ content,provider }: any) => {
    const returndata = GetVideoData(content, provider);
    return (
        <>
            {returndata?.video?.url ?
                <Section replaceclass className={"component " + Styles.video + " pt-4 pb-4"}>
                    <video width={returndata.video.width} height={returndata.video.height} controls={returndata.controls} loop={returndata.loop} autoPlay={returndata.autoPlay} >
                        <source src={returndata.video.url} type="video/mp4" />
                    </video>
                </Section>
                : ""
            }
        </>
    )
}

export default Video;