import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';

const App = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);


    const getData = async () => {
     
      const usersData = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

      setUsers(usersData.data);
     
    }

    useEffect(() => {
      setLoading(!loading);
        getData();

      setLoading(loading);
    }, [loading]);


    return (
      <div>
        <Navbar/>
          <div className="container mt-5">
            <Users loading={loading} users={users} />
          </div>
      </div>
    )
}
export default App;