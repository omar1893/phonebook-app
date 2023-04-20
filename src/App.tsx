import React, { useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import { addContact, editContact, deleteContact } from "./redux/reducer";
import { useDispatch } from "react-redux";
import { Contact } from "./types";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [editing, setEditing] = useState(false);
  const [editId, setEditId] = useState<number | undefined>(0);

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editing) {
      dispatch(
        editContact({
          id: editId,
          firstName,
          lastName,
          phoneNumber,
        })
      );
      setEditing(false);
    } else {
      dispatch(
        addContact({
          id: Date.now(),
          firstName,
          lastName,
          phoneNumber,
        })
      );
    }
    setFirstName('');
    setLastName('');
    setPhoneNumber('');
  };

  const handleEdit = (contact: Contact) => {
    setFirstName(contact.firstName);
    setLastName(contact.lastName);
    setPhoneNumber(contact.phoneNumber);
    setEditing(true);
    setEditId(contact?.id);
  };

  const handleDelete = (id: number | undefined) => {
    if(id) {
      dispatch(deleteContact(id));
    }
  };

  return (
    <div className="App">
      <ContactForm
        data={{ firstName, lastName, phoneNumber }}
        setters={{ setFirstName, setLastName, setPhoneNumber }}
        handleSubmit={handleSubmit}
        editing={editing}
      />
      <ContactList
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
