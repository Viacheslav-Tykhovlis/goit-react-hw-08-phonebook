import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './ContactForm.module.css';
import {
  getContacts,
  // getFilter,
  // getIsLoading,
  // getError,
} from '../../redux/selectors';

export function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const onSubmit = contact => {
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

  const getName = evt => {
    setName(evt.target.value);
  };

  const getNumber = evt => {
    setPhone(evt.target.value);
  };

  const addContact = evt => {
    evt.preventDefault();
    onSubmit({
      name,
      phone,
    });
    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <form className={css.formInput} onSubmit={addContact}>
      <label className={css.labelName}>
        Name:
        <br />
        <input
          className={css.inputName}
          value={name}
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={getName}
        />
      </label>
      <label className={css.labelName}>
        Number:
        <br />
        <input
          className={css.inputName}
          value={phone}
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={getNumber}
        />
      </label>
      <button type="submit" className={css.btnContact}>
        Add contact
      </button>
    </form>
  );
}
