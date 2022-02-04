import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import './App.css';
import CompletedTasks from './Components/CompletedTasks';
import './Components/css/Main.css';
import CurrentTasks from './Components/CurrentTasks';
import AllTasks from './Components/AllTasks';
import NavBar from './Components/NavBar';




function App() {
  return (
    <Router>
        <div className="App">
        <NavBar />
        <Switch>
          <Route exact path={"/currentTasks"}><CurrentTasks/></Route>
          <Route path={"/completedTasks"}><CompletedTasks /></Route>
          <Route path={"/allTasks"}><AllTasks /></Route>

        </Switch>
          
        </div>
    </Router>
  );
}

export default App;
