import { useState } from "react";
import { GrLanguage } from "react-icons/gr";
const LangBtn = () => {
  const currentLang = window.localStorage.getItem("i18nextLng");
  const [langStatus, setLangStatus] = useState(currentLang);
  return (
    <>
      <li
        className="flex cursor-pointer justify-center align-super text-[25px]"
        onClick={() => {
          const newLang = currentLang === "ar" ? "en" : "ar";
          window.localStorage.setItem("i18nextLng", newLang);
          setLangStatus(newLang);
          window.location.reload();
        }}
      >
        <GrLanguage />
      </li>
    </>
  );
};

export default LangBtn;
