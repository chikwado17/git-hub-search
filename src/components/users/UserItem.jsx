import React from 'react'

const UserItem = ({ user }) => {
    return (
        <div className="card mb-5" style={{width: '18rem'}}>
            <img src={user.avatar_url} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{user.login}</h5>
                <a href={user.html_url} className="btn btn-primary">More</a>
            </div>
        </div>       
    )
}

export default UserItem;
