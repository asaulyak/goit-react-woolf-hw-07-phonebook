import css from './ContactListItem.module.css';

export function ContactListItem({ contact, onContactDelete }) {
  return (
    <span className={css.contact}>
      {contact.name}: {contact.phone}
      <button type="button" onClick={() => onContactDelete(contact.id)}>
        Delete
      </button>
    </span>
  );
}
