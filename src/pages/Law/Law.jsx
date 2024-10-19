import Title from "../../components/DCommponents/Title/Title";
import HeroSec from "../../components/HeroSec/HeroSec";
import { useTranslation } from "react-i18next";
import LawSec from "../../components/LawSec/LawSec";

const Law = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="container mx-auto w-[90%] md:w-full">
        <div className="pb-10">
          <HeroSec
            StyleText={"justify-center"}
            bg="bg-bgCover"
            mainTitle={t("H1HeroSecTamoel")}
            StyleH1="font-[600] text-[24px] sm:text-[40px] md:text-[60px] lg:text-[70px] xl:text-[80px] leading-[30px] sm:leading-[44px] md:leading-[64px] lg:leading-[72px] xl:leading-[88px]   lg:w-[796px]  py-5 dark:text-[#B2D7FF]"
            subTitle={t("PHeroSecNews")}
            StyleP="font-[500] text-[14px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] leading-[20px] sm:leading-[28px] md:leading-[30px] lg:leading-[32px]    lg:w-[750px] dark:text-[#B2D7FF]"
          />
        </div>
        <div className="mx-5 flex items-center justify-center pb-10 text-center">
          <Title
            mainTitle={t("TitleLaw")}
            StyleH1="font-[500] text-[24px] sm:text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] leading-[30px] sm:leading-[40px] md:leading-[60px] lg:leading-[65px] xl:leading-[80px]  py-5 dark:text-[#B2D7FF]"
            subTitle={t("PHeroSecNews")}
            StyleP="font-[400] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] leading-[20px] sm:leading-[30px] md:leading-[30px] lg:leading-[32px]  dark:text-[#B2D7FF] "
          />
        </div>
        <LawSec />
        <LawSec isImageLeft />
        <LawSec />
        <LawSec isImageLeft />
      </div>
    </>
  );
};

export default Law;
