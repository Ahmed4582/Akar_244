import img1 from "../../../assets/Img/Akar.jpeg";
import img2 from "../../../assets/Img/WhatsApp Image 2024-08-26 at 2.12.47 PM.jpeg";
import img3 from "../../../assets/Img/WhatsApp Image 2024-08-26 at 2.12.49 PM (1).jpeg";
import img4 from "../../../assets/Img/WhatsApp Image 2024-08-26 at 2.12.49 PM (2).jpeg";
import img5 from "../../../assets/Img/WhatsApp Image 2024-08-26 at 2.12.49 PM.jpeg";

const CardImage = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      <div className="group relative col-span-1 h-[320px] w-full rounded-[30px] transition-all duration-300 ease-in-out md:col-span-2">
        {/* Layer */}
        <div className="absolute left-0 top-0 h-full w-full rounded-[30px] bg-black opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-70">
          <p className="absolute bottom-[10px] right-[30px] text-[40px] font-medium text-white transition-opacity duration-300 ease-in-out group-hover:opacity-100">
            فلل وقصور
          </p>
        </div>
        {/* Image */}
        <img
          className="h-full w-full rounded-[30px] object-cover"
          src={img1}
          alt="..."
        />
      </div>

      {/* Repeat similar structure for other cards */}
      <div className="group relative col-span-1 h-[320px] w-full rounded-[30px] transition-all duration-300 ease-in-out">
        {/* Layer */}
        <div className="group relative col-span-1 h-[320px] w-full rounded-[30px] transition-all duration-300 ease-in-out">
          {/* Layer */}
          <div className="absolute left-0 top-0 h-full w-full rounded-[30px] bg-black opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-70">
            <p className="absolute bottom-[10px] right-[30px] text-[40px] font-medium text-white transition-opacity duration-300 ease-in-out group-hover:opacity-100">
              مكاتب
            </p>
          </div>
          {/* Image */}
          <img
            className="h-full w-full rounded-[30px] object-cover"
            src={img2}
            alt="..."
          />
        </div>
      </div>

      <div className="group relative col-span-1 h-[320px] w-full rounded-[30px] transition-all duration-300 ease-in-out">
        {/* Layer */}
        <div className="absolute left-0 top-0 h-full w-full rounded-[30px] bg-black opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-70">
          <p className="absolute bottom-[10px] right-[30px] text-[40px] font-medium text-white transition-opacity duration-300 ease-in-out group-hover:opacity-100">
            معارض
          </p>
        </div>
        {/* Image */}
        <img
          className="h-full w-full rounded-[30px] object-cover"
          src={img3}
          alt="..."
        />
      </div>

      <div className="group relative col-span-1 h-[320px] w-full rounded-[30px] transition-all duration-300 ease-in-out">
        {/* Layer */}
        <div className="absolute left-0 top-0 h-full w-full rounded-[30px] bg-black opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-70">
          <p className="absolute bottom-[10px] right-[30px] text-[40px] font-medium text-white transition-opacity duration-300 ease-in-out group-hover:opacity-100">
            شقق
          </p>
        </div>
        {/* Image */}
        <img
          className="h-full w-full rounded-[30px] object-cover"
          src={img4}
          alt="..."
        />
      </div>

      <div className="group relative col-span-1 h-[320px] w-full rounded-[30px] transition-all duration-300 ease-in-out">
        {/* Layer */}
        <div className="absolute left-0 top-0 h-full w-full rounded-[30px] bg-black opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-70">
          <p className="absolute bottom-[10px] right-[30px] text-[40px] font-medium text-white transition-opacity duration-300 ease-in-out group-hover:opacity-100">
            عمائر
          </p>
        </div>
        {/* Image */}
        <img
          className="h-full w-full rounded-[30px] object-cover"
          src={img1}
          alt="..."
        />
      </div>
      <div className="group relative col-span-1 h-[320px] w-full rounded-[30px] transition-all duration-300 ease-in-out md:col-span-2">
        {/* Layer */}
        <div className="absolute left-0 top-0 h-full w-full rounded-[30px] bg-black opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-70">
          <p className="absolute bottom-[10px] right-[30px] text-[40px] font-medium text-white transition-opacity duration-300 ease-in-out group-hover:opacity-100">
            أراضي زراعية{" "}
          </p>
        </div>
        {/* Image */}
        <img
          className="h-full w-full rounded-[30px] object-cover"
          src={img5}
          alt="..."
        />
      </div>
    </div>
  );
};

export default CardImage;
