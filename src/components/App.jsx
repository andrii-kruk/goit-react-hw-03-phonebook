import React, { Component } from 'react';

import css from './App.module.css';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { nanoid } from 'nanoid';

const { section, contacts_container, contact_list_title } = css;

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const storagedContacts = localStorage.getItem('contacts',JSON.stringify(this.state.contacts));
    const parsedContacts = JSON.parse(storagedContacts) ?? [];
    
    this.setState({ contacts: parsedContacts });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContactToList = contact => {
    if (this.state.contacts.some(user => user.name === contact.name)) {
      alert('Contact already exists');
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  removeContactFromList = index => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter((contact, i) => i !== index),
    }));
  };

  filterContacts = ({ target }) => {
    this.setState({
      filter: target.value,
    });
  };

  render() {
    const { contacts, filter } = this.state;

    const normalizedContact = filter.toLowerCase();
    const filteredContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedContact)
    );

    return (
      <section className={section}>
        <ContactForm addContact={this.addContactToList} />

        <div className={contacts_container}>
          <h3 className={contact_list_title}>Contact List</h3>
          {contacts.length === 0 ? (
            <h3 className={contact_list_title}>There are no contacts</h3>
          ) : (
            <>
              <Filter onChange={this.filterContacts} value={filter} />
              <ContactList
                contacts={filteredContacts}
                removeContact={this.removeContactFromList}
              />
            </>
          )}
        </div>
      </section>
    );
  }
}
