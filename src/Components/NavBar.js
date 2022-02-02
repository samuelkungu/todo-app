import React from 'react';

function NavBar() {
    return ( 
        <div className='navbar'>
        <div className='navbar-header'>
                <h1>ToDo App</h1>
                    <div className='inputfield'>
                        <input type="text" placeholder='Add your new task'></input>
                        <button><i className='fas fa-plus'></i></button>
                    </div>
        </div>
        </div>    
     );
}

export default NavBar;
