import React from 'react';
import { NavLink } from 'react-router-dom';

function TaskIndicator() {
    return ( 
        <div className=' flex-grow'>
            <nav>
                <ul className='flex gap-3 justify-between p-3 bg-slate-400 rounded-lg shadow-2xl'>
                    <li>
                        <NavLink to="/">All Task</NavLink>
                    </li>
                    <li>
                        <NavLink to="/active">Live</NavLink>
                    </li>
                    <li>
                        <NavLink to="/completed">Finished</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
     );
}

export default TaskIndicator;