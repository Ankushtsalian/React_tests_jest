import React from "react";
// import "../Menu/images"
const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((item) => {
        const { id, title, img, desc } = item;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
