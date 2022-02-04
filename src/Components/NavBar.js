import React from 'react';
import { Link } from 'react-router-dom';


function NavBar() {
    return ( 
        <div className='navbar'>
        <div className='navbar-header'>
                <h1>ToDo App</h1>
                    <div className='inputfield'>
                        <input type="text" placeholder='Add your new task'></input>
                        <button><i className='fas fa-plus'></i></button>
                    </div>

                    <div className='links'>
                        <p>
                        <Link to='/currentTasks'>Activities</Link>
                        </p>
                        <p>
                        <Link to='/allTasks'>All tasks</Link>
                        </p>
                        <p>
                        <Link to='/completedTasks'>Completed tasks</Link>
                        </p>
                    </div>
        </div>
        </div>    
     );
}

export default NavBar;
