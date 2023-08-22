import Styles from './Audio.module.scss';
import Section from "../../PageStructure/Container/Section";
import { GetAudioData } from "./GetAudioData";

const Audio = ({ content, provider }: any) => {
    const returndata = GetAudioData(content, provider);
    return (
        <Section className={Styles.audio}>
            {returndata?.audio?.url ?
                <audio controls={returndata.controls} loop={returndata.loop} autoPlay={returndata.autoPlay}>
                    <source src={returndata.audio.src} type="audio/ogg" />                    
                </audio>
                : ""
            }
        </Section>
    )
}

export default Audio;