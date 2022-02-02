import React, { useState } from 'react';
import { Tasks } from './Tasks';
import Task from './Task';

function ListTasks() {

     const [tasks, setTasks] = useState (Tasks);
     
    return (
        <Task tasks={tasks} title="All Tasks"/>
     );
}

export default ListTasks;