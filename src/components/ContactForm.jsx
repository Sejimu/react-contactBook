import React, { useState } from "react";

function ContactForm({ addContact }) {
  const [nameInpVal, setNameInpVal] = useState("");
  const [surnameInpVal, setSurnameInpVal] = useState("");
  const [numberInpVal, setNumberInpVal] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (
          !nameInpVal.trim() ||
          !surnameInpVal.trim() ||
          !numberInpVal.trim()
        ) {
          return;
        }
        const newContact = {
          id: Date.now(),
          name: nameInpVal,
          surname: surnameInpVal,
          number: numberInpVal,
          premium: false,
        };

        addContact(newContact);

        setNameInpVal("");
        setSurnameInpVal("");
        setNumberInpVal("");
      }}
    >
      <input
        value={nameInpVal}
        onChange={(e) => {
          setNameInpVal(e.target.value);
        }}
        type="text"
      />
      <input
        value={surnameInpVal}
        onChange={(e) => {
          setSurnameInpVal(e.target.value);
        }}
        type="text"
      />
      <input
        value={numberInpVal}
        onChange={(e) => {
          setNumberInpVal(e.target.value);
        }}
        type="text"
      />
      <button>Add Contact</button>
    </form>
  );
}

export default ContactForm;
