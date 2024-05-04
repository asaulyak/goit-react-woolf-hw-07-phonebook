import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { selectContactsError, selectContactsLoading } from '../redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/operations';

export const App = () => {
  const isLoading = useSelector(selectContactsLoading);
  const error = useSelector(selectContactsError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <div>
        <h1>Phonebook</h1>
        <ContactForm />

        {isLoading && !error && <b>Loading...</b>}

        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};
