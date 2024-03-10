import css from './AppBar.module.css';
import { RegisterLogin } from '../RegisterLogin/RegisterLogin';
import { UserLogined } from '../UserLogined/UserLogined';
import { selectIsLoggedIn } from 'redux/selectors';
import { useSelector } from 'react-redux';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      {isLoggedIn ? <UserLogined /> : <RegisterLogin />}
    </header>
  );
};

export default AppBar;
