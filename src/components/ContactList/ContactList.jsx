import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import ContactListItem from './ContactListItem/ContactListItem';

import css from './ContactList.module.css';
const { contact_list_container, contact_list } = css;

class ContactList extends Component {
  render() {
    const { contacts, removeContact } = this.props;

    return (
      <div className={contact_list_container}>
        <ul className={contact_list}>
          {contacts.map(({ name, number }, index) => {
            return (
              <ContactListItem
                key={nanoid()}
                name={name}
                number={number}
                removeContact={removeContact}
                index={index}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  removeContact: PropTypes.func.isRequired,
};

export default ContactList;
