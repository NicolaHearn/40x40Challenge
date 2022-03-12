import React from 'react';
import './GoalList.css';
import GoalItem from './GoalItem';
import Card from '../UI/Card';

const GoalList = (props) => {
    
    return (
        <Card className="goal-list">
            {/* this shows up fine on the screen */}
            <GoalItem
                title={props.items[0].title}
                targetDate={props.items[0].deadline} />
            {/* This .map doesn't work */}
            {props.items.map((goal) => {
                return (<GoalItem
                id={goal.id}
                title={goal.title} 
                targetDate={goal.deadline}
                />)
            })}
        </Card>
    )
};

export default GoalList;