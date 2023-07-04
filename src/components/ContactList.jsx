import React from "react";
import ContactItem from "./ContactItem";

function ContactList({ contacts, deleteContact, changeStatus }) {
  return (
    <div>
      {contacts.map((item) => {
        return (
          <ContactItem
            key={item.id}
            item={item}
            deleteContact={deleteContact}
            changeStatus={changeStatus}
          />
        );
      })}
    </div>
  );
}

export default ContactList;
