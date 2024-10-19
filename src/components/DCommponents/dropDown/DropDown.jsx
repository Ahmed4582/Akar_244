import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import DropDownLinks from "../DropDownLinks/DropDownLinks";
import { NavLink, useLocation } from "react-router-dom";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation(); // استدعاء useTranslation
  const currentLanguage = window.localStorage.getItem("i18nextLng");
  const location = useLocation();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <div className="relative inline-block font-title text-xl">
      <button
        onClick={toggleDropdown}
        className="flex items-center rounded-full border border-blue-500 px-4 py-2 text-blue-500 hover:bg-blue-500 hover:text-white focus:outline-none"
      >
        <span>{t("More")}</span>
        <svg
          className={`ml-1 h-4 w-4 transform transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      {isOpen ? (
        <>
          <DropDownLinks
            LiClassName={`block px-4 py-2 text-[#000C1A] hover:bg-[#E6F2FF] dark:text-[#FFFFFF] dark:hover:bg-[#FFFFFF] dark:hover:text-[#000C1A]`}
            className={`absolute left-0 z-50 mt-3 w-48 gap-2 rounded border border-gray-900 bg-white p-[16px] shadow-lg dark:bg-[#0d0d0d] ${currentLanguage === "en" ? "text-[16px]" : ""} `}
          >
            <NavLink
              to="/Infographics"
              className="block px-4 py-2 text-[#000C1A] hover:bg-[#E6F2FF] dark:text-[#FFFFFF] dark:hover:bg-[#FFFFFF] dark:hover:text-[#000C1A]"
            >
              {t("Infographics")}
            </NavLink>
          </DropDownLinks>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default DropdownMenu;
