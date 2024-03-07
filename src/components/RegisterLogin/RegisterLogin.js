import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import css from './RegisterLogin.module.css';

const StyledLink = styled(NavLink)`
  &.active {
    color: rgb(255, 68, 0);
  }
`;

export const RegisterLogin = () => {
  return (
    <nav className={css.nav}>
      <StyledLink to="/register" className={css.navList}>
        Register
      </StyledLink>
      <StyledLink to="/login" className={css.navList}>
        Login
      </StyledLink>
    </nav>
  );
};
