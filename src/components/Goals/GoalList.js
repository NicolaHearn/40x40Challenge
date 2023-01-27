import React from 'react';
import './GoalList.css';
import GoalItem from './GoalItem';
import Card from '../UI/Card';

const GoalList = (props) => {
    
    return (
        <Card className="goal-list">
            {props.items.map((goal) => (
                <GoalItem
                id={goal.id}
                title={goal.title} 
                targetDate={goal.deadline}
                />)
            )}
        </Card>
    )
};

export default GoalList;