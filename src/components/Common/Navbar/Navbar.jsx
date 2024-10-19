import "./style.css";
import logo from "../../../assets/Img/logo.png";
import DropDown from "../../DCommponents/dropDown/DropDown";
import Links from "../../DCommponents/Links/Links";
import LangBtn from "../../DCommponents/LangBtn/LangBtn";
import Toggel from "../../DCommponents/Toggel/Toggel";

export default function Navbar() {
  const currentLanguage = window.localStorage.getItem("i18nextLng");

  return (
    <>
      <nav className="hidden border-b-[1px] border-[#eeeeee33] py-3 font-title lg:flex lg:justify-center">
        <div className="container flex flex-row-reverse items-center justify-between pl-4 pr-4">
          <div className="logo flex items-center space-x-4">
            <img src={logo} alt="Logo" />
          </div>
          <nav className="hidden py-10 lg:flex lg:justify-center">
            <div className="container flex flex-wrap items-center justify-center">
              <Links
                className={`flex items-center justify-center text-[18px] font-[400] leading-[30px] dark:text-[#FFFFFF] ${currentLanguage === "en" ? "gap-3" : "flex-row-reverse gap-6 space-x-6"} `}
              ></Links>
            </div>
          </nav>

          <div className="me-6 flex flex-shrink-0 items-center gap-5 text-[10px]">
            <DropDown />
            <LangBtn />
          </div>
        </div>
      </nav>

      <nav className="block p-4 text-lg font-normal text-gray-600 lg:hidden">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="logo flex items-center space-x-6 rtl:space-x-reverse">
              <img src={logo} alt="Logo" />
            </div>
          </div>

          <div className="mx-auto me-6 flex flex-shrink-0 text-[10px]">
            <DropDown />
          </div>
          <div className="pe-3">
            <LangBtn />
          </div>

          <div className="block lg:hidden">
            <Toggel />
          </div>
        </div>
      </nav>
    </>
  );
}
