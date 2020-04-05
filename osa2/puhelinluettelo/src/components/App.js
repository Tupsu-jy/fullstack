import React, { useState, useEffect } from 'react'
import axios from 'axios'
import personService from '../services/persons.js'
import Notification from './Notification.js'
import '../index.css'

const Person = (props) => {
    //console.log(props.num)
    return <>
        <p>{props.name}  {props.num}  id: {props.id}</p>
        <button type="submit" onClick={props.rp} id={props.id} name={props.name}>DELETE</button>
    </>
}

const People = (props) => {
    let list = [];
    for (let i = 0; i < props.pp.length; i++) {
        list[i] = <Person rp={props.rp} key={i} name={props.pp[i].name} num={props.pp[i].number} id={props.pp[i].id} />

    }
    return list;
}

const Filter = (props) => {
    return (
        <div>
            <p>filter shown with</p>
            <input
                onChange={props.showFiltered}
            />
        </div>
    )
}


const Add = (props) => {

    return (<form onSubmit={props.addNote}>
        <div>
            name: <input
                value={props.newName}
                onChange={props.handleChange}
            />
        </div>
        <div>
            puhnum: <input
                value={props.newNum}
                onChange={props.handleChangeNum}
            />
        </div>
        <div>
            <button type="submit">add</button>
        </div>
    </form>)

}

const App = () => {
    const [persons, setPersons] = useState([])
    const [filterPersons, setfilterPersons] = useState([])
    const [errorMessage, setErrorMessage] = useState('')
    console.log("asdasdasd")
    const hook = () => {
        personService
            .getAll()
            .then(response => {
                console.log(response)
                setPersons(response.data)
            })


    }
    useEffect(hook, [])

    console.log("täällä raas")
    const [newName, setNewName] = useState('')
    const [newNum, setNewNum] = useState('')

    const Remove = (event) => {
        console.log("remove" + event.target.id)
        if (window.confirm("Delete " + event.target.name+"?")) {
            personService
                .del(event.target.id)
                .then(
                    personService
                        .getAll()
                        .then(response => {
                            setPersons(response.data)
                        })
                );
                setErrorMessage(event.target.name+" deleted")
                setTimeout(() => {
                    setErrorMessage(null)
                }, 5000)
        }

    }

    const addNote = (event) => {
        event.preventDefault()
        console.log('button clicked', event.target)
        const noteObject = {
            name: newName,
            number: newNum
        }
        let found = persons.find(e => e.name === newName)
        if (found != null) {

            if (window.confirm(found.name + " is already in book. Wanna replace old number with new?")) {
                personService
                    .update(found.id, noteObject)
                    .then(
                        personService
                            .getAll()
                            .then(response => {
                                setPersons(response.data)
                            })
                    )
                    .catch(error => {
                        setErrorMessage("This person has already been removed from server")
                        setTimeout(() => {
                            setErrorMessage(null)
                        }, 5000)                        
                    })
                    setErrorMessage(found.name+" phone number updated")
                    setTimeout(() => {
                        setErrorMessage(null)
                    }, 5000)
                }
            //console.log(e)
            //alert(`${newName} is already added to phonebook`)
        } else {
            personService
                .create(noteObject)
                .then(response => {
                    setPersons(persons.concat(response.data))
                })
                setErrorMessage(noteObject.name+"added")
                setTimeout(() => {
                    setErrorMessage(null)
                }, 5000)
        }

    }

    const handleChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }

    const handleChangeNum = (event) => {
        console.log(event.target.value)
        setNewNum(event.target.value)
    }

    let stringToCheck
    function checkName(name) {

        return name.name.includes(stringToCheck)
    }

    const showFiltered = (event) => {
        stringToCheck = event.target.value
        setfilterPersons(persons.filter(checkName, event.target.value))
    }

    return (
        <div>
            <h1>Phonebook</h1>
            <Notification message={errorMessage} />
            <Filter pp={persons} showFiltered={showFiltered} />
            <People pp={filterPersons} rp={Remove} />
            <h2>Phonebook</h2>
            <Add addNote={addNote} handleChange={handleChange} handleChangeNum={handleChangeNum} />
            <h2>Numbers</h2>
            <People pp={persons} rp={Remove} />
        </div>
    )

}

export default App