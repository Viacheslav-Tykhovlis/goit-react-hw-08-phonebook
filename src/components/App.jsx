import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './App.module.css';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Contact } from './Contact/Contact';
import { fetchContacts, addContact, deleteContact } from 'redux/operations';
import { chngFilter } from 'redux/filterSlice';
import {
  getContacts,
  getFilter,
  getIsLoading,
  getError,
} from '../redux/selectors';
import AppBar from './AppBar/AppBar';

export function App() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  const dispatch = useDispatch();

  const handleSubmit = contact => {
    if (isSaved(contact)) {
      return alert(`${contact.name} is already is contacts `);
    }
    dispatch(addContact(contact));
  };

  const isSaved = user => {
    const normalaseUser = user.name.toLowerCase();
    return contacts.find(
      contact => contact.name.toLowerCase() === normalaseUser
    );
  };

  const changeFilter = evt => {
    dispatch(chngFilter(evt.currentTarget.value));
  };

  const delContact = userId => {
    dispatch(deleteContact(userId));
  };

  const filtredContacts = () => {
    const normalaseFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalaseFilter)
    );
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.mainDiv}>
      <AppBar />
      <h2>Phonebook</h2>

      <ContactForm onSubmit={handleSubmit} />

      <h2>Contacts</h2>

      <Filter onChange={changeFilter} value={filter} />

      <ContactList>
        {isLoading && <p>Loading contacts...</p>}
        {error && <p>{error}</p>}
        <Contact contactList={filtredContacts()} onDeleteContact={delContact} />
      </ContactList>
    </div>
  );
}
