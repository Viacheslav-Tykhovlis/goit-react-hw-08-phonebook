import { useState } from 'react';
import css from './LoginForm.module.css';

export function LoginForm({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const getEmail = evt => {
    setEmail(evt.target.value);
  };

  const getPassword = evt => {
    setPassword(evt.target.value);
  };

  const sendUser = evt => {
    evt.preventDefault();
    onSubmit({
      email,
      password,
    });
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

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
