import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from './Filter.module.css';
const { filter_input } = css;

class Filter extends Component {
  render() {
    const { onChange, value } = this.props;

    return (
      <input
        type="text"
        id="filter"
        name="filter"
        className={filter_input}
        placeholder="Search contacts..."
        onChange={onChange}
        value={value}
      />
    );
  }
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Filter;
