import Styles from "./Webinar.module.scss";
import Title from "../../Elements/Title";
import Image from "next/image";
import { GetWebinarData } from "./GetWebinarData";
import moment from 'moment';
import Link from "next/dist/client/link";
import Section from "../../PageStructure/Container/Section";
import Description from "../../Elements/Description";
import Video from "../../Media/Video/Video";

const Webinar = ({ content, provider }: any) => {
  const returndata = GetWebinarData(content, provider);
  const gridClss = {
    gridRight: returndata?.image?.url ? "col-md-8" : "col-md-12"
  }
  return (
    <Section replaceclass className={Styles.webinar + " pt-5 pb-3"} >
      <div className="row">
        {returndata?.image?.url ?
          <div className={Styles.col_left + " col-md-4"}>
            <Image src={returndata.image.url} width={returndata.image.width} height={returndata.image.height} alt={returndata.image.alt} />
          </div> : ""}
        <div className={Styles.col_right + " " + gridClss.gridRight}>
          <Title type={'h4'}>{returndata.title}</Title>
          <strong>Timing : {moment(returndata.date).format('MMMM DD, YYYY')} ({moment(returndata.startTime).format('HH:mm A')} - {moment(returndata.endTime).format('HH:mm A')}) </strong>
          <Description type={undefined} className={"pt-2"}>{returndata.description}</Description>
          <blockquote><em>Author :{returndata.author.authorName + " ( " + returndata.author.designation + ", " + returndata.author.organization + " )"}</em></blockquote>
          {returndata?.linkText ?
            <Link href={returndata.slug}><button type="button" className="btn btn-primary">{returndata.linkText}</button></Link> : ""
          }
          {returndata?.video ?
            <Video content={returndata.video} provider={provider} /> : ""
          }
        </div>
      </div>

    </Section>
  );
};



export default Webinar;
