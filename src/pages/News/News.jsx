import Card from "../../components/DCommponents/Card/Card";
import Title from "../../components/DCommponents/Title/Title";
import HeroSec from "../../components/HeroSec/HeroSec";
import { useTranslation } from "react-i18next";
// import img
import imgCard from "../../assets/Img/Rectangle 37.png";

const News = () => {
  const currentLanguage = window.localStorage.getItem("i18nextLng");

  const { t } = useTranslation();
  // const currentLanguage = window.localStorage.getItem("lang");
  return (
    <>
      <div className="container mx-auto w-[90%] md:w-full">
        <div className="pb-10">
          <HeroSec
            StyleText={
              currentLanguage === "ar" ? "justify-end" : "justify-start"
            }
            bg="bg-bgCover"
            mainTitle={t("H1HeroSecNews")}
            StyleH1={`font-[600] font-title  text-[24px] sm:text-[40px] mx-8  ${currentLanguage === "ar" ? "text-right ml-auto" : "text-left mr-auto"} md:text-[60px] lg:text-[70px] xl:text-[80px] leading-[30px] sm:leading-[44px] md:leading-[64px] lg:leading-[72px] xl:leading-[88px]  w-full  sm:w-[450px] md:w-[580px] py-5 dark:text-[#B2D7FF]`}
            subTitle={t("PHeroSecNews")}
            StyleP={`font-[500] text-[14px] sm:text-[18px] md:text-[20px] mx-8 ${currentLanguage === "ar" ? "text-right ml-auto" : "text-left mr-auto"} lg:text-[22px] xl:text-[24px] leading-[20px] sm:leading-[28px] md:leading-[30px] lg:leading-[32px]  w-full sm:w-[600px] ml-auto px-2 md:w-[700px] dark:text-[#B2D7FF]`}
          />
        </div>
        <div className="mx-5 flex items-center justify-center pb-10 text-center">
          <Title
            mainTitle={t("TitleNews")}
            StyleH1="font-[500] text-[24px]  sm:text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] leading-[30px] sm:leading-[40px] md:leading-[60px] lg:leading-[65px] xl:leading-[80px]  py-5 dark:text-[#B2D7FF]"
            subTitle={t("PHeroSecNews")}
            StyleP="font-[400] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] leading-[20px] sm:leading-[30px] md:leading-[30px] lg:leading-[32px]  dark:text-[#B2D7FF]"
          />
        </div>
        <div className="mx-5 grid grid-cols-1 gap-4 pb-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {[...Array(12)].map((_, index) => (
            <Card
              key={index}
              img={imgCard}
              classImg="w-full object-cover"
              history="23"
              day={t("day")}
              title={t("TitleCardNews")}
              p={t("PHeroSecNews")}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default News;
