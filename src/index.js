import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app'

const LuckyNumber = () => Math.floor(Math.random()*(1000-1+1)+1) ;

const userObj = {
    name:"Swarna",
    luckyNumber:LuckyNumber()
};

console.log("LuckyNUmber is:", userObj.luckyNumber);
const Greeting = (props) => { 
    console.log("Typeof:" + typeof(props));
    return (<div className="container">
        <h1>Hello {props.name}</h1>          
        <h2 className="text-muted">Your lucky number is: {props.luckyNumber}</h2>
    </div>
    )
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
