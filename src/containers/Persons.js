import React, { Component } from 'react';
import { connect } from 'react-redux';


import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionTypes from '../store/actions';

class Persons extends Component {

    personAddedHandler = () => {
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: 'Max',
            age: Math.floor( Math.random() * 40 )
        }
        return newPerson;
    }

    render () {
        return (
            <div>
                <AddPerson personAdded={(name, age) => this.props.personAddedHandler(name, age)} />
                {this.props.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.personDeletedHandler(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        persons: state.persons
    }
}

const mapDispatchToProps = dispatch => {
    return {
        personAddedHandler: (name, age) => dispatch({
            type: actionTypes.ADD_PERSON, personData: { name, age }
        }),
        personDeletedHandler: (personId) => dispatch({
            type: actionTypes.REMOVE_PERSON,
            personId
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);