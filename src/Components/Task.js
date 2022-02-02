const Task = (props) => {
    const tasks = props.tasks;
    const title = props.title;

    console.log(tasks);

    return (  
        <div className='container'>
            <div className='taskslist'>
               <h2>{title}</h2>
            {tasks.map((task) => (
                <div className='task' key={task.id}>
                    <h2>{task.title}</h2>
                    <p>I will...{task.description}</p>
                    <p>Due date {task.date}</p>

                </div>
            ))}             
                   

            </div>
        </div>
       
         );
}
 
export default Task;