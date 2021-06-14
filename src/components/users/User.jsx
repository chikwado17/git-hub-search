import React, { useEffect , useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import Spinner from '../layouts/Spinner';

const User = () => {
    const [user, setUser] = useState({});
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);

    const { login } = useParams();
  

    useEffect(() => {
        const getUser = async (username) => {
            setLoading(true);
            const UserData = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
            setUser(UserData.data);
            setLoading(false);
        }
        getUser(login);

        
    },[login])

    useEffect(() => {
        const getRepos = async (username) => {
            setLoading(true);
            const repos = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
            setUser(repos.data);
            setLoading(false);
        }

        getRepos(username);

    },[]);






    return loading ? (
        <Spinner />
        ) : (
        <div className="container mt-5">
            <Link to='/' className="btn btn-light mr-3 mb-3"> <i class="bi bi-house-door-fill"></i> Go Back Home</Link>
            
            <div className="card">
                <div className="card-body">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4 text-center">
                                <img src={user.avatar_url} className="rounded mt-3" alt="nworie chikwado emmanuel react projects" style={{width:'150px'}} />
                                <h1>{user.name}</h1>
                                    Hireable: 
                                    {user.hireable ? (
                                        <i className="bi bi-check text-success"></i>
                                    ) : (
                                        <i className="bi bi-x text-danger"></i>  
                                    )}
                                <p><b>Location:</b> {user.location} </p>
                            </div>
                            <div className="col-sm-8">
                                {user.bio && (
                                    <div>
                                        <h3>Bio</h3>
                                        <p>{user.bio}</p>
                                    </div>
                                )}
                                <a href={user.html_url} target="__blank" className="btn btn-dark mt-3"> <i className="bi bi-github"></i>  Visit Github Profile</a>
                                <div className="card mt-4" style={{width: '18rem'}}>
                                    <ul className="list-group list-group-flush">
                                    {user.login &&
                                        <li className="list-group-item">
                                            <b>Username: </b> {user.login}
                                        </li>}
                                        {user.company &&
                                        <li className="list-group-item">
                                            <b>Company: </b> {user.company}
                                        </li>}
                                        {user.blog &&
                                        <li className="list-group-item">
                                            <b>Website: </b> {user.blog}
                                        </li>}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card text-center">
                <div className="card-body">
                    <div className="badge badge-primary mr-4 mt-2 mb-4">
                        <b>Followers: </b> {user.followers}
                    </div>
                <div className="badge badge-success mr-4">
                    <b>Following: </b> {user.following}
                </div>
                <div className="badge badge-danger mr-4">
                    <b>Public Repos: </b> {user.public_repos}
                </div>
                <div className="badge badge-dark mr-4">
                    <b>Public Gists: </b> {user.public_gists}
                </div>
                </div>
            </div>
        </div>
    )
}



export default User;
