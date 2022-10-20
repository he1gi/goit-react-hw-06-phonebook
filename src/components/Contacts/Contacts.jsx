// import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'Redux/selectors';
import { removeContacts } from '../../Redux/contactsSlice';
import { Btn, List, Item } from './Contacts.styled';

export default function Contacts() {
  const contacts = useSelector(getContacts);
  console.log(contacts);

  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const handleDeleteContact = deleteId => {
    const action = removeContacts(deleteId);
    dispatch(action);
  };

  const identicFilter = filter.toLowerCase();

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(identicFilter)
  );

  const contactsToMap = filteredContacts ? filteredContacts : contacts;

  return (
    <List>
      {contactsToMap.map(({ name, id, number }) => (
        <Item key={id}>
          <p>{name}</p>
          <p>{number}</p>
          <Btn
            type="button"
            name="delete"
            onClick={() => handleDeleteContact(id)}
          >
            Delete
          </Btn>
        </Item>
      ))}
    </List>
  );
}
