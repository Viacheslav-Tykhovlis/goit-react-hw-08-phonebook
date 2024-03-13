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
  const [type, setType] = useState('password');
  const [toggleIcon, setToggleIcon] = useState('img/eye-close.png');

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

  const toggleViewPassword = e => {
    if (type === 'password') {
      setType('text');
      setToggleIcon('img/eye-open.png');
    } else {
      setType('password');
      setToggleIcon('img/eye-close.png');
    }
  };

  if (isLoggedIn) {
    return <Navigate to="/addcontact" replace />;
  }

  return (
    <form className={css.formInput} onSubmit={sendUser}>
      <label className={css.labelEmail} htmlFor="input-name">
        Name:
        <br />
        <div className={css.inputBox}>
          <input
            className={css.inputEmail}
            id="input-name"
            value={name}
            type="text"
            name="name"
            placeholder="Input your name"
            required
            onChange={getName}
          />
        </div>
      </label>
      <label className={css.labelEmail} htmlFor="input-email">
        Email:
        <br />
        <div className={css.inputBox}>
          <input
            className={css.inputEmail}
            id="input-email"
            value={email}
            type="email"
            name="email"
            placeholder="Input your email"
            required
            onChange={getEmail}
          />
        </div>
      </label>
      <label className={css.labelEmail} htmlFor="input-password">
        Password:
        <br />
        <div className={css.inputBox}>
          <input
            className={css.inputEmail}
            id="input-password"
            value={password}
            type={type}
            name="password"
            placeholder="Input your password"
            required
            onChange={getPassword}
          />
          <img
            src={toggleIcon}
            alt="isPasswordOpen"
            className={css.eyeIcon}
            onClick={toggleViewPassword}
          />
        </div>
      </label>
      <button type="submit" className={css.btnUser}>
        Register
      </button>
    </form>
  );
}
