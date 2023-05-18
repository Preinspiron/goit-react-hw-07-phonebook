import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from './Phonebook.styled';
import './style.scss';

export const Contacts = ({ handleFilter, handleDelete, filter }) => {
  return (
    <Contact>
      {handleFilter(filter).map(({ name, number, id }) => (
        <li key={id}>
          <p>
            {name}: {number}
          </p>
          <button className="btn" onClick={() => handleDelete(id)}>
            delete
          </button>
        </li>
      ))}
    </Contact>
  );
};

Contacts.propTypes = {
  filter: PropTypes.string,
  handleDelete: PropTypes.func,
  handleFilter: PropTypes.func,
};
