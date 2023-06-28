
import React from 'react'
import useGitHub from '../hooks/useGitHub'
import './GitHubUsers.css'

const GitHubUsers = ({username}) => {
    const {user,loading,error}=useGitHub(username);

  

  return (
   <>
   <div className='github-users-container'>
    {/* {username} */}
    {loading &&(<p style={{color:"green",fontWeight:"500"}}>Loading....</p>)}
    {error && <p style={{color:"crimson",fontWeight:"500"}}>{error.message}</p>}
     {user &&(<div className='users'>      
                   
                <div className='profile-image'>
                     <img className='image' src={user.avatar_url} alt={user.login}/>
                     <hr/>
                 </div>
                   <div className='details'>
      <div className='details-row '>
                 
       Name : <span className='span-row'>{user.name ? user.name : "NA"}</span>
</div>   
<div className='details-row '>
   Bio:<span className='span-row'>{user.bio ? user.bio :"NA"}</span></div>
   <div className='details-row '>
Location:<span className='span-row'>{user.location? user.bio :"NA"}</span></div>
<div className='details-row '>
      Company:<span className='span-row'>{user.company? user.company :"NA"}</span></div>
      <div className='details-row '>
      Followers:<span className='span-row'>{user.followers}</span></div>
      <div className='details-row '>
Following:<span className='span-row'>{user.following} </span></div>
<div className='details-row '>
Public Repositories:<span className='span-row'>{user.public_repos}</span></div>
<div className='details-row '>
URL:<span className='span-row'>{user.repos_url}</span></div>
<div className='details-row '>
Last update:<span className='span-row'>{user.updated_at}</span></div>
  </div>      
   </div>)
  }
   </div>
   </>
  )
}

export default GitHubUsers
