import React from 'react'
import React,{useState} from 'react';
import GitHubUsers from './GitHubUsers';

const SearchIUser = () => {
    const [username,setusername]=useState(null)
    return (
      
      <>
       <div>
          <form>
              <input type="text"
               placeholder='Enter username'
               onChange={(event)=>setusername(event.target.value)}
               ></input>            
          </form>        
      </div>
      <div>
        {username ? <GitHubUsers username={username}/>: <p> Please initiate a search!!!</p> }
      </div>

      </>
      
    )
}

export default SearchIUser
