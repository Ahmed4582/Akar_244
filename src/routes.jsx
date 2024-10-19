// routes.jsx
import { Route, Routes } from "react-router-dom";
// import links navbar
import Home from "./pages/Home/Home";
import News from "./pages/News/News";
import Tamowel from "./pages/Tamowel/Tamowel";
import Mazadat from "./pages/Mazadat/Mazadat";
import Law from "./pages/Law/Law";
import Chances from "./pages/Chances/Chances";

// import links DropDown
import About from "./pages/About/About";
import Adevertise from "./pages/Advertise/Advertise";
import InfoGraphic from "./pages/InfoGraphic/InfoGraphic";
import Articles from "./pages/Articles/Articles";
import Program from "./pages/Program/Program";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Pages Links Navbar */}
      <Route path="/" element={<Home />} />
      <Route path="/news" element={<News />} />
      <Route path="/tamowel" element={<Tamowel />} />
      <Route path="/mazadat" element={<Mazadat />} />
      <Route path="/law" element={<Law />} />
      <Route path="/chances" element={<Chances />} />
      {/* Pages Links DropDown */}
      <Route path="/about" element={<About />} />
      <Route path="/advertise" element={<Adevertise />} />
      <Route path="/Infographics" element={<InfoGraphic />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/program" element={<Program />} />
    </Routes>
  );
};

export default AppRoutes;
