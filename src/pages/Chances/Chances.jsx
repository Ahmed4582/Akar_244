import SpecailCard from "../../components/DCommponents/SpecialCard/SpecialCard";
import Title from "../../components/DCommponents/Title/Title";
import HeroSec from "../../components/HeroSec/HeroSec";
import { useTranslation } from "react-i18next";
import SpecailCardPhoto from "../../assets/Img/pexels-binyamin-mellish-106399 1.png";

const Chances = () => {
  const { t } = useTranslation();
  const currentLanguage = window.localStorage.getItem("i18nextLng");

  return (
    <>
      <div className="container mx-auto w-[90%] md:w-full">
        <div className="pb-10">
          <HeroSec
            StyleText={
              currentLanguage === "ar" ? "justify-end" : "justify-start"
            }
            bg="bg-bgCover"
            mainTitle={t("Titlechance")}
            StyleH1={`font-[600] text-[24px] sm:text-[40px] md:text-[60px] lg:text-[60px] xl:text-[70px] leading-[30px] sm:leading-[44px] md:leading-[64px] lg:leading-[72px] xl:leading-[88px]  text-right w-full sm:w-[450px] md:w-[580px] py-5 dark:text-[#B2D7FF] ${currentLanguage === "ar" ? "text-right ml-auto mx-6" : "text-left mr-auto"} `}
            subTitle={t("PHeroSecNews")}
            StyleP={`font-[500] text-[14px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] leading-[20px] sm:leading-[28px] md:leading-[30px] lg:leading-[32px] text-right w-full mx-6 sm:w-[600px] md:w-[700px] dark:text-[#B2D7FF] ${currentLanguage === "ar" ? "text-right ml-auto" : "text-left mr-auto"} `}
          />
        </div>
        <div className="mx-5 flex items-center justify-center pb-10 text-center">
          <Title
            mainTitle={t("TitleChance")}
            StyleH1="font-[500] text-[24px] sm:text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] leading-[30px] sm:leading-[40px] md:leading-[60px] lg:leading-[65px] xl:leading-[80px]  py-5 dark:text-[#B2D7FF]"
            subTitle={t("PHeroSecNews")}
            StyleP="font-[400] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] leading-[20px] sm:leading-[30px] md:leading-[30px] lg:leading-[32px]  dark:text-[#B2D7FF]"
          />
        </div>
      </div>
      <div className="mx-auto grid w-full grid-cols-1 gap-4 p-4 sm:w-[90%] sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {[...Array(12)].map((_, index) => (
          <SpecailCard key={index} SpecailCardPhoto={SpecailCardPhoto} />
        ))}
      </div>
    </>
  );
};

export default Chances;
