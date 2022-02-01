import React, { useState } from 'react';
import { Tasks } from '../Tasks/Tasks';
import Task from '../Task/Task';

function Taskslist() {

     const [tasks, setTasks] = useState (Tasks);
    console.log(tasks);

    return ( 
        <div className='home'>
            <div className='header'>
                <h1>ToDo App</h1>
                    <div className='inputfield'>
                        <input type="text" placeholder='Add your new task'></input>
                        <button><i className='fas fa-plus'></i></button>
                    </div>
            </div>
            <div className='container'>
                <div className='one'>
                    <Task tasks={tasks} />
                    </div>
            </div>
        </div>
       
        
     );
}

export default Taskslist;