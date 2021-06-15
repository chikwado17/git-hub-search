import React, { useContext } from 'react';
import { GithubContext } from '../../context/gitHub/GithubContext';
import ReposListItem from './ReposListItem';

const ReposList = () => {
    const { repos } = useContext(GithubContext);
    return (
        <div>
            {repos.map(repo => (
                <ReposListItem repo={repo} key={repo.id} />
            ))}
        </div>
    )
}

export default ReposList;
