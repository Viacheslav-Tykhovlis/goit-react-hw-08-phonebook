import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './ContactForm.module.css';
import { addContact } from 'redux/operations';
import { selectContacts } from '../../redux/selectors';

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const onSubmit = evt => {
    evt.preventDefault();
    const name = evt.target.name.value;
    const number = evt.target.number.value;
    if (isSaved(name)) {
      return alert(`${name} is already is contacts `);
    }
    dispatch(addContact({ name, number }));
    reset();
  };

  const isSaved = user => {
    const normalaseUser = user.toLowerCase();
    return contacts.find(
      contact => contact.name.toLowerCase() === normalaseUser
    );
  };

  const getName = evt => {
    setName(evt.target.value);
  };

  const getNumber = evt => {
    setNumber(evt.target.value);
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={css.formInput} onSubmit={onSubmit}>
      <label className={css.labelName}>
        Name:
        <br />
        <input
          className={css.inputName}
          value={name}
          type="text"
          name="name"
          placeholder="Input name your contact"
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
          value={number}
          type="tel"
          name="number"
          placeholder="Input phone your contact"
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
