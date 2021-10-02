import React, { useState } from "react";
import BreweriesSubcategories from "./BreweriesSubcategories";
import "../css/BreweriesCategories.css";

const categories = [
  {
    value: "by_state",
    name: "state",
  },
  {
    value: "by_city",
    name: "city",
  },
  {
    value: "by_type",
    name: "type",
  },
  {
    value: "by_dist",
    name: "dist",
  },
];

function BreweriesCategories() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [showSelect, setShowSelect] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setName(name);
    setCategory(value);
    setShowSelect(true);
  };

  return (
    <>
      <div className="categories">
        { categories.map( el => (
          <div key={ el.name } className="category" id={ el.name }>
            <label>
              <input
                type="radio"
                value={ el.value }
                name={ el.name }
                checked={ name === el.name }
                onChange={ handleChange }
              />
              { el.name }
            </label>
          </div> ) ) }

      {/* <div className="categories">
        <div className="category" id="type">
          <label>
            <input
              type="radio"
              value="by_type"
              name="type"
              checked={name === "type"}
              onChange={handleChange}
            />
            By type
          </label>
        </div>
        <div className="category" id="state">
          <label>
            <input
              type="radio"
              name="state"
              value="by_state"
              checked={name === "state"}
              onChange={handleChange}
            />
            By state
          </label>
        </div> */}
        {/* {console.log(category)}
        {console.log(name)} */}
      </div>
      {showSelect && (
        <div className="subcategories">
          <BreweriesSubcategories name={name} category={category} />
        </div>
      )}
    </>
  );
}

export default BreweriesCategories;
