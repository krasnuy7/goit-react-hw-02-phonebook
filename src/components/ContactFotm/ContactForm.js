import React, { Component } from "react";

const ContactForm = (props) => {
  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <input
          onChange={props.handleChange}
          value={props.mainState.name}
          type="text"
          name="name"
        />
        <input
          onChange={props.handleChange}
          value={props.mainState.number}
          type="text"
          name="number"
        />
        <button type="submit">Отправить</button>
      </form>
    </>
  );
};

export default ContactForm;
