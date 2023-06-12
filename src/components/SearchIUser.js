import React,{useState} from 'react';
import GitHubUsers from './GitHubUsers';

const SearchIUser = () => {
    const [username,setusername]=useState("")
    return (
      
      
       < div className='form-group'>
          <form className='search-form'>
              <input type="text"
               placeholder='Enter username'
               onChange={(event)=>setusername(event.target.value) } 
               ></input>            
          </form>        
     
      <div className='result'>
        {username ? <GitHubUsers username={username}/>: <p> Please initiate a search!!!</p> }
      </div>
      </div>
      
      
    )
}

export default SearchIUser
