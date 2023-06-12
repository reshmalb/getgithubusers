import React,{useState,useEffect} from 'react'


const useGitHub = (username) => {
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);
    const [user,setuser]=useState(null)
    useEffect(()=>{
        //https://api.github.com/users/username
        const fetchData= async()=>{
            setLoading(true);
            try{
                 const response= await fetch(`https://api.github.com/users/${username}`)
                 const responsedata=await response.json();
                 setuser(responsedata)
                 setLoading(false)

            }catch(error){
                setError(error)
                setLoading(false)

            }
        }
        fetchData();

    },[username])
  return {user,loading,error}
}

export default useGitHub
