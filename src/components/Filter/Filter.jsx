export const Filter = ({ filteredContacts }) => {
  const handleFilter = ({ target: { value } }) => {
    filteredContacts(value);
  };

  return (
    <label>
      <p>Find contacts by name</p>
      <input type="text" name="filter" onChange={handleFilter} />
    </label>
  );
};
