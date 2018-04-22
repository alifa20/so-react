import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

const Place = ({ index, name, handleDelete }) => {
  return (
    <tr key={index}>
      <td>{name}</td>
      <td>
        <Button onClick={e => handleDelete(name, e)}>Delete</Button>
      </td>
    </tr>
  );
};

Place.propTypes = {
  name: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default Place;
