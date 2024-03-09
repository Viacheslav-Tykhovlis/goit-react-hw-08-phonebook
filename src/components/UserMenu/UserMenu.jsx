import css from './UserMenu.module.css';

export const UserMenu = () => {
  return (
    <div className={css.userMenu}>
      <p className={css.userEmail}>Email User</p>
      <button type="submit">Log Out</button>
    </div>
  );
};
