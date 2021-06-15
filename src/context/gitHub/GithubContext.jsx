import React, { createContext, useReducer } from 'react';
import axios from 'axios';
import  githubReducers  from './githubReducers';

export const GithubContext = createContext();

const GithubContextProvider = (props) => {

    const initialState = {
        users: [],
        loading:false,
        emptyInput: false,
        user: {},
        repos: []
    }

    const [state, dispatch] = useReducer(githubReducers, initialState);

    //method to set loading to true/false on our reducer
    const setLoading = () => {
        dispatch({
            type: 'SET_LOADING'
        })
    }

    //function to search users on github using the git hub search api
    const searchUsers = async (users) => {
        setLoading();
        const response = await axios.get(`https://api.github.com/search/users?q=${users}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        dispatch({
            type: 'SEARCH_USERS',
            payload:response.data.items
        })
    }

    //function to get a single user
    const getUser = async (username) => {
        setLoading();
        const UserData = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        dispatch({
            type: 'GET_USER',
            payload: UserData.data
        })
    }

    //function to get repos
    const getRepos = async (userRepos) => {
        setLoading();
        const repos = await axios.get(`https://api.github.com/users/${userRepos}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
      
        dispatch({
            type: 'GET_REPOS',
            payload: repos.data
        })
    }
      
     //function to clear users after searched
    const handleClearInput = () => {
        dispatch({
            type: 'CLEAR_USERS'
        })
    }


    const { users, loading, emptyInput, user, repos } = state;
    return (
        <GithubContext.Provider value={{
            users,
            loading,
            emptyInput,
            user,
            repos,
            searchUsers,
            setLoading,
            handleClearInput,
            getUser,
            getRepos
        }}>
            {props.children}
        </GithubContext.Provider>
    )
}

export default GithubContextProvider;
