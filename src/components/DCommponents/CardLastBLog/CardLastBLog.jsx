import PropTypes from "prop-types";

export default function CardLastBLog({
  title,
  date,
  description,
  imageSrc,
  altText,

  isImageOnLeft,
  flexClass,
  widthImg,
  widthText,
}) {
  return (
    <div
      className={`flex ${flexClass} my-3 overflow-hidden rounded-lg bg-white shadow-lg`}
    >
      {isImageOnLeft && (
        <div className={` ${widthImg}`}>
          <img
            src={imageSrc}
            alt={altText}
            className="h-full w-full object-cover"
          />
        </div>
      )}
      <div className={`flex flex-col justify-between p-4 ${widthText} `}>
        <div>
          <p className="mb-2 text-sm font-medium text-purple-700">{date}</p>
          <h3 className="mb-4 text-[21px] font-semibold text-gray-800">
            {title}
          </h3>
          <p className="mb-6 text-gray-600">{description}</p>
        </div>
      </div>
      {!isImageOnLeft && (
        <div className={`w-full ${widthImg}`}>
          <img
            src={imageSrc}
            alt={altText}
            className="h-full w-full object-cover"
          />
        </div>
      )}
    </div>
  );
}

CardLastBLog.propTypes = {
  isImageOnLeft: PropTypes.bool,
  title: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
  imageSrc: PropTypes.string,
  altText: PropTypes.string,
  flexClass: PropTypes.string,
  widthText: PropTypes.string,
  widthImg: PropTypes.string,
};
