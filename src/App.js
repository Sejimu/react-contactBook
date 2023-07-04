import { useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";

function App() {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "nursultan",
      surname: "asanuulu",
      number: 555333999,
      premium: false,
    },
  ]);

  function addContact(contact) {
    setContacts([...contacts, contact]);
  }

  function deleteContact(id) {
    const newArr = contacts.filter((item) => item.id !== id);
    setContacts(newArr);
  }

  function changeStatus(id) {
    const newArr = contacts.map((item) => {
      if (item.id == id) {
        item.premium = !item.premium;
      }
      return item;
    });
    setContacts(newArr);
  }

  return (
    <div className="App">
      <h1>Contacts</h1>
      <ContactForm addContact={addContact} />
      <ContactList
        contacts={contacts}
        deleteContact={deleteContact}
        changeStatus={changeStatus}
      />
    </div>
  );
}

export default App;
