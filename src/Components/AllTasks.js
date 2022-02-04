import React, { useState } from 'react';
import All from './All';

function AllTasks() {

     const [tasks, setTasks] = useState ( [
          { title: "Project",id: 1, description: "Complete React project", date: "05/02/2022" },
          { title: "Assignments",id: 2, description: "Submit previous assignments", date: "08/02/2022" },
          { title: "Github",id: 3, description: "Push code to githubn", date: "03/02/2022" },
         
      ]);
     
    return (
        <All tasks={tasks} title="All Tasks"/>
     );
}

export default AllTasks;