import { useTranslation } from "react-i18next";
import Title from "../../components/DCommponents/Title/Title";

const Advertise = () => {
  const { t } = useTranslation();
  // const currentLanguage = window.localStorage.getItem("i18nextLng");

  return (
    <>
      <div className="container mx-auto w-[90%] md:w-full">
        <div className="mx-5 flex items-center justify-center pb-10 text-center">
          <Title
            mainTitle={t("TitleAdvertise")}
            StyleH1="font-[500] text-[24px] sm:text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] leading-[30px] sm:leading-[40px] md:leading-[60px] lg:leading-[65px] xl:leading-[80px]  py-5 dark:text-[#B2D7FF]"
            subTitle={t("PHeroSecNews")}
            StyleP="font-[400] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] leading-[20px] sm:leading-[30px] md:leading-[30px] lg:leading-[32px]  dark:text-[#B2D7FF] "
          />
        </div>
        <div className="mb-10 rounded-lg bg-[#E5F2FF] p-6 shadow-md dark:bg-[#1A1A1A]">
          <h5 className="flex items-center justify-center py-5 text-[16px] font-[400] leading-[24px] text-[#007BFF] dark:text-[#1A88FF] md:justify-end">
            {t("TitleAdvertise")}
          </h5>
          <form className="space-y-4">
            {/* الصف الأول يحتوي على مدخلين */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <input
                  type="text"
                  placeholder="نوع العقار"
                  className="w-full rounded-[16px] border bg-white p-3 placeholder-gray-400 dark:bg-[#0D0D0D]"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="الورقة الوطنية"
                  className="w-full rounded-[16px] border bg-white p-3 placeholder-gray-400 dark:bg-[#0D0D0D]"
                />
              </div>
            </div>

            {/* الصف الثاني يحتوي على أربعة مدخلات */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div>
                <input
                  type="text"
                  placeholder="رقم الجواز"
                  className="w-full rounded-[16px] border bg-white p-3 placeholder-gray-400 dark:bg-[#0D0D0D]"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="العنوان"
                  className="w-full rounded-[16px] border bg-white p-3 placeholder-gray-400 dark:bg-[#0D0D0D]"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="رقم الجواز"
                  className="w-full rounded-[16px] border bg-white p-3 placeholder-gray-400 dark:bg-[#0D0D0D]"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="نوع العقار"
                  className="w-full rounded-[16px] border bg-white p-3 placeholder-gray-400 dark:bg-[#0D0D0D]"
                />
              </div>
            </div>

            {/* زر الإرسال */}
            <div className="mt-4 flex items-center justify-center md:justify-end">
              <button
                type="submit"
                className="rounded-[16px] bg-[#007BFF] px-14 py-2 text-white transition duration-300 hover:bg-blue-700 dark:bg-[#1A88FF]"
              >
                تغيير الإعلان
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Advertise;
