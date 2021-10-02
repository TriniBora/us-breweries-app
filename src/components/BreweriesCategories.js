import React, { useState } from "react";
import BreweriesSubcategories from "./BreweriesSubcategories";
import "../css/BreweriesCategories.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const categories = [
  {
    value: "by_state",
    name: "state",
    icon: "fa-solid fa-flag-usa",
  },
  {
    value: "by_city",
    name: "city",
    icon: "fa-solid fa-city",
  },
  {
    value: "by_type",
    name: "type",
    icon: "fa-solid fa-beer-mug-empty",
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
    <div className="body-container">
      <div className="categories">
        {categories.map((el) => (
          <div key={el.name} className="category" id={el.name}>
            <h3>Search by {el.name}</h3>
            <label>
              <input
                type="radio"
                value={el.value}
                name={el.name}
                checked={name === el.name}
                onChange={handleChange}
              />{" "}
              <FontAwesomeIcon className="icon" id={el.icon} icon={el.icon} />
            </label>
          </div>
        ))}
        {/* {console.log(category)}
        {console.log(name)} */}
      </div>
      {showSelect && (
        <div className="subcategories">
          <BreweriesSubcategories name={name} category={category} />
        </div>
      )}
    </div>
  );
}

export default BreweriesCategories;
