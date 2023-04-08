import { useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Container, Title } from './Container/Container.styled';
import useLocalStorage from './Hook/useLocalStorage';

export const App = () => {
  const items = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
  const [contacts, setContacts] = useLocalStorage('contacts', items);
  const [filter, setFilter] = useState('');

  const addContact = (name, number) => {
    const newContact = { name, number, id: nanoid() };
    const newName = newContact.name.toLowerCase();
    return contacts.some(item => item.name.toLowerCase().includes(newName))
      ? alert(`${newContact.name}is already in contacts.`)
      : setContacts(prevState => [newContact, ...prevState]);
  };

  const getFilterContacts = () => {
    const filterRegister = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterRegister)
    );
  };

  const filterContact = e => {
    setFilter(e.currentTarget.value.trim());
  };

  const deleteContact = id => {
    setContacts(contacts.filter(el => el.id !== id));
  };
  const filterContacts = getFilterContacts();
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm addContact={addContact} />

      <Title>Contacts</Title>
      <Filter value={filter} onChange={filterContact} />
      {contacts.length && filterContacts.length ? (
        <ContactList contacts={filterContacts} deleteContact={deleteContact} />
      ) : (
        <p>There’s nothing here yet...</p>
      )}
    </Container>
  );
};
