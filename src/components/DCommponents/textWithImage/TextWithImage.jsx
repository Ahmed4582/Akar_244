import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

export default function TextWithImage({
  isImageLeft = false,
  Title,
  p,
  li,
  liA,
  img,
  StyleH2,
  StyleP,
  bg,
  hidden = false,
}) {
  const currentLanguage = window.localStorage.getItem("i18nextLng");
  const { t } = useTranslation();

  return (
    <div
      className={`${bg} flex flex-col md:flex-row ${isImageLeft ? "md:flex-row-reverse" : "md:flex-row"} my-10 p-4 font-[Almarai]`}
    >
      <div className="flex w-full justify-center p-4 md:w-1/2">
        <div>
          <img
            src={img}
            alt="choose Tebbi"
            className="h-full w-full rounded-lg object-cover"
          />
        </div>
      </div>
      <div className="flex w-full items-center justify-center p-4 md:w-1/2">
        <div className="flex flex-col justify-center">
          <h2 className={`${StyleH2} mb-4 text-[#2D3E52] dark:text-[#B2D7FF]`}>
            <span
              className={`border-b-2 border-b-[#1A88FF] text-[#2D3E52] dark:text-[#B2D7FF] ${hidden ? "" : "hidden"}`}
            >
              {t("span")}
            </span>
            {Title}
          </h2>
          {[...Array(2)].map((_, index) => (
            <p
              key={index}
              className={`${StyleP} ${currentLanguage === "ar" ? "text-right" : ""} text-xl font-bold text-[#00254D] dark:text-[#B2D7FF]`}
            >
              {p}
            </p>
          ))}
          <ul
            className={`${currentLanguage === "ar" ? "text-right" : ""} space-y-2 text-gray-600`}
          >
            {[...Array(8)].map((_, index) => (
              <li key={index}>
                <a href="#" className="text-blue-500">
                  {liA}
                </a>
                {li}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

TextWithImage.propTypes = {
  isImageLeft: PropTypes.bool,
  Title: PropTypes.string,
  p: PropTypes.string,
  li: PropTypes.string,
  liA: PropTypes.string,
  img: PropTypes.string,
  StyleH2: PropTypes.string,
  StyleP: PropTypes.string,
  bg: PropTypes.string,
  hidden: PropTypes.bool,
};
