function Phonebook({ persons, filter, deletePerson, setPersons }) {
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
            <span>
              {person.name} {person.number}
            </span>
            <button
              onClick={() => {
                if (
                  window.confirm(`Are u sure u want to delete ${person.name}?`)
                ) {
                  deletePerson(person.id),
                    setPersons(
                      persons.filter((person1) => person1.id !== person.id)
                    );
                }
              }}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
}

export default Phonebook;
