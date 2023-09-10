import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { PhoneBook } from './App.styled';

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

  filteredContacts = contactToFilter => {
    this.setState(prev => ({
      filteredContacts: prev.contacts.filter(el =>
        el.name.toLowerCase().includes(contactToFilter.toLowerCase())
      ),
    }));
  };

  addContact = dataByForm => {
    const alreadyExist = this.state.contacts.find(
      el => el.name.toLowerCase() === dataByForm.name.toLowerCase()
    );
    if (alreadyExist)
      return alert(`${dataByForm.name} is already in contacts.`);

    const newContact = { id: nanoid(), ...dataByForm };

    this.setState(prev => ({
      contacts: [newContact, ...prev.contacts],
    }));
  };

  deleteContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(el => el.id !== id),
    }));
  };

  render() {
    return (
      <PhoneBook>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter filteredContacts={this.filteredContacts} />
        <ContactList
          contacts={this.state.contacts}
          filteredContacts={this.state.filteredContacts}
          deleteContact={this.deleteContact}
        />
      </PhoneBook>
    );
  }
}
