import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectContacts,
  selectFilter,
  selectIsLoading,
  selectError,
} from 'redux/selectors';
import { fetchContacts, deleteContact } from 'redux/operations';
import { chngFilter } from 'redux/filterSlice';
import { Contact } from 'components/Contact/Contact';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  const changeFilter = evt => {
    dispatch(chngFilter(evt.currentTarget.value));
  };

  const filtredContacts = () => {
    const normalaseFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalaseFilter)
    );
  };

  const delContact = userId => {
    dispatch(deleteContact(userId));
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Filter onChange={changeFilter} value={filter} />

      <h2>Contacts</h2>

      <ContactList>
        {isLoading && <p>Loading contacts...</p>}
        {error && <p>{error}</p>}
        <Contact contactList={filtredContacts()} onDeleteContact={delContact} />
      </ContactList>
    </>
  );
};

export default Contacts;
