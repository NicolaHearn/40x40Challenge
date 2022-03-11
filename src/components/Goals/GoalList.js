import React from 'react';
import './GoalList.css';
import GoalItem from './GoalItem';
import Card from '../UI/Card';

const GoalList = (props) => {
    
    return (
        <Card className="goal-list">
            <GoalItem 
                title={props.items[0].title}
                date={props.items[0].deadline} />
            {props.items.map(goal => {
                <GoalItem 
                title={goal.title} 
                //deadline={goal.deadline}
                />
            })}; 
        </Card>
    )
};

export default GoalList;