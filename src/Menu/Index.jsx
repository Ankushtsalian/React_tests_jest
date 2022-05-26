import React, { useState } from "react";
import Category from "./Categories";
import items from "./data";
import Menu from "./Menu";
import "./Menu.css";
const Index = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(items);

  const filterItems = (category) => {
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="menu-title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Category filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};

export default Index;
