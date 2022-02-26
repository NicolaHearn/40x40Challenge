import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import CountdownText from './components/Typography/CountdownText';
import ProfileIcon from './components/ProfileIcon/ProfileIcon';
import TopBar from './components/TopBar/TopBar';
import FilterBar from './components/Filter/FilterBar';
import AddGoal from './components/Goals/AddGoal';
import GoalList from './components/Goals/GoalList';
import GoalItem from './components/GoalItem'


function App() {
  return (
    <div className="App">
              
              <TopBar />
              <CountdownText />
              <AddGoal />
              <FilterBar className="align-left"/>
              <GoalItem />
              <Dashboard />
              
              
    </div>
  );
}

export default App;
