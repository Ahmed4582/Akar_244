import { useState } from "react";
import SpecailCard from "../../components/DCommponents/SpecialCard/SpecialCard";
import Title from "../../components/DCommponents/Title/Title";
import HeroSec from "../../components/HeroSec/HeroSec";
import { useTranslation } from "react-i18next";
import SpecailCardPhoto from "../../assets/Svg/SpecailCard.svg";
// import img

const Mazadat = () => {
  const currentLanguage = window.localStorage.getItem("i18nextLng");
  const { t } = useTranslation();
  const [filter, setFilter] = useState("الكل"); // Default filter
  const statuses = ["جاري", "منتهي", "قادم", "الكل"];

  const cards = [
    { id: 1, status: "جاري", content: "شراء" },
    { id: 2, status: "جاري", content: "شراء" },
    { id: 3, status: "جاري", content: "شراء" },
    { id: 4, status: "جاري", content: "شراء" },
    { id: 5, status: "منتهي", content: "منتهي" },
    { id: 6, status: "منتهي", content: "منتهي" },
    { id: 7, status: "منتهي", content: "منتهي" },
    { id: 8, status: "منتهي", content: "منتهي" },
    { id: 10, status: "قادم", content: "قادم" },
    { id: 11, status: "قادم", content: "قادم" },
    { id: 12, status: "قادم", content: "قادم" },
    { id: 13, status: "قادم", content: "قادم" },
    // يمكنك إضافة المزيد من الكروت هنا
  ];

  const filteredCards = cards.filter(
    (card) => filter === "الكل" || card.status === filter,
  );

  return (
    <>
      <div className="container mx-auto px-5">
        <div className="pb-10">
          <HeroSec
            StyleText={
              currentLanguage === "ar" ? "justify-end" : "justify-start"
            }
            bg="bg-bgCover"
            mainTitle={t("H1HeroSecMazadat")}
            StyleH1={`font-[600] mx-8 ${currentLanguage === "ar" ? "text-right ml-auto" : "text-left mr-auto"} text-[24px] sm:text-[40px] md:text-[60px] lg:text-[70px] xl:text-[80px] leading-[30px] sm:leading-[44px] md:leading-[64px] lg:leading-[72px] xl:leading-[88px]  w-full sm:w-[450px] md:w-[580px] py-5 dark:text-[#B2D7FF]`}
            subTitle={t("PHeroSecNews")}
            StyleP={`${currentLanguage === "ar" ? "text-right ml-auto" : "text-left mr-auto"} mx-8 font-[500] text-[14px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] leading-[20px] sm:leading-[28px] md:leading-[30px] lg:leading-[32px]  w-full sm:w-[600px] md:w-[700px] dark:text-[#B2D7FF]`}
          />
        </div>
        <div className="mx-5 flex items-center justify-center pb-10 text-center">
          <Title
            mainTitle={t("TitleMazadat")}
            StyleH1="font-[500] text-[24px] sm:text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] leading-[30px] sm:leading-[40px] md:leading-[60px] lg:leading-[65px] xl:leading-[80px]  py-5 dark:text-[#B2D7FF]"
            subTitle={t("PHeroSecNews")}
            StyleP="font-[400] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] leading-[20px] sm:leading-[30px] md:leading-[30px] lg:leading-[32px]  dark:text-[#B2D7FF]"
          />
        </div>
        <div className="mx-auto mb-6 flex flex-wrap justify-center gap-4 rounded-lg bg-[#F0EFFB] p-4 dark:bg-[#171717] md:w-[50%]">
          {statuses.map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`${
                filter === status
                  ? "rounded-[8px] bg-white font-bold text-blue-500 dark:bg-black"
                  : "font-bold text-[#4D555E]"
              } px-4 py-2 transition-colors duration-300 ease-in-out`}
            >
              {status}
            </button>
          ))}
        </div>

        <div className="mx-auto grid w-full grid-cols-1 gap-4 pb-10 sm:w-[90%] sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredCards.map((card) => (
            <SpecailCard key={card.id} SpecailCardPhoto={SpecailCardPhoto}>
              <div className="absolute right-0 top-0 m-4 rounded-[8px] bg-[#FFFFFF] px-4 py-1 text-[12px] font-medium dark:bg-[#0D0D0D] dark:text-[#C7D1FE]">
                <p>{card.content}</p>
              </div>
              <div className="absolute right-[17%] top-0 m-4 mr-9 rounded-[8px] bg-[#FFFFFF] px-4 py-1 text-[12px] font-medium dark:bg-[#0D0D0D] dark:text-[#C7D1FE]">
                <p> قبل 8 ساعات</p>
              </div>
              <div className="absolute left-[-15px] top-[56%] w-[79px]">
                <div className="inline-block rounded-lg bg-blue-500 px-3 py-1 text-sm font-bold text-white">
                  <span className="dark:text-[#0D0D0D]">{card.status}✨ </span>
                </div>
                <div className="absolute bottom-[-5px] left-[2px] h-0 w-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-blue-500"></div>
              </div>
            </SpecailCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default Mazadat;
