import Hamburger from "hamburger-react";
import { useState } from "react";
import Links from "../Links/Links";

function Toggel() {
  const [isOpen, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="rounded-md" onClick={handleShow}>
        <Hamburger toggle={setOpen} />
      </button>

      {show && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-end bg-white bg-opacity-50"
          onClick={handleClose}
        >
          <div
            className="h-full w-[90%] rotate-90 transform bg-white p-4 shadow-lg transition-transform duration-300 ease-out dark:bg-[#0d0d0d] md:w-[90%]"
            onClick={(e) => e.stopPropagation()}
            style={{
              transform: show ? "translateX(0)" : "translateX(100%)",
            }}
          >
            <div className="flex items-center justify-between pb-2">
              <button
                className="text-5xl text-gray-500 hover:text-gray-700"
                onClick={handleClose}
              >
                ×
              </button>
            </div>
            <div className="mt-4">
              <Links
                className={`flex flex-col gap-4 text-end`}
                liClassName=" p-4 border rounded-xl dark:text-[#FFFFFF]"
                onLinkClick={handleClose} // Pass the handleClose function as a prop
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Toggel;
