import { useTranslation } from "react-i18next";
import Title from "../../components/DCommponents/Title/Title";
import TextWithImage from "../../components/DCommponents/textWithImage/TextWithImage";
import Card from "../../components/DCommponents/Card/Card";
import CardLastBLog from "../../components/DCommponents/CardLastBLog/CardLastBLog";

//
import img1 from "../../assets/Img/image 8.png";
import img2 from "../../assets/Img/image 7.png";
import imgHero from "../../assets/Img/Group 15093 (3).png";
import imgCard from "../../assets/Img/Frame 1701.png";
const Articles = () => {
  const { t } = useTranslation();
  const currentLanguage = window.localStorage.getItem("i18nextLng");
  return (
    <>
      <div className="container mx-auto w-[90%] md:w-full">
        <div>
          <TextWithImage
            isImageLeft
            img={imgHero}
            Title={t("titleHeroBlog")}
            StyleH2={`leading-[88px] text-[60px] font-[600] ${currentLanguage === "ar" ? "text-right" : ""}`}
            p={
              "هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله. هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله. هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم "
            }
            StyleP="mb-4"
          />
        </div>
        <div className="mx-5 flex items-center justify-center pb-10 text-center">
          <Title
            mainTitle={t("TitleBlog")}
            StyleH1="font-[500] text-[24px] sm:text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] leading-[30px] sm:leading-[40px] md:leading-[60px] lg:leading-[65px] xl:leading-[80px]  py-5 dark:text-[#B2D7FF]"
            subTitle={t("PHeroSecNews")}
            StyleP="font-[400] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] leading-[20px] sm:leading-[30px] md:leading-[30px] lg:leading-[32px]  dark:text-[#B2D7FF] "
          />
        </div>
        <div className="mx-auto grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="flex flex-col">
            <CardLastBLog
              isImageOnLeft
              flexClass="flex-col h-full"
              widthImg="w-full"
              widthText={`w-full ${currentLanguage === "ar" ? "text-end" : ""}`}
              imageSrc={img1}
              title="استثمار الأدوات"
              date="All Safe• 19 Jan 2022"
              description="هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص"
            />
          </div>
          <div className="grid grid-rows-2 gap-4">
            <div className="flex h-full flex-col">
              {" "}
              {/* إضافة h-full هنا أيضًا */}
              <CardLastBLog
                flexClass="flex-col md:flex-row h-full"
                widthImg="w-full md:w-1/2"
                widthText={`w-full md:w-1/2 ${currentLanguage === "ar" ? "text-end" : ""}`}
                imageSrc={img2}
                title="استثمار الأدوات"
                date="All Safe• 19 Jan 2022"
                description="هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص"
              />
            </div>
            <div className="flex h-full flex-col">
              {" "}
              {/* إضافة h-full هنا أيضًا */}
              <CardLastBLog
                flexClass="flex-col md:flex-row h-full"
                widthImg="w-full md:w-1/2"
                widthText={`w-full md:w-1/2 ${currentLanguage === "ar" ? "text-end" : ""}`}
                imageSrc={img2}
                title="استثمار الأدوات"
                date="All Safe• 19 Jan 2022"
                description="هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا النص"
              />
            </div>
          </div>
        </div>

        <div className="mx-auto grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[...Array(8)].map((_, index) => (
            <Card
              classImg={"w-full"}
              key={index}
              img={imgCard}
              title={t("TitleBlogCard")}
              p={t("PHeroSecNews")}
              none={"hidden"}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Articles;
