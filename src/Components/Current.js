const Current = (props) => {
    const currents = props.currents;
    const title = props.title;
    const handleDelete = props.handleDelete

    console.log(currents);
    
    

    return (  
        <div className='container'>
            <div className='taskslist'>
               <h2>{title}</h2>
            {currents.map((task) => (
                <div className='task' key={task.id}>
                    <h2>{task.title}</h2>
                    <p>I will...{task.description}</p>
                    <p>Due date {task.date}</p>
                    <button onClick={ () => handleDelete(task.id)}>Delete Task</button>

                </div>
            ))}             
                   

            </div>
        </div>
       
         );
}
 
export default Current;