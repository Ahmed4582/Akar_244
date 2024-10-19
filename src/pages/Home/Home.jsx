import { useTranslation } from "react-i18next";
import Title from "../../components/DCommponents/Title/Title";
import SwipperHome from "../../components/SwipperHome/SwipperHome";
import Video from "../../components/Common/Video/Video";
import iconCard from "../../assets/Svg/icon.svg";
import Card from "../../components/DCommponents/Card/Card";
import imgCard from "../../assets/Img/Frame 1701.png";
import CardImage from "../../components/DCommponents/CardImage/CardImage";

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="container mx-auto w-[90%] md:w-full">
        <div className="pb-10">
          <SwipperHome />
        </div>
        <div className="flex items-center justify-center pb-10 text-center">
          <Title
            mainTitle={t("TitleHome")}
            StyleH1="font-[500] text-[24px] sm:text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] leading-[30px] sm:leading-[40px] md:leading-[60px] lg:leading-[65px] xl:leading-[80px]  py-5 dark:text-[#B2D7FF]"
            subTitle={t("PHeroSecNews")}
            StyleP="font-[400] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] leading-[20px] sm:leading-[30px] md:leading-[30px] lg:leading-[32px]  dark:text-[#B2D7FF]"
          />
        </div>
        <div className="pb-10">
          <Video />
        </div>
      </div>
      <div className="bg-[#e5f2ff] dark:bg-[#1A1A1A]">
        <div className="container mx-auto w-[90%] md:w-full">
          <div className="mx-5 flex items-center justify-center pb-10 text-center">
            <Title
              mainTitle={t("TitleServise")}
              StyleH1="font-[500] text-[24px] sm:text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] leading-[30px] sm:leading-[40px] md:leading-[60px] lg:leading-[65px] xl:leading-[80px]  py-5 dark:text-[#B2D7FF]"
              subTitle={t("PHeroSecNews")}
              StyleP="font-[400] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] leading-[20px] sm:leading-[30px] md:leading-[30px] lg:leading-[32px]  dark:text-[#B2D7FF]"
            />
          </div>
          <div className="mx-auto grid w-full grid-cols-1 gap-4 p-4 sm:w-[90%] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[...Array(4)].map((_, index) => (
              <Card
                classImg={"w-1/3 mx-auto mt-5"}
                key={index}
                img={iconCard}
                title={t("TitleCardHome")}
                p={t("PHeroSecNews")}
                none={"hidden"}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto w-[90%] md:w-full">
        <div className="mx-5 flex items-center justify-center pb-10 text-center">
          <Title
            mainTitle={t("TitleProvided")}
            StyleH1="font-[500] text-[24px] sm:text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] leading-[30px] sm:leading-[40px] md:leading-[60px] lg:leading-[65px] xl:leading-[80px]  py-5 dark:text-[#B2D7FF]"
            subTitle={t("PHeroSecNews")}
            StyleP="font-[400] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] leading-[20px] sm:leading-[30px] md:leading-[30px] lg:leading-[32px]  dark:text-[#B2D7FF]"
          />
        </div>
        <div>
          <CardImage />
        </div>
        <div className="mx-5 flex items-center justify-center pb-10 text-center">
          <Title
            mainTitle={t("TitleBlog")}
            StyleH1="font-[500] text-[24px] sm:text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] leading-[30px] sm:leading-[40px] md:leading-[60px] lg:leading-[65px] xl:leading-[80px]  py-5 dark:text-[#B2D7FF]"
            subTitle={t("PHeroSecNews")}
            StyleP="font-[400] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] leading-[20px] sm:leading-[30px] md:leading-[30px] lg:leading-[32px]  dark:text-[#B2D7FF]"
          />
        </div>
        <div className="m mx-auto mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[...Array(4)].map((_, index) => (
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

export default Home;
