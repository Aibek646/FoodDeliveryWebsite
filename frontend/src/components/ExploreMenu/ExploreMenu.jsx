import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  const getListMenu = (item, index) => {
    return (
      <div
        onClick={() =>
          setCategory((prev) =>
            prev === item.menu_name ? "All" : item.menu_name
          )
        }
        key={index}
        className="explore-menu-list-item"
      >
        <img
          className={category === item.menu_name ? "active" : ""}
          src={item.menu_image}
          alt=""
        />
        <p>{item.menu_name}</p>
      </div>
    );
  };

  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Choose from a diverse menu featuring a delectabel array of dishes. Our
        mission is to satisfy your cravings and elevate your dining experience,
        one deliocios meal at a time{" "}
      </p>
      <div className="explore-menu-list">{menu_list.map(getListMenu)}</div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
