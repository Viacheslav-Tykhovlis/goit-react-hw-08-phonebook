import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import css from './RegisterForm.module.css';
import { register } from 'redux/operationsAuth';
import { selectIsLoggedIn } from 'redux/selectors';

export function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const dispatch = useDispatch();

  const getEmail = evt => {
    setEmail(evt.target.value);
  };

  const getPassword = evt => {
    setPassword(evt.target.value);
  };

  const getName = evt => {
    setName(evt.target.value);
  };

  const sendUser = evt => {
    evt.preventDefault();
    dispatch(
      register({
        name,
        email,
        password,
      })
    );
    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  if (isLoggedIn) {
    return <Navigate to="/addcontact" replace />;
  }

  return (
    <form className={css.formInput} onSubmit={sendUser}>
      <label className={css.labelEmail}>
        Name:
        <br />
        <input
          className={css.inputEmail}
          value={name}
          type="text"
          name="name"
          placeholder="Input your name"
          required
          onChange={getName}
        />
      </label>
      <label className={css.labelEmail}>
        Email:
        <br />
        <input
          className={css.inputEmail}
          value={email}
          type="email"
          name="email"
          placeholder="Input your email"
          required
          onChange={getEmail}
        />
      </label>
      <label className={css.labelEmail}>
        Password:
        <br />
        <input
          className={css.inputEmail}
          value={password}
          type="text"
          name="password"
          placeholder="Input your password"
          required
          onChange={getPassword}
        />
      </label>
      <button type="submit" className={css.btnUser}>
        Register
      </button>
    </form>
  );
}
