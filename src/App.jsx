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

  const isRepeated = () => {
    if (persons.some((person) => person.name == newName)) {
      alert(`${newName} is already added to phonebook`);
      setNewName("");
      return true;
    }
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
    if (isRepeated()) return;
    const newPersons = [...persons, { name: newName, phone: newPhone }];
    setPersons(newPersons);
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
