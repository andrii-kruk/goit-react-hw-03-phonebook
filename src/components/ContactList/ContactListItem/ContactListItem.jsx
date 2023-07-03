import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from './ContactListItem.module.css';
const { contact_item, contact_info, remove_button } = css;

class ContactListItem extends Component {
  onRemoveBtnClick = () => {
    this.props.removeContact(this.props.index);
  };

  render() {
    const { name, number } = this.props;
    return (
      <li className={contact_item}>
        <p className={contact_info}>
          {name}: {number}
        </p>
        <button
          type="button"
          className={remove_button}
          aria-label="Remove contact"
          onClick={this.onRemoveBtnClick}
        >
          Remove
        </button>
      </li>
    );
  }
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  removeContact: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default ContactListItem;
