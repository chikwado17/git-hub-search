import React from 'react'

const ReposListItem = ({repo}) => {
    return (
        <div className="card">
            <div className="card-body">
                <a target="__blank" href={repo.html_url}>{repo.name}</a>
            </div>
        </div>
    )
}

export default ReposListItem;
