import "./ContactEditor.css";
import { useState, useRef } from "react";

export default function ContactEditor({ onCreate }) {
  // const nameRef = useRef();
  // const emailRef = useRef();

  const [contact, setContact] = useState({
    name: "",
    email: "",
  });

  const onChangeName = (e) => {
    setContact({ ...contact, name: e.target.value });
  };

  const onChangeEmail = (e) => {
    setContact({ ...contact, email: e.target.value });
  };

  const onAdd = () => {
    if (contact.name === "" || contact.email === "") {
      return;
    }

    onCreate(contact);
    setContact({
      name: "",
      email: "",
    });
  };
  return (
    <div className="ContactEditor">
      <div className="title">Add Contact</div>
      <div className="input_wrapper">
        <input className="name" value={contact.name} placeholder="이름 ..." onChange={onChangeName} />
        <input className="contact" value={contact.email} placeholder="연락처(이메일) ..." onChange={onChangeEmail} />
      </div>
      <button onClick={onAdd}>Add</button>
    </div>
  );
}
