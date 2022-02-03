import React, { useState } from 'react';
import Completed from './Completed';

function CompletedTasks() {

      const [done, setDone] = useState ([
          { title: "Gym",id: 1, description: "Complete React project", date: "05/02/2022" },
          { title: "Run",id: 2, description: "Submit previous assignments", date: "08/02/2022" },
          { title: "GYm",id: 3, description: "Push code to githubn", date: "03/02/2022" },

      ]);
     
    return (
       
        < Completed done={done} title="All Tasks"/>
     );
}

export default CompletedTasks;