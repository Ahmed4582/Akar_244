import video from "../../../assets/Img/vedio.png";
import PropTypes from "prop-types";

const Video = ({ hidden = false }) => {
  return (
    <>
      <div className="container mx-auto">
        <img src={video} className="w-full" alt="" />
        <div
          className={`font-[IBM Plex Sans Arabic] ${hidden ? "hidden" : ""} mx-auto flex flex-wrap justify-between py-5`}
        >
          <div className="w-full text-center sm:w-1/2 md:w-1/3 lg:w-1/5">
            <p className="text-[20px] font-[700] leading-[30px] text-[#003166] md:text-[30px] md:leading-[45px] dark:text-[#003E80]">
              +1000
            </p>
            <p className="text-[16px] font-[400] leading-[24px] text-[#007BFF] md:text-[20px] md:leading-[28px] dark:text-[#1A88FF]">
              عقار تم بيعه
            </p>
          </div>
          <div className="w-full text-center sm:w-1/2 md:w-1/3 lg:w-1/5">
            <p className="text-[20px] font-[700] leading-[30px] text-[#003166] md:text-[30px] md:leading-[45px] dark:text-[#003E80]">
              +350
            </p>
            <p className="text-[16px] font-[400] leading-[24px] text-[#007BFF] md:text-[20px] md:leading-[28px] dark:text-[#1A88FF]">
              عملية تسيير
            </p>
          </div>
          <div className="w-full text-center sm:w-1/2 md:w-1/3 lg:w-1/5">
            <p className="text-[20px] font-[700] leading-[30px] text-[#003166] md:text-[30px] md:leading-[45px] dark:text-[#003E80]">
              +450
            </p>
            <p className="text-[16px] font-[400] leading-[24px] text-[#007BFF] md:text-[20px] md:leading-[28px] dark:text-[#1A88FF]">
              زبون وفيّ
            </p>
          </div>
          <div className="w-full text-center sm:w-1/2 md:w-1/3 lg:w-1/5">
            <p className="text-[20px] font-[700] leading-[30px] text-[#003166] md:text-[30px] md:leading-[45px] dark:text-[#003E80]">
              +500
            </p>
            <p className="text-[16px] font-[400] leading-[24px] text-[#007BFF] md:text-[20px] md:leading-[28px] dark:text-[#1A88FF]">
              عملية تسيير
            </p>
          </div>
          <div className="w-full text-center sm:w-1/2 md:w-1/3 lg:w-1/5">
            <p className="text-[20px] font-[700] leading-[30px] text-[#003166] md:text-[30px] md:leading-[45px] dark:text-[#003E80]">
              +500
            </p>
            <p className="text-[16px] font-[400] leading-[24px] text-[#007BFF] md:text-[20px] md:leading-[28px] dark:text-[#1A88FF]">
              عملية تسيير
            </p>
          </div>
          {/* Repeat the div above for other sections */}
        </div>
      </div>
    </>
  );
};
Video.propTypes = {
  hidden: PropTypes.bool,
};

export default Video;
