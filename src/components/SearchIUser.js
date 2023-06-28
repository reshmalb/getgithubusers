import React,{useState} from 'react';
import GitHubUsers from './GitHubUsers';
import './SearchUser.css'

const SearchIUser = () => {
    const [username,setusername]=useState("")
    return (    
      <>
      < div className='form-group'> 
         <p> </p>           
            <form className='search-form'>
              <input type="text"
               placeholder='Enter username:'
               onChange={(event)=>setusername(event.target.value) } 
               ></input>            
            </form>    
    
     
        < div  className='bottom'
            >
          {username ? <GitHubUsers username={username}/>:<p > Please initiate a search!!!</p> }

        </div>
        
      
   
       {/* <div className='result'>
       <br/> <br/> {username ? <GitHubUsers username={username}/>:<p style={{marginLeft:"20px",padding:0}}> Please initiate a search!!!</p> }
      </div> */}
     
     </div>
      </>
 
      
    )
}

export default SearchIUser
