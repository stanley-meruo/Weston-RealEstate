import { useState, useEffect } from "react";
import { LuArrowUpToLine } from "react-icons/lu";


const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-4 right-4">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-2 bg-white text-gray-700 border rounded-full shadow-md drop-shadow-md shadow-gray-500 hover:bg-gray-500 hover:text-white transition duration-300 sm:p-3"
        >
          <LuArrowUpToLine className="w-5 h-5 sm:w-7 sm:h-7" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
