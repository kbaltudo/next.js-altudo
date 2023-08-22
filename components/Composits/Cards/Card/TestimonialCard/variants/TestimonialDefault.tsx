import Styles from "../TestimonialCard.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faQuoteLeft,faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';
import { GetTestimonialData } from "../GetTestimonialCardData";
import Description from "../../../../../Elements/Description";
const TestimonialDefault = ({ content, provider }: any) => { 
  const data = GetTestimonialData(content, provider),
       author = data.author;
   return ( 
       <>  
        <div className={"text-center " + Styles.testimonialcard}> 
              
              {data.description || data.description != ""?
                <>
                <div className={Styles.about_author}> 
                  <FontAwesomeIcon className={"icon "+ Styles.quoteicon + " " + Styles.iconleft} icon={faQuoteLeft} /> 
                  <Description>{data.description}</Description>
                  <FontAwesomeIcon className={"icon "+ Styles.quoteicon + " " + Styles.iconright} icon={faQuoteRight} />
                </div>
                </>
              :""}            
           
              {author.authorImage.url?
                <>
                  <div className={Styles.authorimage} >               
                    <Image  src={author.authorImage.url} alt={author.authorImage.alt} width={100} height={100} />
                  </div>
                </>
            :""}           
              <br/>           
                <div className={Styles.author_description}>
                  <strong>{author.nickname}</strong>
                  <br/>{author.designation}
                  <br/>{author.organization}
                </div>
          </div>
   
       
    </>
  );
};

export default TestimonialDefault;
