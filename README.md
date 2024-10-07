# Phonebook Application

This is a simple React phonebook application that allows users to add contacts with names and phone numbers, filter the list of contacts, and check for duplicate entries.

## Features

- **Add Contacts**: Users can add new contacts to the phonebook by entering a name and phone number.
- **Filter Contacts**: Users can filter the contacts by entering a search term. The filter is case-insensitive and searches for the sequence anywhere in the contact's name.
- **Duplicate Check**: The application alerts the user if they try to add a contact that already exists in the phonebook.

## Components

The app is broken down into the following components:

### 1. `App`

- The main component that holds the state and manages the logic for adding contacts, filtering, and checking for duplicates.

### 2. `Filter`

- A component responsible for displaying the input field that filters the list of contacts based on the name.

### 3. `PersonForm`

- A form component that allows users to input the name and phone number to add a new contact.

### 4. `Phonebook`

- A component that displays the list of contacts, filtered by the search term if applicable.

## State Management

The application uses the following pieces of state:

- `persons`: An array of contact objects, each containing a `name` and `phone` number.
- `newName`: The current value of the name input field.
- `newPhone`: The current value of the phone number input field.
- `filter`: The current value of the filter input field, used to filter the list of contacts.

## Functions

- **`isRepeated()`**: Checks if the entered name is already in the `persons` list and prevents duplicates.
- **`handleNewName(e)`**: Updates the `newName` state as the user types in the input field for names.
- **`handleNewPhone(e)`**: Updates the `newPhone` state as the user types in the input field for phone numbers.
- **`handleFilter(e)`**: Updates the `filter` state as the user types in the filter input field.
- **`handleAddNewName(e)`**: Handles the form submission, adding a new contact to the `persons` array, while checking for duplicates.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/phonebook-app.git
