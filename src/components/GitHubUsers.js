
import React from 'react'
import useGitHub from '../hooks/useGitHub'

const GitHubUsers = ({username}) => {
    const {user,loading,error}=useGitHub(username);
  return (
   <>
   <div className='github-users'>
    {username}
    {loading &&<p>Loading....</p>}
    {error && <p>{error.message}</p>}
    {
        user &&(
            <ul className='details'>
                <li>
                    <img src={user.avatar_url} alt={user.login}></img>
                </li>
                <li>
                    <strong>Name:</strong>{user.name}
                </li>
                <li>
                <strong>Bio:</strong>{user.bio? user.bio :"NA"}

                </li>
                <li>
                <strong>Location:</strong>{user.location? user.bio :"NA"}

                </li> 
            </ul>
        )
    }
   </div>
   </>
  )
}

export default GitHubUsers
