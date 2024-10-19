import { useTranslation } from "react-i18next";
import Video from "../../components/Common/Video/Video";
import Title from "../../components/DCommponents/Title/Title";
import TextWithImage from "../../components/DCommponents/textWithImage/TextWithImage";
import imgHero from "../../assets/Img/Group 15093 (2).png";
import img1 from "../../assets/Img/Rectangle 15.png";
import img2 from "../../assets/Img/Rectangle 14.png";
import iconCard from "../../assets/Svg/iconProgram.svg";

const Program = () => {
  const { t } = useTranslation();
  const currentLanguage = window.localStorage.getItem("i18nextLng");

  return (
    <>
      <div className="container mx-auto w-[90%] md:w-full">
        <div>
          <TextWithImage
            img={imgHero}
            Title={t("titleHeroProgram")}
            StyleH2={`leading-[88px] text-[60px] font-[600] ${currentLanguage === "ar" ? "text-right" : ""}`}
            p={
              "هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله. هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله. هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم "
            }
            StyleP="mb-4"
          />
        </div>
        <div className="mx-5 flex items-center justify-center pb-10 text-center">
          <Title
            mainTitle={t("TitleProgram")}
            StyleH1="font-[500] text-[24px] sm:text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] leading-[30px] sm:leading-[40px] md:leading-[60px] lg:leading-[65px] xl:leading-[80px]  py-5 dark:text-[#B2D7FF]"
            subTitle={t("PHeroSecNews")}
            StyleP="font-[400] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] leading-[20px] sm:leading-[30px] md:leading-[30px] lg:leading-[32px]  dark:text-[#B2D7FF] "
          />
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
            {/* الجزء الأيسر: صورة كبيرة */}
            <div className="lg:col-span-1">
              <div className="h-full overflow-hidden rounded-lg shadow-lg">
                <img
                  src={img2}
                  alt="Main Image"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 lg:col-span-1 lg:grid-cols-1">
              <div className="h-full overflow-hidden rounded-lg shadow-lg">
                <img
                  src={img1}
                  alt="Main Image"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="h-full overflow-hidden rounded-lg shadow-lg">
                <img
                  src={img1}
                  alt="Main Image"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* الجزء الأيمن: صور أصغر مع نصوص */}
            <div className="grid grid-rows-4 gap-4 lg:col-span-2">
              <div
                className={`mx-5 flex flex-col items-center ${
                  currentLanguage === "ar" ? "text-right" : ""
                }`}
              >
                <Title
                  mainTitle={t("TitleProgram")}
                  StyleH1="font-[500] text-[24px] sm:text-[30px] md:text-[30px] lg:text-[40px] xl:text-[50px] leading-[30px] sm:leading-[40px] md:leading-[60px] lg:leading-[65px] xl:leading-[80px] dark:text-[#B2D7FF]"
                  subTitle={t("PHeroSecNews")}
                  StyleP="font-[400] text-[12px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[20px] leading-[20px] sm:leading-[30px] md:leading-[30px] lg:leading-[32px] dark:text-[#B2D7FF]"
                />
              </div>

              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className={`${
                    currentLanguage === "ar" ? "justify-end" : ""
                  } flex flex-col items-center gap-1 overflow-hidden rounded-lg bg-[#FFFFFF] shadow-sm dark:bg-[#0D0D0D] lg:flex-row`}
                >
                  <div className="w-full p-4 lg:w-1/2">
                    <h2
                      className={`${
                        currentLanguage === "ar" ? "text-right" : ""
                      } pb-2 text-xl font-bold text-[#003166] dark:text-[#003E80]`}
                    >
                      {t("TitleProgram")}
                    </h2>
                    <p
                      className={`${
                        currentLanguage === "ar" ? "text-right" : ""
                      } text-base text-gray-700 dark:text-[#FFFFFF]`}
                    >
                      هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم
                      استبداله هذا النص يتم استبداله
                    </p>
                  </div>
                  <img src={iconCard} alt="Image 1" className="mx-4" />
                </div>
              ))}
            </div>
          </div>
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

export default Program;
