import './App.css';
import CountdownText from './components/Typography/CountdownText';
import ProfileIcon from './components/ProfileIcon/ProfileIcon';
import TopBar from './components/TopBar/TopBar';
import FilterBar from './components/Filter/FilterBar';
import AddGoal from './components/Goals/AddGoal';
import GoalList from './components/Goals/GoalList';



function App() {
  const goals = [
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

  const addGoalHandler = (goal) => {
    console.log('in app.js');
    console.log(goal);
  }

  return (
    <div className="App">
              <TopBar />
              <CountdownText />
              <AddGoal onAddGoal={addGoalHandler}/>
              <FilterBar className="align-left"/>
              <GoalList goals={goals}/>           
    </div>
  );
};

export default App;
