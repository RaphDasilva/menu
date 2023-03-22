import React from 'react';
import PropTypes from 'prop-types';

const Menu = ({ items }) => (
  <div className="section-center">
    {
          items.map((item) => (
            <article className="menu-item" key={item.id}>
              <img src={item.img} alt={item.title} className="photo" />
              <div className="item-info">
                <header>
                  <h4>
                    {item.title}
                  </h4>
                  <h4 className="price">
                    $
                    {item.price}
                  </h4>
                </header>
                <p className="item-text">{item.desc}</p>
              </div>

            </article>
          ))
        }
  </div>
);

Menu.propTypes = {
  items: PropTypes.string.isRequired,
};
export default Menu;
