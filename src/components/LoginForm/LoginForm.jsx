import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import css from './LoginForm.module.css';
import { logIn } from 'redux/operationsAuth';
import { selectIsLoggedIn } from 'redux/selectors';

export function LoginForm() {
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

  const sendUser = evt => {
    evt.preventDefault();
    dispatch(
      logIn({
        email,
        password,
      })
    );
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  if (isLoggedIn) {
    return <Navigate to="/contacts" replace />;
  }

  return (
    <form className={css.formInput} onSubmit={sendUser}>
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
        Log in
      </button>
    </form>
  );
}
