import React, { useState } from 'react';
import './App.css';
import CountdownText from './components/Typography/CountdownText';
import TopBar from './components/TopBar/TopBar';
import FilterBar from './components/Filter/FilterBar';
import AddGoal from './components/Goals/AddGoal';
import GoalList from './components/Goals/GoalList';
import GoalItem from './components/Goals/GoalItem';

const dummy_goals = [
  {
    id: 1,
    title: "10k race under 1 hour",
    deadline: new Date(2023, 4, 4)
  },
  {
    id: 2,
    title: "Get a job",
    deadline: new Date(2023, 5, 4)
  },
  {
    id: 3,
    title: "Trip to Northumberland to see sea lions",
    deadline: new Date(2023, 5, 4)
  }
];


function App() {
  
  const [goals, setGoals] = useState(dummy_goals);

  const addGoalHandler = newGoal => {
    console.log('in app.js');
    console.log(newGoal);
  
    setGoals((prevGoals) => {
      return [newGoal, ...goals]
    }
    );
  }

  return (
    <div className="App">
              <TopBar />
              <CountdownText />
              <AddGoal onAddGoal={addGoalHandler}/>
              <FilterBar className="align-left"/>
              <GoalList items={goals}/>
             
    </div>
  );
};

export default App;
