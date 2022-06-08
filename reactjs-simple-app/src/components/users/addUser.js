import React ,{useState} from 'react';
import Card from "../ui/card";
import Button from '../ui/button';
import classes from "./add-user.module.css";
const AddUser = (props) => {

    const [enteredUsername,setEnteredUsername] = useState('');
    const [enteredAge,setEnteredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        console.log(enteredUsername, enteredAge)
        setEnteredAge('');
        setEnteredUsername('');
    }

    const usernameChangteHandler = (event) =>{
        setEnteredUsername(event.target.value);
    }
    const ageChangteHandler = (event) =>{
        setEnteredAge(event.target.value);
    }

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="user" type="text" value={enteredUsername} onChange={usernameChangteHandler}></input>
                <label htmlFor="age">Age (Year)</label>
                <input id="age" type="number" onChange={ageChangteHandler}></input>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    )
};

export default AddUser;