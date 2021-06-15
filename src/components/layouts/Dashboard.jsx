import React from 'react';
import Search from '../users/Search';
import Button from '../layouts/Button';
import Users from '../users/Users';


const Dashboard = () => {

    return (
        <div>
            <Search />
            <Button />
            <div className="container mt-5">
                <Users />
            </div>
        </div>
    )
}

export default Dashboard;
