import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import img1 from "../../assets/projects/1.jpg"
import img2 from "../../assets/projects/2.jpg"
import img3 from "../../assets/projects/3.jpg"
import img4 from "../../assets/projects/4.jpg"
import img5 from "../../assets/projects/5.jpg"
import img6 from "../../assets/projects/6.jpg"
import img7 from "../../assets/projects/7.jpg"
import img8 from "../../assets/projects/8.jpg"
import img9 from "../../assets/projects/9.jpg"
import img10 from "../../assets/projects/10.jpg"
import img11 from "../../assets/projects/11.jpg"
import { useLanguage } from "../../LanguageContext";
import "./Carousel.css"

const images = [
    {
        website: 'https://www.behance.net/gallery/140501917/Monofun',
        stack:   'MONO(NFT) - Web3, React',
        image:    img1
    },
    {
        website: 'https://exzo.network/',
        stack:   'EXZO - Dapp',
        image:    img2
    },
    {
        website: 'https://leebet.io/',
        stack:   'LEEBET - Web3',
        image:    img3
    },
    {
        website: 'https://coinzix.com/',
        stack:   'CoinZix - Web3, React',
        image:    img4
    },
    {
        website: 'https://unitedcoin.org/',
        stack:   'UnitedCoin - Web3, React',
        image:    img5
    },
    {
        website: 'https://kidikools.com/',
        stack:   'KiddiKools - Next',
        image:    img6
    },
    {
        website: 'https://thehope.fm/',
        stack:   'The Hope - React Native',
        image:    img7
    },
    {
        website: 'https://www.aninebing.com/',
        stack:   'Aninebing - Next',
        image:    img8
    },
    {
        website: 'https://sensay.io/',
        stack:   'SENSAY - React Native',
        image:    img9
    },
    {
        website: 'https://www.ef.com/wwen/',
        stack:   'ET - React',
        image:    img10
    },
    {
        website: 'https://www.worldtravel.com/',
        stack:   'WorldTravel - PHP',
        image:    img11
    },
];

const Carousel = () => {
  const {t} = useLanguage();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show 4 images at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // prevArrow: <button className="slick-prev"/>, // Custom previous arrow
    // nextArrow: <button className="slick-next"/>, // Custom next arrow
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // Show 3 images on smaller screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // Show 2 images on mobile
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // Show 1 image on very small screens
        },
      },
    ],
  };

  return (
    <div style={{ width: "100%", margin: "auto" }}>
        <Slider {...settings}>
            {images.map((src, index) => (
            <div key={index} style={{ padding: "10px" }}>
                <img src={src.image} alt={`Slide ${index + 1}`} style={{ width: "100%", borderRadius: "12px" ,padding: "10px", opacity: 1}} />
                <span style={{padding: "10px", color: "white"}}>
                    {src.stack}
                </span>
                <Link to = {src.website} target="_blank" style={{color: "green", paddingLeft: "30px"}}>
                    {t('visit_site')}
                </Link>
            </div>
            ))}
        </Slider>
    </div>
  );
};

export default Carousel;
