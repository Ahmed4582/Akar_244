// import { useEffect } from "react";
// import { useTranslation } from "react-i18next";
import "./App.css";
import Navbar from "./components/Common/Navbar/Navbar";
import Footer from "./components/Common/Footer/Footer";

import { Route, Routes } from "react-router-dom";
import AppRoutes from "./routes";

function App() {
  return (
    <div className="dark:bg-black">
      <div className="relative z-50">
        <Navbar />
      </div>

      <Routes>
        <Route path="*" element={<AppRoutes />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
