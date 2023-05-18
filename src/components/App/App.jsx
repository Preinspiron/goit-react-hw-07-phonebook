import { useSelector, useDispatch } from 'react-redux';
// import { useEffect, useState } from 'react';
import { Container } from './App.styled.js';

import Phonebook, { Filter, Contacts } from '../Phonebook';
// import { INIT } from '../Phonebook/index';
import { selectContacts, selectFilter } from '../../redux/selectors.js';
import { addCon, delCon } from '../../redux/contactsSlice.js';
import { getFilter } from '../../redux/filterSlice.js';

export const App = () => {
  const contactsRedux = useSelector(selectContacts);
  const filterSelect = useSelector(selectFilter);
  const dispatch = useDispatch();
  // let DEF_STATE = localStorage.getItem('contacts');
  // let DEF_PARSED = JSON.parse(DEF_STATE);

  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const handleChange = e => {
    const { value } = e.target;

    // setFilter(value);
    dispatch(getFilter(value));
  };

  const addContact = value => {
    if (dublicateCheck(value.name)) return alert(`${value.name} exist`);
    dispatch(addCon(value.name, value.number));
  };

  const handleDelete = id => {
    dispatch(delCon(id));
  };

  const handleFilter = query => {
    console.log(contactsRedux);
    return contactsRedux.filter(({ name }) =>
      name.toLowerCase().includes(query.toLowerCase())
    );
  };

  const dublicateCheck = name => {
    return contactsRedux.some(item => item.name === name);
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <Phonebook
        // handleFormData={handleFormData}
        addContact={addContact}
        handleChange={handleChange}
      />
      <h2>Contacts</h2>
      <Filter
        filter={filterSelect}
        handleFilter={handleFilter}
        handleChange={handleChange}
      />
      <Contacts
        filter={filterSelect}
        handleDelete={handleDelete}
        handleFilter={handleFilter}
      />
    </Container>
  );
};
