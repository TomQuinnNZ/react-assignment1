import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>
                {props.username}
            </p>
            <p>
                Eu pellentesque sit habitant volutpat dolor blandit 
                at posuere leo, sagittis enim sollicitudin a per 
                curae tempus facilisis tempus, cras senectus est 
                sollicitudin cras venenatis enim nullam massa 
                quisque id faucibus viverra interdum.
            </p>
        </div>
    );
};

export default userOutput;