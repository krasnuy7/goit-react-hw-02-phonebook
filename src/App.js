import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import UlLi from "./components/UlLi/Ulli";
import ContactForm from "./components/ContactFotm/ContactForm";
import Filter from "./components/Filter/Filter";
class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { name, number, filter } = this.state;

    /////////////////
    const find = this.state.contacts.find((user) => user.name === name);
    if (!find) {
      const obj = {
        id: uuidv4(),
        name,
        number,
        filter,
      };

      this.setState((prev) => {
        return {
          contacts: [...prev.contacts, obj],
        };
      });
    } else {
      alert("Такое имя уже есть");
    }
    /////////////////

    this.resetForm();
  };

  resetForm = () => {
    this.setState((prev) => {
      return {
        name: "",
        number: "",
      };
    });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState((prev) => {
      return { [name]: value };
    });
  };
  deleteUsers = (event) => {
    const { id } = event.target;
    const newUser = this.state.contacts.filter((user) => user.id !== id);
    this.setState((prev) => {
      return { contacts: newUser };
    });
  };

  render() {
    return (
      <>
        <ContactForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          mainState={this.state}
        />

        <ul>
          <h3>Contacts</h3>
          <Filter mainState={this.state} handleChange={this.handleChange} />
          <UlLi deleteUsers={this.deleteUsers} info={this.state} />
        </ul>
      </>
    );
  }
}

export default App;
