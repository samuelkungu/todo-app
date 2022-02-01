import React from 'react';

function Task(props) {
    return (
        <div>
              { props.tasks.map((task,index) => {
                    return (
                        <li key={task.id}>
                            {task.name}
                            <br></br>
                            {task.description}
                            <br></br>
                            {task.date}
                        </li>
                    ) 
                })}
        </div>
      );
}

export default Task;