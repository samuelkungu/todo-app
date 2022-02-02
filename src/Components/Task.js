import React from 'react';

function Task(props) {
    return (
        <div className='task'>
              { props.tasks.map((task,index) => {
                    return (
                        <li key={task.id}>
                            {task.title}
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