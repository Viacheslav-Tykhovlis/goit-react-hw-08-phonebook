import { Routes, Route } from 'react-router-dom';
import css from './App.module.css';
import AppBar from './AppBar/AppBar';
import Register from 'pages/Register/Register';
import Login from 'pages/Login/Login';
import AddContact from 'pages/AddContact/AddContact';
import Contacts from 'pages/Contacts/Contacts';

export function App() {
  return (
    <div className={css.mainDiv}>
      <AppBar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addcontact" element={<AddContact />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      {/* <h2>Phonebook</h2> */}

      {/* <h2>Contacts</h2> */}

      {/* <Filter onChange={changeFilter} value={filter} /> */}

      {/* <ContactList>
        {isLoading && <p>Loading contacts...</p>}
        {error && <p>{error}</p>}
        <Contact contactList={filtredContacts()} onDeleteContact={delContact} />
      </ContactList> */}
    </div>
  );
}
