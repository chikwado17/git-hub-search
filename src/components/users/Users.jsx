import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layouts/Spinner';

const Users = ({users, getUser, loading}) => {

    return loading ? (
        <Spinner />
    ) : (
        <div className="container">
            <div className="row">
                {users.map(user => (
                    <div key={user.id} className="col-md-6 col-lg-4 col-xl-3">
                        <UserItem getUser={getUser} user={user} />  
                    </div>  
                ))}
            </div>
        </div>
    )

}

export default Users;
