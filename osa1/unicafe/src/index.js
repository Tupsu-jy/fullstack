import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
        <h1>{props.text}</h1>
    )
}


const Obutton = (props) => {
    return (
        <button onClick={()=>props.add(props.count+1)}>{props.name}</button>
    )
}

const Stat = (props) => {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.count}</td>
        </tr>
    )
}

const Lstat = (props) => {
    return (
        <tr>
            <td>avarage</td>
            <td>{(props.good-props.bad)/(props.good+props.neutral+props.bad)}</td>
        </tr>
    )
}

const Pos = (props) => {
    return (
        <tr>
            <td>positive</td>
            <td>{((props.good)/(props.good+props.neutral+props.bad))*100}%</td>
        </tr>
    )
}

const Statkok = (props) => {
    if(props.good!==0 || props.bad!==0 || props.neutral!==0){
        return (
            <div>
                <Header text="statistivs"/>
                <table>
                    <tbody>
                        <Stat name="GOOD!!" count={props.good}/>
                        <Stat name="neutral" count={props.neutral}/>
                        <Stat name="bad... :(" count={props.bad}/>
                        <Lstat bad={props.bad} neutral={props.neutral} good={props.good}/>
                        <Pos  bad={props.bad} neutral={props.neutral} good={props.good}/>
                    </tbody>
                </table>
            </div>
        )
    }else{
        return <div><p>no feednack given</p></div>
    }
}

const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <Header text="give feedback" />
            <Obutton name="GOOD!!" count={good} add={setGood}/>
            <Obutton name="neutral" count={neutral} add={setNeutral}/>
            <Obutton name="bad... :(" count={bad} add={setBad}/>
            <Statkok bad={bad} neutral={neutral} good={good}/>
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)