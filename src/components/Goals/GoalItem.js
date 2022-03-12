import './GoalItem.css';
import Card from '../UI/Card';

const GoalItem = (props) => {
    const month = props.targetDate.toLocaleString('en-US', { month: 'long' });
    const day = props.targetDate.toLocaleString('en-US', { day: '2-digit' });
    const year = props.targetDate.getFullYear();
  

    return (
        <Card className="goal-item">
            <div className="goal-item__image">Goal Image</div>
            <div className="goal-item"> 
                <p>{props.title}</p>
                <p>Optional Comments</p>
                <div className="goal-item__deadline">
                    <p>{day}</p>
                    <p>{month} </p>
                    <p>{year}</p>
                </div>
                
            </div>
        </Card>
    );
};

export default GoalItem;