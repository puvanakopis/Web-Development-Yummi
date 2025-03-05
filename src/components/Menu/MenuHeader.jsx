import { banner } from "../../assets/assets";
import "../Menu/MenuHeader.css";
import  { useState, useEffect } from "react";
import MenuItem from "../Menu/MenuItem";

const MenuHeader = () => {
  const [category, setCategory] = useState("AllCategories");
  const [animationKey, setAnimationKey] = useState(0);

  const categoryBanners = {
    "AllCategories": banner.MenuBanner,
    "Breakfast": banner.BannerBreakfast,
    "Lunch": banner.BannerLunch,
    "Dinner": banner.BannerDinner,
    "Drinks": banner.BannerDrinks,
    "Snacks": banner.BannerSnacks,
    "Ice Cream": banner.BannerIceCream,
    "Biscuits": banner.BannerBiscuits,
  };
  

  useEffect(() => {
    setAnimationKey((prev) => prev + 1);
  }, [category]);

  return (
    <div className="MainMenu">
      <div className="MenuHeader flex">
        <div className="table w-1/5">
          <table>
            <tbody>
              {Object.keys(categoryBanners).map((categoryName, index) => (
                <tr
                  key={index}
                  onClick={() => setCategory(categoryName)}
                  className="cursor-pointer">
                  <td
                    className={`p-2 ${
                      category === categoryName ? "bg-[#ea641a66]" : "bg-transparent"
                    }`}>
                    {categoryName}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="banner w-4/5 fade-in" key={animationKey}>
          <img src={categoryBanners[category]} alt={`${category} Banner`} />
        </div>
      </div>

      <MenuItem category={category} />
    </div>
  );
};

export default MenuHeader;
