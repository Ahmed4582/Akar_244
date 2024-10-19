import logo from "../../../assets/Img/logo.png";
import facebook from "../../../assets/Svg/facebook.svg";
import linkedin from "../../../assets/Svg/linkedin.svg";
import insta from "../../../assets/Svg/insta.svg";
import twitter from "../../../assets/Svg/twitter.svg";
import { useTranslation } from "react-i18next";
import Links from "../../DCommponents/Links/Links";
import DropDownLinks from "../../DCommponents/DropDownLinks/DropDownLinks";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-blue-100 p-6 font-title dark:bg-[#191919]">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse items-center gap-y-10 text-gray-700 sm:flex-row sm:items-start sm:justify-between sm:gap-y-0">
          {/* Help and Contact Us */}
          <div className="flex flex-col items-center text-center text-[#000C1A] sm:items-start">
            <h4 className="mb-4 w-full text-center text-2xl font-bold dark:text-[#FFFFFF]">
              {t("Contact")}
            </h4>
            <a
              href="tel:+201010020030"
              className="mb-2 block text-lg font-[500] dark:text-[#003E80]"
            >
              +20 101 002 0030
            </a>
            <a
              href="mailto:Allsafe@gmail.com"
              className="block text-lg font-[500] dark:text-[#003E80]"
            >
              Allsafe@gmail.com
            </a>
          </div>
          <div className="flex flex-col items-center text-center text-[#000C1A] sm:items-start">
            <h4 className="mb-4 w-full text-2xl font-bold dark:text-[#FFFFFF]">
              {t("Help")}
            </h4>
            <a
              href="#"
              className="mb-2 block w-full text-lg font-[500] dark:text-[#003E80]"
            >
              {t("Terms")}
            </a>
            <a
              href="#"
              className="t block w-full text-lg font-[500] dark:text-[#003E80]"
            >
              {t("Team")}
            </a>
          </div>
          {/* Important Sites and Links */}
          <div className="flex flex-col items-center gap-y-4 sm:items-start">
            <h4 className="mb-4 w-full text-center text-2xl font-bold text-[#000C1A] dark:text-[#FFFFFF]">
              {t("Sites")}
            </h4>
            <div className="flex flex-col gap-2 text-center text-lg font-[500] dark:text-[#003E80] sm:flex-row sm:gap-8">
              <DropDownLinks
                hidden
                LiClassName="text-[#000C1A] dark:text-[#003E80]"
                className="flex flex-col gap-y-1"
              />
              <div className="hidden flex-col gap-y-1 sm:flex">
                <Links />
              </div>
            </div>
          </div>

          {/* Logo and Social Media */}
          <div className="flex flex-col items-center gap-y-5 text-center font-[500] text-[#000C1A] dark:text-[#FFFFFF] sm:items-start">
            <div className="flex w-full justify-center text-center">
              <img src={logo} alt="Logo" className="mb-2" />
            </div>
            <div>
              <p className="text-2xl">{t("Aqark")}</p>
              <p className="text-lg">{t("Follow")}</p>
            </div>
            <div className="flex w-full justify-center gap-5">
              <a href="#" className="text-blue-500 hover:text-blue-700">
                <img src={facebook} alt="Facebook" className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700">
                <img src={linkedin} alt="LinkedIn" className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700">
                <img src={insta} alt="Instagram" className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700">
                <img src={twitter} alt="Twitter" className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-4 border-t border-gray-300 pt-4 text-center text-gray-500 sm:text-end">
          <p className="dark:text-[#FFFFFF]">
            © 2024 - عقار 24. جميع الحقوق محفوظة, تم تصميم الموقع بواسطة
            <a href="#" className="mx-1 text-blue-500 hover:underline">
              All Safe
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
