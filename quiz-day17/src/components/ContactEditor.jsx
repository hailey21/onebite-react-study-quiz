import './ContactEditor.css';
import { useState, useRef, memo, useContext } from 'react';
import { ContactDispatchContext } from '../App';

function ContactEditor() {
  // const nameRef = useRef();
  // const emailRef = useRef();
  const { onCreate } = useContext(ContactDispatchContext);

  const [contact, setContact] = useState({
    name: '',
    email: '',
  });

  const onChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const onAdd = () => {
    if (contact.name === '' || contact.email === '') {
      return;
    }

    onCreate(contact);
    setContact({
      name: '',
      email: '',
    });
  };
  return (
    <div className="ContactEditor">
      <div className="title">Add Contact</div>
      <div className="input_wrapper">
        <input className="name" name="name" value={contact.name} placeholder="이름 ..." onChange={onChange} />
        <input
          className="contact"
          name="email"
          value={contact.email}
          placeholder="연락처(이메일) ..."
          onChange={onChange}
        />
      </div>
      <button onClick={onAdd}>Add</button>
    </div>
  );
}

export default memo(ContactEditor);
