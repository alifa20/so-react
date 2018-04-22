import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

let Person = ({ index, first, last, occupation, handleDelete }) => {
  return (
    <tr key={index}>
      <td>{first + " " + last}</td>
      <td>{occupation}</td>
      <td>
        <Button onClick={e => handleDelete(first, last, e)}>Delete</Button>
      </td>
    </tr>
  );
};

Person.propTypes = {
  first: PropTypes.string.isRequired,
  last: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default Person;
