import React from 'react';

const Button = ({handleClearInput}) => {
    return (
        <div className="container"> 
            <button onClick={handleClearInput} className="btn btn-danger mt-3 w-100" type="submit">Clear</button>
        </div>
    )
}

export default Button;
