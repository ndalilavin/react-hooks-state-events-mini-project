import React from "react";

function CategoryFilter({categories, onCategorySelected}) {            

  return (
    <div className="categories">
      <h5>Category filters</h5>

      {categories.map(category => {
        return <button key={category} onClick={e => onCategorySelected(e)}>{category}</button>
      })}
    </div>
  );
}

export default CategoryFilter;
