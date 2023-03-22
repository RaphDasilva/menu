import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const Categories = ({ categories, filterItems }) => (
  <div className="btn-container">
    {categories.map((category) => (
      <button
        type="button"
        onClick={() => filterItems(category)}
        key={uuidv4()}
        className="filter-btn"
      >
        {category}
      </button>
    ))}
  </div>
);

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  filterItems: PropTypes.func.isRequired,
};

export default Categories;
