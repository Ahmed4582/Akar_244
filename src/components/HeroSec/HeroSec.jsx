import PropTypes from "prop-types";

export default function HeroSec({
  mainTitle,
  subTitle,
  StyleText,
  StyleH1,
  StyleP,
  bg,
}) {
  return (
    <div className="relative bg-[#aac7dd] dark:bg-[#1A1A1A80]">
      {/* Background Image */}
      <div
        className={`absolute inset-0 ${bg} bg-cover bg-center opacity-50`}
      ></div>

      {/* Content */}
      <div
        className={`${StyleText} relative z-10 flex h-[300px] items-center text-center sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]`}
      >
        {/* <Title
  
        /> */}
        <div className={`font-title`}>
          <h1 className={`${StyleH1} `}>{mainTitle}</h1>

          <p className={`${StyleP}`}>{subTitle}</p>
        </div>
      </div>
    </div>
  );
}

HeroSec.propTypes = {
  mainTitle: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  StyleText: PropTypes.string,
  StyleH1: PropTypes.string.isRequired,
  StyleP: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
};
