import { NavLink } from "react-router-dom"; // استبدل Link بـ NavLink

import PropTypes from "prop-types"; // Add this import
import { useTranslation } from "react-i18next";

const Links = ({ className = "links", children, liClassName, onLinkClick }) => {
  const { t } = useTranslation();
  const currentLanguage = window.localStorage.getItem("i18nextLng");

  return (
    <div>
      <ul className={className}>
        <li className={liClassName}>
          <NavLink
            onClick={onLinkClick}
            to="/"
            className={({ isActive }) =>
              `mb-2 font-bold ${currentLanguage === "en" ? "text-[15px]" : "text-1xl"} font-title transition-all duration-300 hover:text-[#0D6EFD] ${
                isActive ? "active" : ""
              }`
            }
          >
            {t("Home")}
          </NavLink>
        </li>
        <li className={liClassName}>
          <NavLink
            onClick={onLinkClick}
            to="/news"
            className={({ isActive }) =>
              `mb-2 font-bold ${currentLanguage === "en" ? "text-[15px]" : "text-1xl"} transition-all duration-300 hover:text-[#0D6EFD] ${
                isActive ? "active" : ""
              }`
            }
          >
            {t("News")}
          </NavLink>
        </li>
        <li className={liClassName}>
          <NavLink
            onClick={onLinkClick}
            to="/tamowel"
            className={({ isActive }) =>
              `mb-2 font-bold ${currentLanguage === "en" ? "text-[15px]" : "text-1xl"} transition-all duration-300 hover:text-[#0D6EFD] ${
                isActive ? "active" : ""
              }`
            }
          >
            {t("Real Estate Financing")}
          </NavLink>
        </li>
        <li className={liClassName}>
          <NavLink
            onClick={onLinkClick}
            to="/mazadat"
            className={({ isActive }) =>
              `mb-2 font-bold ${currentLanguage === "en" ? "text-[15px]" : "text-1xl"} transition-all duration-300 hover:text-[#0D6EFD] ${
                isActive ? "active" : ""
              }`
            }
          >
            {t("Auctions")}
          </NavLink>
        </li>
        <li className={liClassName}>
          <NavLink
            onClick={onLinkClick}
            to="/law"
            className={({ isActive }) =>
              `mb-2 font-bold ${currentLanguage === "en" ? "text-[15px]" : "text-1xl"} transition-all duration-300 hover:text-[#0D6EFD] ${
                isActive ? "active" : ""
              }`
            }
          >
            {t("Real Estate Law")}
          </NavLink>
        </li>
        <li className={liClassName}>
          <NavLink
            onClick={onLinkClick}
            to="/chances"
            className={({ isActive }) =>
              `mb-2 font-bold ${currentLanguage === "en" ? "text-[15px]" : "text-1xl"} transition-all duration-300 hover:text-[#0D6EFD] ${
                isActive ? "active" : ""
              }`
            }
          >
            {t("Investment Opportunities")}
          </NavLink>
        </li>
        {children}
      </ul>
    </div>
  );
};

export default Links;

Links.propTypes = {
  // Add prop types validation
  className: PropTypes.string, // Changed from required to optional
  liClassName: PropTypes.string,
  children: PropTypes.node, // Added prop types validation for children
  onLinkClick: PropTypes.func, // Added prop types validation for onLinkClick
};
