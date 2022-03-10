import React from 'react';
import './GoalList.css';
import GoalItem from './GoalItem';
import Card from '../UI/Card';

function GoalList(props) {
    
    return (
        <Card className="goal-list">
            <GoalItem title={props.goals[0].title} deadline={props.goals[0].deadline}/>
            <GoalItem title={props.goals[1].title} deadline={props.goals[1].deadline}/>
            <GoalItem title={props.goals[2].title} deadline={props.goals[2].deadline}/>
        </Card>
    )
};

export default GoalList;