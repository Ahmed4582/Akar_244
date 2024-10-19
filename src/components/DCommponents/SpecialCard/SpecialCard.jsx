import canaba from "../../../assets/Svg/Canaba.svg";
import bad from "../../../assets/Svg/bed.svg";
import roler from "../../../assets/Svg/Rolar.svg";
import shower from "../../../assets/Svg/Shower.svg";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next"; // Import useTranslation hook

const SpecailCard = ({ children, SpecailCardPhoto }) => {
  const { t } = useTranslation(); // Use the hook to get the translation function
  const isRTL = window.localStorage.getItem("i18nextLng") === "ar"; // Determine the language direction

  return (
    <>
      <div
        className={`relative rounded-[16px] border dark:border-[#1C1C1C] dark:bg-[#0D0D0D] ${
          isRTL ? "rtl" : "ltr"
        }`}
      >
        <img
          src={SpecailCardPhoto}
          className="w-full rounded-t-[16px]"
          alt=""
        />
        <div className="flex flex-col p-4 text-start">
          <div
            className="flex items-center gap-1"
            style={{ flexDirection: isRTL ? "row-reverse" : "row" }}
          >
            <h4 className="font-[IBM Plex Sans Arabic] text-[24px] font-[700] dark:text-blue-500">
              2,350,00
            </h4>
            <span className="text-xl font-bold leading-8 text-[#010B38] opacity-60 dark:text-blue-500">
              {t("SAR")}
            </span>
          </div>
          <div
            className="flex items-start gap-2 pt-4"
            style={{ flexDirection: isRTL ? "row-reverse" : "row" }}
          >
            <img src={bad} alt="" />
            <p className="text-[16px] font-medium text-[#010B38] opacity-80 dark:text-[#C7D1FE]">
              3
            </p>
            <img src={canaba} alt="..." />
            <p className="text-[16px] font-medium text-[#010B38] opacity-80 dark:text-[#C7D1FE]">
              3
            </p>
            <img src={shower} alt="" />
            <p className="text-[16px] font-medium text-[#010B38] opacity-80 dark:text-[#C7D1FE]">
              3
            </p>
            <img src={roler} alt="" />
            <p className="text-[16px] font-medium text-[#010B38] opacity-80 dark:text-[#C7D1FE]">
              460 م2
            </p>
          </div>
          <div
            className="flex"
            style={{ flexDirection: isRTL ? "row-reverse" : "row" }}
          >
            <p className="pt-4 text-[16px] font-medium text-[#010B38] opacity-80 dark:text-[#C7D1FE]">
              {t("Street")}
            </p>
          </div>
        </div>
        <div>{children}</div>
      </div>
    </>
  );
};

SpecailCard.propTypes = {
  children: PropTypes.node, // Added prop validation for children
  SpecailCardPhoto: PropTypes.string, // Added prop validation for children
};

export default SpecailCard;
