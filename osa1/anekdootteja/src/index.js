import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Viisaus = (props) => {
    //let ad=Math.floor(Math.random()*6)
    return (
        <p>{props.ane[props.selected]}</p>
    )
}

const Aania = () => {
    //let ad=Math.floor(Math.random()*6)
    return (
        <p>{edellinen} ääinä: {ary[edellinen]}</p>
    )
}

const Nappi = (props) => {

    let ran=Math.floor(Math.random()*6)
    while(props.selected==ran){
        ran=Math.floor(Math.random()*6)

    }

    //console.log("asdasdadsad")
    return (
        <button onClick={() => {props.setteri(ran)}}>böö</button>
    )

    for(let i=0; i<6; i++){
        console.log(ary[i]);
    }

}

const Aanesta = (props) => {

    return (
        <button onClick={() => {ary[props.selected]++}}>aaaaanistaa</button>
    )


}

const App = (props) => {
    const [selected, setSelected] = useState(0)

    return (
        <div>
            <Nappi setteri={setSelected} selected={selected}/>
            <Aanesta setteri={setSelected} selected={selected}/>
            <Viisaus ane={props.anecdotes} selected={selected}/>
            <Aania selected={selected}/>
        </div>
    )
}

let edellinen=999;
let ary = new Uint8Array(6);

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)
