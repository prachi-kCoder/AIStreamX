// "use client";
// import { useEffect } from "react";

// const ScrollBtn = ({ targetId, children }) => {
//   const handleScroll = (e) => {
//     e.preventDefault();
//     const section = document.querySelector(targetId);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <button
//       onClick={handleScroll}
//       className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-transform"
//     >
//       {children}
//     </button>
//   );
// };

// export default ScrollBtn;
"use client";

const ScrollBtn = ({ targetId, children }) => {
  const handleScroll = (e) => {
    e.preventDefault();
    const section = document.querySelector(`#${targetId}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <button
      onClick={handleScroll}
      className="px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-transform"
    >
      {children}
    </button>
  );
};

export default ScrollBtn;
