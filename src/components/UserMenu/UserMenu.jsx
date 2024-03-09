import css from './UserMenu.module.css';
import { logOut } from 'redux/operationsAuth';

export const UserMenu = () => {
  return (
    <div className={css.userMenu}>
      <p className={css.userEmail}>Email User</p>
      <button type="submit" onSubmit={logOut()}>
        Log Out
      </button>
    </div>
  );
};
