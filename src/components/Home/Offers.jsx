import { useEffect, useRef } from "react";
import "./Offers.css";
import { Offer } from "../../assets/assets";

const Offers = () => {
  const offerSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = offerSectionRef.current?.querySelectorAll(".ScrollingAnimation");
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
<div className="Offers" ref={offerSectionRef}>
  <h1 className="MainHeading">Featured Offers and Deals</h1>
  <div className="flex flex-wrap div">
    {/* Image Section */}
    <div className="div1 w-full md:w-1/2 ScrollingAnimation">
      <img src={Offer.Offers1} alt="Offer Image" />
    </div>

    {/* Text Section */}
    <div className="div2 w-full md:w-1/2">
      <div className="div2-1 h-3/6 ScrollingAnimation">
        Buy 1 Pizza, <br /> Get 1 Free
      </div>
      <div className="div2-2 h-1/6 ScrollingAnimation">
        Hurry! Offer Ends in 2 Hours
      </div>
      <div className="div2-3 mainButton h-2/6">Browse Pizzas</div>
    </div>
  </div>
</div>


  );
};

export default Offers;