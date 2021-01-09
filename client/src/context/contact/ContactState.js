import React, { useReducer } from 'react';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_CONTACTS,
} from '../types';
const uuid = require('uuid');

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        type: 'professional',
        name: 'dhruv jada',
        email: 'dj@gmail.com',
        phone: '12345678',
        id: 1,
      },
      {
        type: 'professional',
        name: 'udit jada',
        email: 'uj@gmail.com',
        phone: '123456789',
        id: 2,
      },
      {
        type: 'personal',
        name: 'mrunal jada',
        email: 'mj@gmail.com',
        phone: '1234567890',
        id: 3,
      },
    ],
    current: null,
    filtered: null,
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  const addContact = (contact) => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  const setCurrent = (id) => {
    dispatch({ type: SET_CURRENT, payload: id });
  };

  const clearCurrent = (id) => {
    dispatch({ type: CLEAR_CURRENT });
  };

  const updateContact = (contact) => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };

  const filterContacts = (text) => {
    dispatch({ type: FILTER_CONTACTS, payload: text });
  };

  const clearFilter = () => {
    dispatch({ type: FILTER_CONTACTS });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContacts,
        clearFilter,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
