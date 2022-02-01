import React from 'react';
import './Home.css';

function Home() {
return ( 
<div className='home'>
    <div className='header'>
        <h1>ToDo App</h1>
        <div className='inputfield'>
        <input type="text" placeholder='Add your new task'></input>
        <button><i className='fas fa-plus'></i></button>
        </div>
    </div>
    <div className='container'>
        <div className='one'>
                <li className='task'>Complete React project<span><i className='fas fa-trash'></i></span></li>
                <li className='task'>Submit previous assignments<span><i className='fas fa-trash'></i></span></li>
                <li className='task'>Push code to github<span><i className='fas fa-trash'></i></span></li>
        </div>
        <div className='two'>
                <li className='task'>Do more research<span><i className='fas fa-trash'></i></span></li>
                <li className='task'>Write a report<span><i className='fas fa-trash'></i></span></li>
                <li className='task'>Print a logbook<span><i className='fas fa-trash'></i></span></li>
        </div>
        <div className='three'>
                <li className='task'>Remember to code more<span><i className='fas fa-trash'></i></span></li>
                <li className='task'>Don't forget to rest<span><i className='fas fa-trash'></i></span></li>
                <li className='task'>And sleep!<span><i className='fas fa-trash'></i></span></li>
        </div>
    </div>
{/*<div className='footer'>
        <span>You have 2 pending tasks</span>
        <button>Clear all</button>
        </div>
*/}

</div>
);
}

export default Home;