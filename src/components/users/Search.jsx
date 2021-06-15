import React, { useState, useContext } from 'react';
import { GithubContext } from '../../context/gitHub/GithubContext';
import { AlertContext } from '../../context/alert/AlertContext';
import Alert from '../layouts/Alert';

const Search = () => {

    const { searchUsers } = useContext(GithubContext);

    const { alert, handleEmptyInput } = useContext(AlertContext);

    const [textInput, setTextInput] = useState('');
    const handleUsersInput = (e) => {
        e.preventDefault();
        if(textInput === '') {
            handleEmptyInput();
        }else {
            searchUsers(textInput);
            setTextInput('');
        }
    }
    return (
        <div className="container mt-5">
            
           {alert &&
            <Alert /> }
            <form onSubmit={handleUsersInput} className="form-group my-2 my-lg-0">
                <input className="form-control mr-sm-2" value={textInput} onChange={(e) => setTextInput(e.target.value)} type="search" placeholder="Search for github users" />
                <button className="btn btn-primary mt-3 w-100" type="submit">Search</button>
            </form>
        </div>
    )
}
export default Search;
