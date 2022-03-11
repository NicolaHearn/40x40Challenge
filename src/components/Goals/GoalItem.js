import './GoalItem.css';
import Card from '../UI/Card';

const GoalItem = (props) => {
    const month = props.deadline.toLocaleString('en-US', { month: 'long' });
    const day = props.deadline.toLocaleString('en-US', { day: '2-digit' });
    const year = props.deadline.getFullYear();

    return (
        <Card className="goal-item">
            <div className="goal-item__image">Goal Image</div>
            <div>
                <p>{props.title}</p>
                <div className="goal-item__deadline">
                    <div>{day}</div>
                    <div>{month} </div>
                    <div>{year} </div>    
                </div>
                <p>Optional Comments</p>
            </div>
        </Card>
    );
};

export default GoalItem;