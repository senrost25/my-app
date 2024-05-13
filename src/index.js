import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
//import TodoList from './components/TodoList';
//import AppHeader from './components/AppHeader';
//import SearchBar from './components/SearchBar';
import App from './components/App';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

const sq=(a,b,...nums)=>{
    return a+nums[0];
};

const User=(user)=>{
    let {name: userName, 
        surname: userSurname, 
        age: userAge}=user;
    userName = "Peter";
    userAge=35;
    return userName+" "+userSurname+": вік " + userAge + " років";
};

let user={
    name: "John",
    surname: "Salivan",
    age: 27
};


/* const TodoList=()=>{

    const todos = ['Drink Coffee','Learn React','Build Application TodoList'];

    return (
        <ul>
            <li>{todos[2]}</li>
            <li>{todos[1]}</li>
            <li>{todos[0]}</li>
        </ul>
    )
}

const AppHeader=()=>{
    return <h1>My Todo List</h1>;
}

const SearchBar=()=>{
    return <input placeholder={'Searching'}
                  style={{fontSize: '25px'}}></input>;
}

console.log(sq(161,12,3));

const App = () =>{
    
    const isLoggedIn = true;
    const loginBox = <span>Log in please</span>
    const welcomeBox = <span>Welcome User</span>

    return(
    <>  
        {isLoggedIn ? welcomeBox : loginBox}
        <AppHeader/>
        <SearchBar/>
        <TodoList/>
    </>);
};
 */

root.render(<App/>);
