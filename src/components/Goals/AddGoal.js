import React from 'react';
import './AddGoal.css';
import Button from '../UI/Button';
import { useState } from 'react';
import Card from '../UI/Card';

const AddGoal = props => {
    const [enteredGoal, setEnteredGoal] = useState('');
    const [enteredDescription, setEnteredDescription] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const addGoalHandler = (event) => {
        event.preventDefault();
        if (enteredGoal.trim().length === 0 || enteredDescription.trim().length === 0) {
            return;
        
        };
        const goalData = {
            goalTitle: enteredGoal,
            goalDescription: enteredDescription,
            goaldate: enteredDate
        };

        console.log(goalData);
        setEnteredGoal('');
        setEnteredDescription('');
        setEnteredDate('');
    };

    const goalnameChangeHandler = (event) => {
        setEnteredGoal(event.target.value);
    }


    const descriptionChangeHandler = (event) => {
        setEnteredDescription(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    return (
        <Card className="add-goal-form">
        <form onSubmit={addGoalHandler}>
            <label htmlFor="goalname">Goal</label>
            <input id="goalname" type="text" value={enteredGoal} onChange={goalnameChangeHandler} />
            <label htmlFor="goalDescription">Description</label>
            <input id="goalDescription" type="text" value={enteredDescription} onChange={descriptionChangeHandler} />
            <label htmlFor="goalDate">Target Date</label>
            <input id="goalDate" type="date" min="2022-05-04" max="2023-05-03" value={enteredDate} onChange={dateChangeHandler}/>
            <Button type="submit">Add Goal</Button>
        </form>
        </Card>

    )
}

export default AddGoal;