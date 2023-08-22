import Styles from "./ContentTile.module.scss";
import Section from "../../PageStructure/Container/Section";
import { GetContentTileData } from "./GetContentTileData";
import Image from "next/image";
import Video from "../../Media/Video/Video";

const ContentTile = ({ content, provider }: any) => {
  const returnData = GetContentTileData(content, provider)
  return (
    <>
      {returnData ?
        <Section style={{ backgroundImage: `url(${returnData.backgroundImage})` }} className={Styles.contentTile + " component"}>
          <div className={Styles.innerWrap}>
            {(returnData?.media?.contentType == "image/jpeg") ?
              <figure>
                <Image src={returnData.media.url} alt={returnData.media.alt} width={returnData.media.width} height={returnData.media.height} />
              </figure> :
              (returnData?.media?.contentType == "video/mp4") ?
                <>
                  <video className="w-100 pb-4" width={returnData.media.width} height={returnData.media.height} controls>
                    <source src={returnData.media.url} type="video/mp4" />
                  </video>

                </> : ""
            }
            {returnData?.description ?
              <div className="body-copy" dangerouslySetInnerHTML={{ __html: returnData.description }} />
              : ""}
          </div>
        </Section>
        : ""}
    </>
  );
};

export default ContentTile;

ContentTile.defaultProps = {
  provider: ""
};
