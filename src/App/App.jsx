import { Toaster } from 'react-hot-toast';
import { useState, useEffect } from 'react';
import css from './App.module.css';
import Section from '../components/Section/Section';
import AddUser from '../components/AddUser/AddUser';
import SearchBox from '../components/SearchBox/SearchBox';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';

// import css from '../App/App.module.css';
// import Section from '../components/Section/Section'


export default function App() {


  const [contacts, setContacts] = useState(initLocalStorage);
  const [searchValue, setSearchValue] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(searchValue.toLowerCase().trim()));

  function onAddId(data) {
    setContacts((prev) => [...prev, finishAddContact]);
  }

  function onChangeValue(e) {
    setSearchValue(e.target.value);
  }

  function onDeleteContact(contactId) {
    const updateContact = contacts.filter((contact) => contact.id !== contactId);
    setContacts(updateContact);
  }
 
  return (
    <>
      <Section title={"Phone Book"}>
        <Toaster/>
        <header className={css.header}>
          <SearchBox searchValue={searchValue}
             onChangeValue={onChangeValue}
          />
          <AddUser setIsVisible={setIsVisible}/>   
        </header>
        {
          isVisible && <ContactForm setIsVisible={setIsVisible}
        />
        }
       
        <ContactList array={filteredContacts}
           onDeleteContact={onDeleteContact}
        />
      </Section>
    </>
  )
}
