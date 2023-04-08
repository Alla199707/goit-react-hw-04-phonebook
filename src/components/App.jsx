import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Container, Title } from './Container/Container.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  // ++ Положить в localStorage
  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts)
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  // ++ Прочитать localStorage
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    if (contacts) {
      this.setState({ contacts: JSON.parse(contacts) });
    }
  }

  addContact = contactData => {
    const newContact = { ...contactData, id: nanoid() };
    const newName = newContact.name.toLowerCase();
    this.state.contacts.find(item => newName === item.name.toLowerCase())
      ? alert(`${newContact.name}is already in contacts.`)
      : this.setState(prevState => {
          return {
            contacts: [newContact, ...prevState.contacts],
          };
        });
  };

  filterContact = e => {
    this.setState({ filter: e.currentTarget.value.trim() });
  };

  getFilterContacts = () => {
    const { contacts, filter } = this.state;
    const filterRegister = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterRegister)
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilterContacts();
    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm addContact={this.addContact} />

        <Title>Contacts</Title>
        <Filter value={filter} onChange={this.filterContact} />
        {this.state.contacts[0] && filteredContacts[0] ? (
          <ContactList
            contacts={filteredContacts}
            deleteContact={this.deleteContact}
          />
        ) : (
          <p>There’s nothing here yet...</p>
        )}
      </Container>
    );
  }
}
