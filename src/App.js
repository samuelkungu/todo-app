import './App.css';
import './Components/Home.css';
import ListTasks from './Components/ListTasks';
import NavBar from './Components/NavBar';


function App() {
  return (
    <div className="App">
     <NavBar />
    
     <ListTasks />
      
    </div>
  );
}

export default App;
