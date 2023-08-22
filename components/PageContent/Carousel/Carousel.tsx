import Styles from "./Carousel.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Key } from "react";




const HomeBanner = ({ content, provider, alignment, content_over_image }:any) => {
  const bannerData = content?.bannerCollection?.items ? content.bannerCollection.items : content ? content : [];
  const sliderSettings = {
    slidesToShow: content?.slideToShow ? content?.slideToShow : 1,
    slidesToScroll: content?.slideToScroll ? content?.slideToScroll : 1,
    dots: content?.dots ? content.dots : false,
    infiniteScroll: content?.infiniteScroll ? content.infiniteScroll : true,
    adaptiveHeight: content?.adaptiveHeight ? content.adaptiveHeight : true,
    speed: content?.speed ? content.speed : 2000,
    arrows: (content?.arrows) ? content.arrows : false
  };

  return (
    <Slider {...sliderSettings} className={Styles.carousel}>
      {bannerData.map((banner: any, index: Key) =>
      (
        <div key={index}>
          
        </div>
      )
      )}
    </Slider>
  );
};

export default HomeBanner;

HomeBanner.defaultProps = {
  provider: "",
  alignment: "text-center",
  contet_over_image: true
};