import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Styles from './ContactFrom.module.css';
import inputId from '../../services/helpers';

export default class ContactFrom extends Component {
  state = { name: '', number: '' };

  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  reset = e => {
    e.preventDefault();
    this.props.handleSubmit(e);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={Styles.addContact} onSubmit={this.reset}>
        <label className={Styles.input} htmlFor={inputId.nameId}>
          Name
          <input
            type="text"
            value={name}
            onChange={this.handleChange}
            id={inputId.nameId}
            name="name"
            className={Styles.widthInput}
          />
        </label>
        <label className={Styles.input} htmlFor={inputId.numberId}>
          Number
          <input
            type="tel"
            value={number}
            onChange={this.handleChange}
            id={inputId.numberId}
            name="number"
            className={Styles.widthInput}
          />
        </label>
        <button type="submit" className={Styles.widthBtn}>
          Add contact
        </button>
      </form>
    );
  }
}
