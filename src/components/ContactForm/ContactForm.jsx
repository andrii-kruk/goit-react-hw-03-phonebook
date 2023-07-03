import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import css from './ContactForm.module.css';
const { contact_form, label, submit_button, input } = css;

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  inputNameId = nanoid();
  inputNumberId = nanoid();

  handleInputChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };
  handleSubmitForm = event => {
    event.preventDefault();

    this.props.addContact({ id: nanoid(), ...this.state });

    this.handleResetForm();
  };

  handleResetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={contact_form} onSubmit={this.handleSubmitForm}>
        <label htmlFor="name" className={label} id={this.inputNameId}>
          Name:
        </label>
        <input
          id={this.inputNameId}
          type="text"
          name="name"
          className={input}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={this.handleInputChange}
          required
        />

        <label htmlFor="phone" className={label} id={this.inputNumberId}>
          Phone Number:
        </label>
        <input
          type="tel"
          id={this.inputNumberId}
          name="number"
          className={input}
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={this.handleInputChange}
          required
        />

        <button type="submit" className={submit_button}>
          Submit
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default ContactForm;
