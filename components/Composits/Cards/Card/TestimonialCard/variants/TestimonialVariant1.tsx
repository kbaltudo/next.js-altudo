import Styles from "../TestimonialCard.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faQuoteLeft ,faQuoteRight} from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';
import { GetTestimonialData } from "../GetTestimonialCardData";
const TestimonialVariant1 = ({ content, provider }: any) => { 
  const data = GetTestimonialData(content, provider)
  
  return ( 
       <>  
        <div className={"text-center " + Styles.testimonialcard}> 
              <div className="row">
              {data.author.authorImage.url?
                  <div className="col-12 col-md-4">
                      <div className={Styles.authorimage} >               
                        <Image  src={data.author.authorImage.url} alt={data.author.authorImage.alt} width={100} height={100} />
                      </div>
                  </div>
              :""} 
              <div className="col-12 col-md-8">
                  {data.description?
                      <>
                         <div className={Styles.aboutauthor}>  
                          <FontAwesomeIcon className={"icon "+ Styles.quoteicon + " " + Styles.iconleft} icon={faQuoteLeft} /> 
                            {data.description}
                          <FontAwesomeIcon className={"icon "+ Styles.quoteicon + " " + Styles.iconright} icon={faQuoteRight} />
                        </div>
                      </>
                  :""} 
                    <br/>
                      <p>{data?.author?.nickname ?<strong>{data.author.nickname}</strong> : ""}
                      <br/>{data.author.designation ? data.author.designation : ""}
                      <br/>{data.author.organization ? data.author.organization : ""}
                    </p>

                  </div>
                
              </div>
          </div>
    </>
  );
};

export default TestimonialVariant1;
