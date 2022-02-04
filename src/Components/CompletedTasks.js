import React, { useState } from 'react';
import Completed from './Completed';

function CompletedTasks() {

      const [done, setDone] = useState ([
          { title: "Gym",id: 1, description: "Hit the gym", date: "05/02/2022" },
          { title: "Run",id: 2, description: "Run 5 miles", date: "08/02/2022" },
          { title: "Gym",id: 3, description: "Gym again", date: "03/02/2022" },

      ]);
     
    return (
       
        < Completed done={done} title="Completed Tasks"/>
     );
}

export default CompletedTasks;