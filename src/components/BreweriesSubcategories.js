import React, { useState, useEffect } from "react";
import BreweriesTable from "./BreweriesTable";
import '../css/BreweriesSubcategories.css'

import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

function BreweriesSubcategories({ name, category }) {
  const [selectedItem, setSelectedItem] = useState("");
  const [breweriesData, setBreweriesData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [showTable, setShowTable] = useState(false);

  const handleChange = (event) => {
    setSelectedItem(event.target.value);
    setShowTable(true);
  };

  useEffect(() => {
    fetch("https://api.openbrewerydb.org/breweries?per_page=50") //full list
      .then((response) => response.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setBreweriesData(result);
        //   console.log(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  useEffect(() => {
    fetch(
      `https://api.openbrewerydb.org/breweries?${category}=${selectedItem.toLowerCase()}`
    )//filtered list
      .then((response) => response.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setCategoryData(result);
        //   console.log(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [category, selectedItem]);

  const eliminateDuplicates = (breweriesData, category) =>
    category === "by_state"
      ? [...new Set(breweriesData.map((el) => el.state))]
      : [...new Set(breweriesData.map((el) => el.brewery_type))];

  const elNoRepeat = eliminateDuplicates(breweriesData, category);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <FloatingLabel controlId="floatingSelect" label={name}>
            <Form.Select name={name} onChange={handleChange}>
          {elNoRepeat.map((el) => (
            <option key={el} value={el}>
              {el}
            </option>
          ))}
          </Form.Select>
          </FloatingLabel>
        {/* {console.log(selectedItem)} */}
        {showTable && (
          <div className="table">
            <BreweriesTable categoryData={categoryData} />
          </div>
        )}
      </div>
    );
  }
}

export default BreweriesSubcategories;
