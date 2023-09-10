export const ContactList = ({ contacts, filteredContacts, deleteContact }) => {
  return (
    <ul>
      {(filteredContacts ?? contacts).map(({ name, id, number }) => {
        return (
          <li key={id}>
            <p>
              {name}: {number}
            </p>
            <button onClick={() => deleteContact(id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};
