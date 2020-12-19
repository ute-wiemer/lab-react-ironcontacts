import React from 'react';
import './App.css';
import contacts from './contacts.json';

class App extends React.Component {

  state = {

   contactsArray: contacts.slice(0,5)

  }

  clickHandler = () => {

    let randomContact =  contacts[Math.floor(Math.random() * contacts.length)]
    console.log(randomContact)

    const newContacts = this.state.contactsArray.concat(randomContact)

    this.setState({
      contactsArray: newContacts
    })
  }

  sortHandler = () => {

    const sortedContactsArray = this.state.contactsArray.sort(function(a, b){
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
  })

    // console.log(sortedContactsArray)
    
    this.setState({
      contactsArray: sortedContactsArray
    })
  }

  deleteHandler = (id) => {

    this.setState({
      contactsArray: this.state.contactsArray.filter(contact => contact.id !== id)
    })

  }

  render() {
    const myMappingFunction = (contact) => {

      return (
        <div key={contact.id} >
          <table>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
            <tr>
              <td> <img class="image" src={contact.pictureUrl}/> </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td><button onClick={() => this.deleteHandler(contact.id)}>Delete</button></td>
            </tr>
          </table>
        </div>
      )
    }

  const myContacts = this.state.contactsArray.map(myMappingFunction)

  return(
  <div className = "App" >
  {myContacts}
  <button onClick={this.clickHandler}>Add Random Contact</button>
  <button onClick={this.sortHandler}>Sort Alphabetically</button>
     </div>
  )
}
}

export default App
