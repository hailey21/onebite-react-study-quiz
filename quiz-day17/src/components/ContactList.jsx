import './ContactList.css';
import ContactItem from './ContactItem';
import { useContext } from 'react';
import { ContactStateContext } from '../App';

export default function ContactList() {
  const contactList = useContext(ContactStateContext);
  return (
    <div className="ContactList">
      <div className="title">Contact List</div>
      {contactList.map((contact) => {
        return <ContactItem key={contact.id} {...contact} />;
      })}
    </div>
  );
}
