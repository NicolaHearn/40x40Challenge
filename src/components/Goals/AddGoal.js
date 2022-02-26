import React from 'react';
import './AddGoal.css';
import Button from '../UI/Button';
import { useState } from 'react';

const AddGoal = props => {
    const [enteredGoal, setEnteredGoal] = useState('');
    const [enteredDescription, setEnteredDescription] = useState('');

    const addGoalHandler = (event) => {
        event.preventDefault();
        if (enteredGoal.trim().length === 0 || enteredDescription.trim().length === 0) {
            return;
        }

        console.log(enteredGoal, enteredDescription);
        setEnteredGoal('');
        setEnteredDescription('');
    };

    const goalnameChangeHandler = (event) => {
        setEnteredGoal(event.target.value);
    }


    const descriptionChangeHandler = (event) => {
        setEnteredDescription(event.target.value);
    }

    return (

        <form onSubmit={addGoalHandler}>
            <label htmlFor="goalname">Goal</label>
            <input id="goalname" type="text" value={enteredGoal} onChange={goalnameChangeHandler} />
            <label htmlFor="goalDescription">Description</label>
            <input id="goalDescription" type="text" value={enteredDescription} onChange={descriptionChangeHandler} />
            <Button type="submit">Add Goal</Button>
        </form>

    )
}

export default AddGoal;