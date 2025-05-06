import { faGreaterThan, faLessThan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function PaginationRTL() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; // عدد الصفحات الكلي

  const handleClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="flex justify-center mt-6" dir="rtl">
      <nav className="flex space-x-reverse space-x-2">
        <button
          onClick={() => handleClick(currentPage - 1)}
          className={`px-3 py-1 rounded-lg border ${currentPage === 1 ? 'text-gray-400 border-gray-300' : 'text-black border-gray-400 hover:bg-gray-200'}`}
          disabled={currentPage === 1}
        >
          <FontAwesomeIcon icon={faGreaterThan} />

        </button>

        {[...Array(totalPages)].map((_, index) => {
          const page = index + 1;
          return (
            <button
              key={page}
              onClick={() => handleClick(page)}
              className={`px-3 py-1 rounded-lg border ${
                currentPage === page
                  ? 'bg-orange-500 text-white border-orange-500'
                  : 'border-gray-400 hover:bg-gray-200'
              }`}
            >
              {page}
            </button>
          );
        })}

        <button
          onClick={() => handleClick(currentPage + 1)}
          className={`px-3 mx-2 py-1 rounded-lg border ${currentPage === totalPages ? 'text-gray-400 border-gray-300' : 'text-black border-gray-400 hover:bg-gray-200'}`}
          disabled={currentPage === totalPages}
        >
          <FontAwesomeIcon icon={faLessThan} />
        </button>
      </nav>
    </div>
  );
}
