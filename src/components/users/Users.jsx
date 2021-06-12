import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layouts/Spinner';

const Users = ({users, loading}) => {
    if(loading) {
        return <Spinner />
    }else {
        return (
            <div className="container">
               <div className="row">
                    {users.map(user => (
                        <div key={user.id} className="col-lg-4 col-sm-6">
                            <UserItem  user={user} />  
                        </div>  
                    ))}
               </div>
            </div>
        )
    }
}

export default Users;
