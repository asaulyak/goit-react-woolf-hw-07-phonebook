import { ContactListItem } from '../ContactListItem/ContactListItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/selectors';
import { deleteContact } from '../../redux/operations';

export function ContactList() {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(selectVisibleContacts);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          <ContactListItem
            contact={contact}
            onContactDelete={handleDeleteContact}
          />
        </li>
      ))}
    </ul>
  );
}
