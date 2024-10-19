import PropTypes from "prop-types";

export default function Card({ img, title, p, classImg, history, day, none }) {
  return (
    <div className="overflow-hidden rounded-[15px] border-[1px] border-hidden bg-white shadow-lg dark:bg-[#0D0D0D]">
      {/* Image and Date Badge */}
      <div className="relative">
        <img className={` ${classImg}`} src={img} alt="Card Image" />
        <div
          className={`absolute right-5 top-[-5px] rounded-md border-t-4 bg-[#FFFFFF] p-1 text-center text-[#4D555E] dark:bg-[#0D0D0D] dark:text-[#FFFFFF] ${none}`}
        >
          <div className="text-sm font-bold">{history}</div>
          <div className="text-xs">{day}</div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 text-center">
        <h2 className="pb-2 text-center text-xl font-bold text-[##00254D] dark:text-[#B2D7FF]">
          {title}
        </h2>
        <p className="text-center text-[#4D555E] dark:text-gray-300">{p}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  img: PropTypes.string,
  classImg: PropTypes.string,
  title: PropTypes.string,
  p: PropTypes.string,
  day: PropTypes.string,
  history: PropTypes.string,
  none: PropTypes.string,
};
