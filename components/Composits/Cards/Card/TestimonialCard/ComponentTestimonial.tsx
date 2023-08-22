import Styles from "./TestimonialCard.module.scss";
import TestimonialCard from "./TestimonialCard";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Key } from "react";
const ComponentTestimonial = ({ content, provider }: any) => {

  const cardData = content.testimonialsCardsCollection.items,
    cardVariant = content.testimonialVariant.variants,
    isCarousel = content.isCarousel,
    carouselSettings = content.carouselConfiguations,
    sliderSettings = {
      centerPadding: '15px',
      slidesToShow: carouselSettings?.slideToShow ? carouselSettings.slideToShow : 2,
      slidesToScroll: carouselSettings?.slideToScroll ? carouselSettings.slideToScroll : 1,
      dots: carouselSettings?.dots ? carouselSettings.dots : true,
      infiniteScroll: carouselSettings?.infiniteScroll ? carouselSettings.infiniteScroll : true,
      adaptiveHeight: carouselSettings?.adaptiveHeight ? carouselSettings.adaptiveHeight : true,
      speed: carouselSettings?.speed ? carouselSettings.speed : 2000,
      arrows: (carouselSettings?.arrow) ? carouselSettings.arrow : false
    };

  return (
    <>

      <section className="bg-dark">
        <div className="container">
          <div className="row">
            {isCarousel == true ?
              <Slider {...sliderSettings} className={Styles.hero + ' ' + Styles.testimonialslider}>
                {cardData.map((cardlist: any, index: Key) => (
                  <div key={index} className="col-12 text-center d-flex mb-2 mt-2 ">
                    <TestimonialCard content={cardlist} provider={provider} variant={cardVariant} />
                  </div>
                ))}
              </Slider>
              :
              <>
                {cardData.map((cardlist: any, index: Key) => (
                  <div key={index} className="col-6 text-center d-flex mb-2 mt-2 ">
                    <TestimonialCard content={cardlist} provider={provider} variant={cardVariant} />
                  </div>
                ))}
              </>
            }
          </div>
        </div>

      </section>
      <br />




    </>
  );
};

export default ComponentTestimonial;
