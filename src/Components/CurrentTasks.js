import React, { useEffect, useState } from 'react';
import Current from './Current';

function CurrentTasks() {

      const [currents, setCurrents] = useState ([
          { title: "Gym",id: 1, description: "Hit the gym", date: "05/02/2022" },
          { title: "Run",id: 2, description: "Run 5 miles", date: "08/02/2022" },
          { title: "Gym",id: 3, description: "Gym again", date: "03/02/2022" },

      ]);
     
      const handleDelete = (id) => {
           const newCurrents = currents.filter( task => task.id !== id);
           setCurrents(newCurrents)
        
    }

         useEffect(() =>{
            console.log('use effect');
         }, []);

    return (
       
        < Current currents={currents} title="Current Tasks" handleDelete={handleDelete}/>
     );
}

export default CurrentTasks;