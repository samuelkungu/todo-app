import React, { useState } from 'react';
import { Tasks } from './Tasks';
import Task from './Task';

function ListTasks() {

     const [tasks, setTasks] = useState (Tasks);
     
    return ( 
        <div className='container'>
            <div className='tasklist'>
                <div className='one'>
                                    
                     <Task tasks={tasks} /> 
                </div>

            </div>
        </div>
       
        
     );
}

export default ListTasks;