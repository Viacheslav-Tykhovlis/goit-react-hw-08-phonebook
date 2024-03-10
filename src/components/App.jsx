import { Routes, Route } from 'react-router-dom';
import css from './App.module.css';
import AppBar from './AppBar/AppBar';
import Register from 'pages/Register/Register';
import Login from 'pages/Login/Login';
import AddContact from 'pages/AddContact/AddContact';
import Contacts from 'pages/Contacts/Contacts';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';

export function App() {
  return (
    <div className={css.mainDiv}>
      <AppBar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/addcontact"
          element={
            <PrivateRoute redirectTo="/login" component={<AddContact />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Routes>
    </div>
  );
}
