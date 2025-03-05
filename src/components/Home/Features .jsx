import { useEffect } from "react";
import "./Features.css";
import { HomeFeatures } from "../../assets/assets";

const Features = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".ScrollingAnimation");

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

    items.forEach((item) => observer.observe(item));

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <div className="Feature"> {/* ✅ Apply animation to entire section */}
      <div>
        <h1 className="MainHeading">Why Choose Our Food</h1>
      </div>
      <div className="Features flex justify-center grid place-items-center grid-cols-1 sm:grid-cols-1 xl:grid-cols-3 gap-x-25">
        <div className="Features-1 w-1/4 ScrollingAnimation">
          <div>
            <img src={HomeFeatures.HF1} alt="" />
          </div>
          <h1>Freshness</h1>
          <p>At Yummi, we create flavorful meals using the freshest ingredients, prepared daily.</p>
        </div>
        <div className="Features-1 w-1/4 ScrollingAnimation">
          <div>
            <img src={HomeFeatures.HF2} alt="" />
          </div>
          <h1>Fast Delivery</h1>
          <p>We deliver fresh meals quickly and reliably, always on time.</p>
        </div>
        <div className="Features-1 w-1/4 ScrollingAnimation">
          <div>
            <img src={HomeFeatures.HF3} alt="" />
          </div>
          <h1>Healthy Food</h1>
          <p>Enjoy healthy, fresh meals made with quality ingredients for a balanced lifestyle.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
