import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import Phonebook from "./components/Phonebook";
import PersonForm from "./components/PersonForm";
import personsService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  useEffect(() => {
    personsService.getAll().then((data) => setPersons(data));
  }, []);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filter, setFilter] = useState("");

  const isNameRepeated = () => {
    const repeatedPerson = persons.find(
      (person) => person.name.toLowerCase() == newName.toLowerCase()
    );
    if (repeatedPerson) {
      if (
        window.confirm(
          "Already on the list, u want to replace the phone number?"
        )
      ) {
        personsService
          .update(repeatedPerson.id, {
            ...repeatedPerson,
            number: newPhone,
          })
          .then(() => {
            setPersons(
              persons.map((person) =>
                person.id !== repeatedPerson.id
                  ? person
                  : { ...repeatedPerson, number: newPhone }
              )
            );
          });
      }
    }
    return repeatedPerson;
  };

  const handleNewName = (e) => {
    e.preventDefault();
    setNewName(e.target.value);
  };

  const handleNewPhone = (e) => {
    e.preventDefault();
    setNewPhone(e.target.value);
  };

  const handleFilter = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
  };

  const handleAddNewName = (e) => {
    e.preventDefault();
    if (!isNameRepeated()) {
      const newPersons = [
        ...persons,
        { name: newName, number: newPhone, id: persons.length + 1 + "" },
      ];
      personsService.create({
        name: newName,
        number: newPhone,
        id: persons.length + 1 + "",
      });
      setPersons(newPersons);
    }
    setNewName("");
    setNewPhone("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilter={handleFilter} />
      <PersonForm
        handleAddNewName={handleAddNewName}
        handleNewName={handleNewName}
        handleNewPhone={handleNewPhone}
        newName={newName}
        newPhone={newPhone}
      />
      <h2>Numbers</h2>
      <Phonebook
        persons={persons}
        setPersons={setPersons}
        filter={filter}
        deletePerson={personsService.deletePerson}
      />
    </div>
  );
};

export default App;
