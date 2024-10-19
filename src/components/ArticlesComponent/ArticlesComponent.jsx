// // import PropTypes from "prop-types";
import img from "../../assets/Img/Frame 1701.png";
// const ArticleCard = () => {
//   return (
//     <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-md lg:flex-row">
//       <img
//         className="w-full object-cover lg:w-1/3"
//         src={img} // استبدل هذا برابط الصورة الفعلي
//         alt="Article"
//       />
//       <div className="flex flex-col justify-between p-4">
//         <div>
//           <p className="text-xs text-purple-500">All Safe - 19 Jan 2022</p>
//           <h2 className="text-lg font-semibold text-gray-800">
//             استثمار الأدوات
//           </h2>
//           <p className="mt-2 text-gray-600">
//             هذا النص يتم استبداله في هذه المساحة يتم استبداله هذا النص يتم
//             استبداله...
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// // ArticleCard.propTypes = {
// //   title: PropTypes.string.isRequired,
// //   date: PropTypes.string.isRequired,
// //   description: PropTypes.string.isRequired,
// //   imageSrc: PropTypes.string.isRequired,
// // };

// export default ArticleCard;

const PropertyProgram = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row lg:items-center">
        <img
          src={img} // استبدل هذا برابط الصورة الفعلي
          alt="Main Property"
          className="w-full rounded-lg object-cover lg:w-1/3"
        />
        <img
          src={img} // استبدل هذا برابط الصورة الفعلي
          alt="Main Property"
          className="w-full rounded-lg object-cover lg:w-1/3"
        />

        <div className="mt-6 flex w-full flex-col lg:ml-6 lg:mt-0">
          <h1 className="mb-4 text-right text-2xl text-blue-600">
            برنامج عقار 24:
          </h1>
          <p className="mb-6 text-right text-gray-600">
            هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم استبداله
            هذا النص يتم استبداله...
          </p>
          <div className="grid grid-cols-1 gap-6">
            <div className="flex items-center overflow-hidden rounded-lg bg-white shadow-md">
              <img
                src={img} // استبدل هذا برابط الصورة الفعلي
                alt="Sub Property"
                className="w-1/3 rounded-l-lg object-cover"
              />
              <div className="flex w-full flex-col justify-between p-4">
                <h2 className="text-right text-lg font-semibold text-gray-800">
                  برنامج عقار 24:
                </h2>
                <p className="mt-2 text-right text-gray-600">
                  هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم
                  استبداله...
                </p>
              </div>
            </div>
            <div className="flex items-center overflow-hidden rounded-lg bg-white shadow-md">
              <img
                src={img} // استبدل هذا برابط الصورة الفعلي
                alt="Sub Property"
                className="w-1/3 rounded-l-lg object-cover"
              />
              <div className="flex w-full flex-col justify-between p-4">
                <h2 className="text-right text-lg font-semibold text-gray-800">
                  برنامج عقار 24:
                </h2>
                <p className="mt-2 text-right text-gray-600">
                  هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم
                  استبداله...
                </p>
              </div>
            </div>
            <div className="flex items-center overflow-hidden rounded-lg bg-white shadow-md">
              <img
                src={img} // استبدل هذا برابط الصورة الفعلي
                alt="Sub Property"
                className="w-1/3 rounded-l-lg object-cover"
              />
              <div className="flex w-full flex-col justify-between p-4">
                <h2 className="text-right text-lg font-semibold text-gray-800">
                  برنامج عقار 24:
                </h2>
                <p className="mt-2 text-right text-gray-600">
                  هذا النص يتم استبداله هذا النص يتم استبداله هذا النص يتم
                  استبداله...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyProgram;
