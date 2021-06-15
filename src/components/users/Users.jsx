import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layouts/Spinner';
import { GithubContext } from '../../context/gitHub/GithubContext';

const Users = () => {

    const { users, loading } = useContext(GithubContext);

    return loading ? (
        <Spinner />
    ) : (
        <div className="container">
            <div className="row">
                {users.map(user => (
                    <div key={user.id} className="col-md-6 col-lg-4 col-xl-3">
                        <UserItem user={user} />  
                    </div>  
                ))}
            </div>
        </div>
    )

}

export default Users;
