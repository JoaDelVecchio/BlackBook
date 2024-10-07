function Phonebook({ persons, filter }) {
  return (
    <ul>
      {persons
        .filter((person) =>
          filter !== ""
            ? person.name.toLowerCase().includes(filter.toLowerCase())
            : true
        )
        .map((person, index) => (
          <li key={index}>
            {person.name} {person.phone}
          </li>
        ))}
    </ul>
  );
}
export default Phonebook;
