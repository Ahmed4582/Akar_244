import imgLaw from "../../assets/Img/illustration.png";
import { useTranslation } from "react-i18next";
import iconLaw from "../../assets/Svg/iconLaw.svg";
import PropTypes from "prop-types";

export default function LawSec({ isImageLeft = false }) {
  const { t } = useTranslation(); // استدعاء useTranslation

  const currentLanguage = window.localStorage.getItem("i18nextLng");

  return (
    <div className={`grid grid-cols-1 gap-4 pb-16 lg:grid-cols-2`}>
      {/* Left Side - Image and Main Content */}
      <div
        className={`rounded-lg bg-[#E0DEF7] p-6 shadow-md dark:bg-[#121212] ${
          isImageLeft ? "lg:order-first" : "lg:order-last"
        } flex flex-col justify-center`}
      >
        <h2
          className={`${
            currentLanguage === "ar" ? "text-right" : ""
          } mb-4 text-[32px] font-[700] leading-[40px] text-[#003166] dark:text-[#B2D7FF]`}
        >
          {t("TitleSecLaw")}
        </h2>
        <p
          className={`${
            currentLanguage === "ar" ? "text-right" : ""
          } mb-5 text-[20px] font-[400] leading-[28px] text-[#4D555E] dark:text-[#FFFFFF]`}
        >
          هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله هذا
          النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله
        </p>
        <img
          src={imgLaw} // Replace with your actual image
          alt="Legal"
          className="mx-auto mb-4 w-full max-w-[400px]"
        />
      </div>

      {/* Right Side - List of Items */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className={`${
              currentLanguage === "ar" ? "items-end" : ""
            } flex flex-col gap-4 rounded-lg p-4 shadow-md`}
          >
            <div
              className={`flex w-full items-center ${
                currentLanguage === "ar" ? "justify-end" : ""
              }`}
            >
              <img src={iconLaw} alt="icon" className="ml-2 h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-blue-600">
              هذا النص يتم استبداله:
            </h3>
            <p
              className={`${
                currentLanguage === "ar" ? "text-end" : ""
              } text-sm text-gray-600`}
            >
              هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله
              هذا النص يتم استبداله
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

LawSec.propTypes = {
  isImageLeft: PropTypes.bool,
};
