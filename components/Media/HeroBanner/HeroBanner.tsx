import Styles from "./HeroBanner.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Key } from "react";
import Banner from "../Banner/Banner";
import { GetHeroBannerData } from "./GetHeroBannerData";

const HeroBanner = ({ content, provider, alignment, content_over_image }: any) => {
  const returndata = GetHeroBannerData(content, provider); 
  const sliderSettings = {
    slidesToShow: returndata.slideToShow,
    slidesToScroll: returndata.slideToScroll,
    dots: returndata.dots,
    infiniteScroll: returndata.infiniteScroll,
    adaptiveHeight: returndata.adaptiveHeight,
    speed: returndata.speed,
    arrows: returndata?.arrows
  };

  return (
    <Slider {...sliderSettings} className={Styles.hero + " heroBanner"}>
      {returndata?.bannerCollection ? returndata.bannerCollection.map((banner: any, index: Key) =>
      (
        <div key={index}>
          <Banner content={banner} provider={provider} />
        </div>
      )
      ) : ""}
    </Slider>
  );
};

export default HeroBanner;

HeroBanner.defaultProps = {
  provider: "",
  alignment: "text-center",
  contet_over_image: true
};