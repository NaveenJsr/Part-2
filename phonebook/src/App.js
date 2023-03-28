import { useState } from 'react'

const App = () =>
{
  const [ persons, setPersons ] = useState( [
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ] )
  const [ newName, setNewName ] = useState( '' )
  const [ newNumber, setNewNumber ] = useState( '' )
  const [ searchName, setSearchName ] = useState( '' )

  const addPerson = ( event ) =>
  {
    event.preventDefault()
    const personExists = persons.some( person => person.name === newName )
    if ( personExists )
    {
      alert( `${ newName } is already added to phonebook` )
      return
    }
    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }
    setPersons( persons.concat( newPerson ) )
    setNewName( '' )
    setNewNumber( '' )
  }

  const handleNameChange = ( event ) =>
  {
    setNewName( event.target.value )
  }

  const handleNumberChange = ( event ) =>
  {
    setNewNumber( event.target.value )
  }

  const handleSearchChange = ( event ) =>
  {
    setSearchName( event.target.value )
  }

  const filteredPersons = persons.filter( person =>
  {
    return person.name.toLowerCase().includes( searchName.toLowerCase() )
  } )

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input value={ searchName } onChange={ handleSearchChange } />
      </div>
      <h3>Add a new</h3>
      <form onSubmit={ addPerson }>
        <div>
          name: <input value={ newName } onChange={ handleNameChange } />
        </div>
        <div>
          number: <input value={ newNumber } onChange={ handleNumberChange } />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h3>Numbers</h3>
      { filteredPersons.map( person =>
        <div key={ person.id }>{ person.name } { person.number }</div>
      ) }
    </div>
  )
}

export default App
