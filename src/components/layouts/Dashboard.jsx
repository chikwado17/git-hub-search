import React, { useState } from 'react';
import axios from 'axios';
import Search from '../users/Search';
import Button from '../layouts/Button';
import Users from '../users/Users';


const Dashboard = () => {
    
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [ emptyInput, setEmptyInput ] = useState(false);
   
    //function to search users on github using the git hub search api
    const onInputsearch = async (items) => {
        setLoading(true);
        const search = await axios.get(`https://api.github.com/search/users?q=${items}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        setUsers(search.data.items);
        setLoading(false);
    }

    //function to clear users after searched
    const handleClearInput = () => {
        setUsers([]);
        setLoading(false);
    }

    //a function to display an alert message when a user whats to submit empty input
    const handleEmptyInput = () => {
        setEmptyInput(true);

        setTimeout(() => {
        setEmptyInput(false);
        },3000);
    }

    return (
        <div>
            <Search emptyInput={emptyInput} handleEmptyInput={handleEmptyInput} onInputsearch={onInputsearch} />
            {users.length > 0 &&  
            <Button handleClearInput={handleClearInput} />}
            <div className="container mt-5">
                <Users loading={loading} users={users} />
            </div>
        </div>
    )
}

export default Dashboard;
