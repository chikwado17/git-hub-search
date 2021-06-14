import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Button from './components/layouts/Button';

const App = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    //function to search users on github using the git hub search api
    const onInputsearch = async (items) => {
      setLoading(true);
      const search = await axios.get(`https://api.github.com/search/users?q=${items}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
      setUsers(search.data.items);
      setLoading(false);
    }

    const handleClearInput = () => {
      setUsers([]);
      setLoading(false);
    }


    return (
      <div>
        <Navbar/>
          <Search onInputsearch={onInputsearch} />
          {users.length > 0 &&  
          <Button handleClearInput={handleClearInput} />}
          <div className="container mt-5">
            <Users loading={loading} users={users} />
          </div>
      </div>
    )
}
export default App;