import React, { useState } from "react";
import BreweriesSubcategories from "./BreweriesSubcategories";

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
      <div>
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
        {/* {console.log(category)}
        {console.log(name)} */}
      </div>
      {showSelect && (
        <div className="subcategories">
          <BreweriesSubcategories name={ name } category={ category}/>
        </div>
      )}
    </>
  );
}

export default BreweriesCategories;
