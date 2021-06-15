import React, { useContext } from 'react';
import { GithubContext } from '../../context/gitHub/GithubContext';

const Button = () => {
    const {users,handleClearInput } = useContext(GithubContext);

    return (
        <>
            {users.length > 0 &&
            <div className="container"> 
                <button onClick={handleClearInput} className="btn btn-danger mt-3 w-100" type="submit">Clear</button>
            </div>}
        </>
    )
}

export default Button;
