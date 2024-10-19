import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function ModeToggle() {
  const { t } = useTranslation();
  // Initialize the darkMode state based on the value in localStorage
  const [darkMode, setDarkMode] = useState(() => {
    return window.localStorage.getItem("darkMode") === "true";
  });

  // Effect to update the body class when the component mounts
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  // Function to toggle dark mode and update localStorage
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    window.localStorage.setItem("darkMode", newDarkMode.toString());
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="block rounded px-4 py-2 text-[#000C1A] hover:bg-[#E6F2FF] dark:text-[#FFFFFF] dark:hover:bg-[#FFFFFF] dark:hover:text-[#000C1A]"
    >
      {t(`${darkMode ? "ModeLight" : "ModeNight"}`)}
    </button>
  );
}

export default ModeToggle;
