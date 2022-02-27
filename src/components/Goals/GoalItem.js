import './GoalItem.css';

function GoalItem(props) {
    const month = props.deadline.toLocaleString('en-US', { month: 'long' });
    const day = props.deadline.toLocaleString('en-US', { day: '2-digit' });
    const year = props.deadline.getFullYear();

    return (
        <div className="goal-item">
            <div>{props.title}</div>
            <div>
                <div>
                    <div>{day}</div>
                    <div>{month}</div>
                    <div>{year}</div>    
                </div>
                <h2>Optional Comments</h2>
            </div>
        </div>
    );
};

export default GoalItem;