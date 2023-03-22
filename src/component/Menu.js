import React from 'react';
import PropTypes from 'prop-types';

const Menu = ({ menuItems }) => (
  <div className="section-center">
    {
          menuItems.map((item) => (
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
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      desc: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default Menu;
