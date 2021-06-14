import React from 'react';
import ReposListItem from './ReposListItem';

const ReposList = ({repos}) => {
    return (
        <div>
            {repos.map(repo => (
                <ReposListItem repo={repo} key={repo.id} />
            ))}
        </div>
    )
}

export default ReposList;
