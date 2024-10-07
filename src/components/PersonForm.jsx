function PersonForm({
  handleAddNewName,
  handleNewName,
  handleNewPhone,
  newName,
  newPhone,
}) {
  return (
    <form onSubmit={handleAddNewName}>
      <div>
        name: <input value={newName} onChange={handleNewName} />
      </div>
      <div>
        phone:{" "}
        <input value={newPhone} type="number" onChange={handleNewPhone} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
}

export default PersonForm;
