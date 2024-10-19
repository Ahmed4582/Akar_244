import { useTranslation } from "react-i18next";
import TextWithImage from "../../components/DCommponents/textWithImage/TextWithImage";
import Title from "../../components/DCommponents/Title/Title";
import imgHero from "../../assets/Img/Group 15093 (1).png";
import Video from "../../components/Common/Video/Video";

const InfoGraphic = () => {
  const currentLanguage = window.localStorage.getItem("i18nextLng");
  const { t } = useTranslation();

  return (
    <>
      <div className="container mx-auto w-[90%] md:w-full">
        <div>
          <TextWithImage
            isImageLeft
            img={imgHero}
            Title={t("titleHeroInfo")}
            StyleH2={`leading-[88px] text-[60px] font-[600] ${currentLanguage === "ar" ? "text-right" : ""}`}
            p={
              "هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله. هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله. هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم "
            }
            StyleP="mb-4"
          />
        </div>
        <div className="mx-5 flex items-center justify-center pb-10 text-center">
          <Title
            mainTitle={t("TitleAbout")}
            StyleH1="font-[500] text-[24px] sm:text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] leading-[30px] sm:leading-[40px] md:leading-[60px] lg:leading-[65px] xl:leading-[80px]  py-5 dark:text-[#B2D7FF]"
            subTitle={t("PHeroSecNews")}
            StyleP="font-[400] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] leading-[20px] sm:leading-[30px] md:leading-[30px] lg:leading-[32px]  dark:text-[#B2D7FF] "
          />
        </div>
        <div className="pb-10">
          <Video hidden />
        </div>
      </div>
    </>
  );
};

export default InfoGraphic;
