import { useState, useRef, useEffect } from "react";
import "../Menu/MenuItem.css";
import { FaStar } from "react-icons/fa";
import { mainMenu } from "../../assets/assets";
import { ViewContext } from "../../components/context/Context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const MenuItem = ({ category }) => {
  const navigate = useNavigate();
  const { addItem } = useContext(ViewContext);
  const menuRef = useRef(null);

  const handleOrderNow = (item) => {
    addItem(item);
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/ItemDetails");
  };

  // Filter menu items based on category
  const filteredItems = mainMenu.filter((item) => 
    category === "AllCategories" || item.ItemCategory === category
  );

  // Pagination setup
  const itemsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
      menuRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  
  useEffect(() => {
    const items = document.querySelectorAll(".itemsList");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animation = "fadeIn 0.6s ease-out forwards";
          } else {
            entry.target.style.animation = "none";
          }
        });
      },
      { threshold: 0.5 }
    );

    items.forEach((item) => observer.observe(item));

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, [currentItems]); 

  return (
    <div ref={menuRef}>
      <div className="MenuItem place-items-center grid  gap-y-10">
        {currentItems.map((item) => (
          <div key={item.id} className="itemsList">
            <img src={item.Img} alt={item.Name} />
            <div className="itemsDesc grid grid-row-2">
              <div className="flex">
                <div className="name w-3/4">{item.Name}</div>
                <div className="rate w-1/4 flex">
                  <FaStar color="gold" style={{ marginRight: "5px" }} />
                  {item.Rate}
                </div>
              </div>
              <div className="flex">
                <div className="price w-3/5">Rs {item.Price}.00</div>
                <button
                  className="order w-2/5 bg-orange-500 text-white p-2 rounded cursor-pointer"
                  onClick={() => handleOrderNow(item)}
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="pagination flex justify-center mt-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="disabled:opacity-50 bg-[#ea641a33] px-3 py-1 mx-1 rounded"
          >
            Prev
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`p-2 mx-1 rounded ${
                currentPage === index + 1 ? "bg-[#EA641A] text-white" : "bg-[#ea641a33]"
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="disabled:opacity-50 bg-[#ea641a33] px-3 py-1 mx-1 rounded"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default MenuItem;
