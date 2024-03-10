import { useDispatch, useSelector } from 'react-redux';
import css from './UserMenu.module.css';
import { logOut } from 'redux/operationsAuth';
import { selectUser } from 'redux/selectors';

export const UserMenu = () => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const logOutUser = () => {
    dispatch(logOut());
  };

  return (
    <div className={css.userMenu}>
      <p className={css.userEmail}>{user.email}</p>
      <button type="button" onClick={logOutUser}>
        Log Out
      </button>
    </div>
  );
};
