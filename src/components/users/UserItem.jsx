import React from 'react';
import { Link } from 'react-router-dom';

const UserItem = ({ user }) => {
    
    return (
        <div className="card mb-5" style={{width: '18rem'}}>
            <img src={user.avatar_url} className="card-img-top" alt="..." />
            <div className="card-body text-center">
                <h5 className="card-title">{user.login}</h5>
                <Link to={`/profile/${user.login}`} className="btn btn-primary w-100">More</Link>
            </div>
        </div>       
    )
}

export default UserItem;
