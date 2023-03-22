import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from '../data';

const newCategorys = ['all', ...new Set(items.map((item) => item.category))];

function MainPage() {
  const [menuItems, setMenuItems] = useState(items);
  const [categorys] = useState(newCategorys);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItem = items.filter((item) => item.category === category);
    setMenuItems(newItem);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline" />
        </div>
        <Categories categorys={categorys} filterItems={filterItems} />
        <Menu menuItems={menuItems} />

      </section>
    </main>
  );
}

export default MainPage;
