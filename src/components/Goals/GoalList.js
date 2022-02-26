import React from 'react';
import Card from '../UI/Card';
import './GoalList.css';

const GoalList = props => {
    return (
        <Card className="goals">
        <ul>
            {props.goals.map(goal => <li>{goal.name} | {goal.description}</li>)}
        </ul>
        <p>test</p>
        </Card>
    )
};

export default GoalList;