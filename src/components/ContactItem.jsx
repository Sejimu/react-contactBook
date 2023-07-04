import React from "react";
import DeleteIcon from "../assets/delete.png";

function ContactItem({ item, deleteContact, changeStatus }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "3px",
        justifyContent: "center",
      }}
    >
      <input
        type="checkbox"
        checked={item.premium}
        onChange={(e) => {
          changeStatus(item.id);
        }}
      />
      <div className={`contacts ${item.premium ? "premium" : ""}`}>
        <h3>{item.name}</h3>
        <h3>{item.surname}</h3>
        <h3>{item.number}</h3>
      </div>
      <img
        src={DeleteIcon}
        style={{ width: "30px", height: "30px", cursor: "pointer" }}
        onClick={(e) => {
          deleteContact(item.id);
        }}
      />
    </div>
  );
}

export default ContactItem;
