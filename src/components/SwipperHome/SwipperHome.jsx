import img_1 from "../../assets/Img/amazing-aerial-shot-singapore-cityscape-with-lots-skyscrapers (1).png";
import img_2 from "../../assets/Img/amazing-aerial-shot-singapore-cityscape-with-lots-skyscrapers (1).png";
import img_3 from "../../assets/Img/amazing-aerial-shot-singapore-cityscape-with-lots-skyscrapers (1).png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import required modules
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
import { t } from "i18next";

export default function SwipperHome() {
  const currentLanguage = window.localStorage.getItem("i18nextLng");

  return (
    <div className="relative h-3/4 w-full bg-white dark:bg-black lg:w-3/4">
      <Swiper
        cssMode={true}
        navigation={false}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: true }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="h-full w-full"
      >
        <SwiperSlide>
          <img
            className="h-full w-full object-cover"
            src={img_1}
            alt="Slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-full w-full object-cover"
            src={img_2}
            alt="Slide 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-full w-full object-cover"
            src={img_3}
            alt="Slide 3"
          />
        </SwiperSlide>
      </Swiper>

      {/* Text Overlay */}
      <div
        className={`absolute top-0 z-20 flex h-full w-full items-center ${currentLanguage === "ar" ? "md:flex md:justify-center lg:left-[30pc]" : "md:flex md:justify-center lg:justify-start"}`}
      >
        <div
          className={`w-full max-w-[70%] rounded-lg bg-[#fbfdff80] p-16 opacity-80 backdrop-blur-lg dark:bg-black/75 lg:max-w-[60%] ${currentLanguage === "ar" ? "ml-4 text-right" : "mr-4 text-left"}`}
        >
          <h1 className="text-[20px] font-bold leading-tight text-[#00254D] dark:text-[#B2D7FF] sm:text-[30px] md:text-[40px] lg:text-[50px]">
            {t("TitleHomeHeroSec")}
          </h1>
          <p className="mt-4 text-[12px] leading-relaxed text-[#000C1A] dark:text-white sm:text-[14px] md:text-[16px] lg:text-[18px]">
            {t("PHeroSecNews")}
          </p>
        </div>
      </div>
    </div>
  );
}

// import React, { useEffect, useState } from 'react';
// import img_1 from '../../assets/swiper-home-one.png';
// import img_2 from '../../assets/swiper-home-two.png';
// import img_3 from '../../assets/swiper-home-three.png';

// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// // Import required modules
// import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
// import { t } from 'i18next';

// export default function MainSwiper() {

//     const savedLang = localStorage.getItem("lang") || 'en';
//     const [Lang, setLang] = useState(savedLang);

//     useEffect(() => {
//         try {
//             const parsedLang = JSON.parse(savedLang);
//             setLang(parsedLang);
//         } catch (error) {
//             console.error('Failed to parse language from localStorage', error);
//         }
//     }, [savedLang]);

//     return (
//         <div className="MainSwiper   contents lg:flex flex-col w-full  px-10 bg-white dark:bg-black">
//             <div className={flex ${Lang === 'ar' ? 'justify-end ' : 'justify-end'} relative}>
//                 <div className="w-full px-7 lg:px-4   lg:w-3/4 h-3/4">
//                     <Swiper
//                         cssMode={true}
//                         navigation={false}
//                         loop={true}
//                         autoplay={{ delay: 3000, disableOnInteraction: true }}
//                         mousewheel={true}
//                         keyboard={true}
//                         modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
//                         className="mySwiper w-full h-full"
//                     >
//                         <SwiperSlide><img className='w-full h-full object-cover' src={img_1} alt="Slide 1" /></SwiperSlide>
//                         <SwiperSlide><img className='w-full h-full object-cover' src={img_2} alt="Slide 2" /></SwiperSlide>
//                         <SwiperSlide><img className='w-full h-full object-cover' src={img_3} alt="Slide 3" /></SwiperSlide>
//                     </Swiper>
//                 </div>
//                 <div className={absolute ${Lang === 'ar' ? 'lg:right-[-200px] left-auto right-0 ' : 'lg:left-[-200px] left-0 right-auto'} lg:top-[-50px] md:top-[-60px] sm:top-[-40px] top-[-10px] w-full h-full px-7 flex items-center justify-center}>
//                     <div className="text-white text-center md:text-left p-4 w-[100%] lg-w-[70%] md:w-[70%] px-3 py-12 z-10 backdrop-blur-sm bg-white/30 dark:bg-black/30 rounded-md">
//                         <h1 className={lg:text-[60px] md:text-[50px] sm:text-[20px] text-[17px] ${Lang === 'ar' ? 'lg:text-right text-center' : 'lg:text-left text-center'} text-[#00254D] font-bold mb-5 dark:text-[#B2D7FF]}>
//                             {t('AKar 24, your ideal property')}<br />{t("One step away")}
//                         </h1>
//                         <p className={`lg:text-lg md:text-[15px] sm:text-[12px] text-[10px] text-[#000C1A] ${Lang === 'ar' ? 'lg:text-right text-center' : 'lg:text-left text-center'} dark:text-white `}>
//                             {t("This text is being replaced This text is being replaced This text is being replaced This text is being replaced This text is being replaced This text is being replaced This text is being replaced.")}
//                         </p>
//                     </div>
//                 </div>

//             </div>

//         </div>
//     );
// }
