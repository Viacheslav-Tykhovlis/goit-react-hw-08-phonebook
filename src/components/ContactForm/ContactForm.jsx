import { useState } from 'react';
import css from './ContactForm.module.css';

export function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

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
