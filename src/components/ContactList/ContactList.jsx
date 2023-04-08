import PropTypes from 'prop-types';
import ContactItem from '../ContactItem/ContactItem';
import { List, Button, ListItem } from './ContactList.styled';
const ContactList = ({ contacts, deleteContact }) => {
  return (
    <List>
      {contacts.map(contact => (
        <ListItem key={contact.id}>
          <ContactItem contacts={contact} />
          <Button onClick={() => deleteContact(contact.id)}>Delete</Button>
        </ListItem>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ContactList;
