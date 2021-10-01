import React from "react";
import '../css/BreweriesTable.css'

import Table from "react-bootstrap/Table";

function Brewerie({ item }) {
  return (
    <tbody>
      <tr>
        <td>{item.name}</td>
        <td>{item.brewery_type}</td>
        <td>{item.state}</td>
        <td>{item.city}</td>
        <td>
          <a href={item.website_url} target="_blank" rel="noreferrer">
            {item.website_url ? "Web Site" : "Nothing to show..."}
          </a>
        </td>
      </tr>
    </tbody>
  );
}

function BreweriesTable({ categoryData }) {
  return (
      <Table striped bordered hover variant="dark" responsive="sm">
    <thead>
        <tr>
          <th>Name</th>
          <th>Brewerie Type</th>
          <th>State</th>
          <th>City</th>
          <th>Web site</th>
        </tr>
      </thead>
      {categoryData.map((item) => (
        <Brewerie key={item.id} item={item} />
      ))}
      </Table>
  );
}

export default BreweriesTable;
