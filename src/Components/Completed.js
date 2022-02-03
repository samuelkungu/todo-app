const Completed = (props) => {
    const done = props.done;
    const title = props.title;

    console.log(done);

    return (  
        <div className='container'>
            <div className='taskslist'>
               <h2>{title}</h2>
            {done.map((completed) => (
                <div className='task' key={completed.id}>
                    <h2>{completed.title}</h2>
                    <p>I will...{completed.description}</p>
                    <p>Due date {completed.date}</p>

                </div>
            ))}             
                   

            </div>
        </div>
       
         );
}
 
export default Completed;