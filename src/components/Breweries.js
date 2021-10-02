import React, { useState } from "react";
import BreweriesCategories from "./BreweriesCategories";
import Header from "./Header";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Breweries.css";

import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function Breweries() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="body">
      {showIntro ? (
        <div className="container-intro">
          <Alert show={showIntro} variant="warning" className="alert-intro">
            <Alert.Heading className="alert-intro-header">
              Are you looking for craft beer?
            </Alert.Heading>
            <p>Check out the full list of Breweries in the U.s. and pick one!</p>
            <hr />
            <div className="d-flex justify-content-center">
              <Button onClick={() => setShowIntro(false)} variant="success">
                Let's go!
              </Button>
            </div>
          </Alert>
        </div>
      ) : (
        <>
          <Header />
          <BreweriesCategories />
          <Footer />
        </>
      )}
    </div>
  );
}

export default Breweries;
