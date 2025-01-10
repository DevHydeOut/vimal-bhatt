import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/effect-creative';
import { Autoplay, FreeMode, EffectCreative } from 'swiper/modules';

import Image from 'next/image';

interface ImageCardProps {
    alttitle: string;
    imageUrl: string;
    altText: string;
    className: string;
}

const ImgSlider: React.FC<ImageCardProps> = ({ className, alttitle, imageUrl, altText }) => {
  return (
    <div className="flex justify-center items-center"> 
      <Swiper
        grabCursor={true}
        effect={'creative'}
        freeMode={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-120%', 0, -500],
          },
          next: {
            shadow: true,
            translate: ['120%', 0, -500],
          },
        }}
        modules={[Autoplay, FreeMode, EffectCreative]}
        className="mt-[10vh] w-[100vw] h-[100vh]"
      > 
        <SwiperSlide className="w-[100vw] h-[100vh]">
            <Image src={imageUrl} alt={altText} title={alttitle} className={className} layout="fill"/>
        </SwiperSlide>
        <SwiperSlide className="w-[100vw] h-[100vh]">
            <Image src={imageUrl} alt={altText} title={alttitle} className={className} layout="fill"/>
        </SwiperSlide>
        <SwiperSlide className="w-[100vw] h-[100vh]">
            <Image src={imageUrl} alt={altText} title={alttitle} className={className} layout="fill"/>
        </SwiperSlide>
      </Swiper>
      
    </div>
  );
}


export default ImgSlider;