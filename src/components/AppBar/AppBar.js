// import { NavLink } from 'react-router-dom';
// import styled from 'styled-components';
import css from './AppBar.module.css';
import { RegisterLogin } from '../RegisterLogin/RegisterLogin';
import { UserLogined } from '../UserLogined/UserLogined';

// const StyledLink = styled(NavLink)`
//   &.active {
//     color: rgb(255, 68, 0);
//   }
// `;

const AppBar = () => {
  return (
    <header className={css.header}>
      <RegisterLogin />
      <UserLogined />
      {/* <nav className={css.nav}>
        <StyledLink to="/" className={css.navList}>
          Home
        </StyledLink>
        <StyledLink to="/movies" className={css.navList}>
          Movies
        </StyledLink>
      </nav> */}
    </header>
  );
};

export default AppBar;
