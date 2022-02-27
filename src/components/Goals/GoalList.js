import React from 'react';
import './GoalList.css';
import GoalItem from './GoalItem';

function GoalList(props) {
    
    return (
        <div>
            <GoalItem title={props.goals[0].title} deadline={props.goals[0].deadline}/>
            <GoalItem title={props.goals[1].title} deadline={props.goals[1].deadline}/>
            <GoalItem title={props.goals[2].title} deadline={props.goals[2].deadline}/>
        </div>
    )
};

export default GoalList;