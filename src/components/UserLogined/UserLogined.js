import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import css from './UserLogined.module.css';

const StyledLink = styled(NavLink)`
  &.active {
    color: rgb(255, 68, 0);
  }
`;

export const UserLogined = () => {
  return (
    <nav className={css.nav}>
      <StyledLink to="/addContact" className={css.navList}>
        Add new contact
      </StyledLink>
      <StyledLink to="/contacts" className={css.navList}>
        Contacts
      </StyledLink>
    </nav>
  );
};
