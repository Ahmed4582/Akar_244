import PropTypes from "prop-types";

export default function Title({
  mainTitle,
  subTitle,
  StyleText,
  StyleH1,
  StyleP,
}) {
  return (
    <>
      <div className={`font-title ${StyleText} `}>
        <h1 className={`${StyleH1} `}>{mainTitle}</h1>

        <p className={`${StyleP}`}>{subTitle}</p>
      </div>
    </>
  );
}
Title.propTypes = {
  mainTitle: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  StyleText: PropTypes.string,
  StyleH1: PropTypes.string.isRequired,
  StyleP: PropTypes.string.isRequired,
};
