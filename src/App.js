import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import './App.css';
import './Components/css/Main.css';
import Home from './Components/Home';
import ListTasks from './Components/ListTasks';
import NavBar from './Components/NavBar';




function App() {
  return (
    <Router>
        <div className="App">
        <NavBar />
        <Switch>
          <Route exact path={"/"}><Home/></Route>
          <Route path={"/allTasks"}><ListTasks /></Route>
        </Switch>
          
        </div>
    </Router>
  );
}

export default App;
