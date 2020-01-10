import React from 'react'
import ReactDOM from 'react-dom'
import Note from "./Note";

const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
}

const Part = (props) => {
    return (
        <p>{props.part} {props.exercises}</p>
    )
}

const Content = (props) => {
    let parts=[];

    for(let i=0; i<props.parts.length; i++){
        parts[i]=<p>{props.parts[i].name} {props.parts[i].exercises}</p>;
    }

    return (
        parts
    )
}

const Total = (props) => {

    let initialValue = 0;

    let sum = props.parts.reduce( function(total, amount){

        return total + amount.exercises
    }, initialValue);

    return [
        <p>Total number of exercises {sum}</p>
    ]

}

const Course = (props) => {
    return (
        <div>
            <Header course={props.course.name} />
            <Content parts={props.course.parts} />
            <Total parts={props.course.parts}/>
        </div>
    )
}

export default Course