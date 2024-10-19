import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types"; // Add this import
import BtnMode from "../../BtnMode/BtnMode";

const DropDownLinks = ({
  className,
  children,
  LiClassName,
  hidden = false,
}) => {
  const { t } = useTranslation();

  return (
    <>
      <div className={className}>
        <NavLink to="/about" className={LiClassName}>
          {t("About Us")}
        </NavLink>
        <NavLink to="/advertise" className={LiClassName}>
          {t("Advertise with Us")}
        </NavLink>
        <NavLink to="/program" className={LiClassName}>
          {t("Aqar 24 Program")}
        </NavLink>
        <NavLink to="/articles" className={LiClassName}>
          {t("Articles")}
        </NavLink>
        {children}
        <div className={`${hidden ? "hidden" : ""}`}>
          <BtnMode />
        </div>
      </div>
    </>
  );
};

export default DropDownLinks;

DropDownLinks.propTypes = {
  // Add prop types validation
  className: PropTypes.string.isRequired,
  LiClassName: PropTypes.string.isRequired,
  children: PropTypes.node, // Added prop types validation for children
  hidden: PropTypes.bool, // Added prop types validation for children
};

// absolute left-0 z-10 mt-3 w-48 gap-2 rounded border border-gray-900 bg-white p-[16px] shadow-lg dark:bg-[#0d0d0d] ${currentLanguage === "en" ? "text-[16px]" : ""}
