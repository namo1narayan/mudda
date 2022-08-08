import axios from 'axios';
import {useState,useEffect} from 'react';
function App(){
  const [data,setData]=useState([]);
  useEffect(() =>{
    loadUserData();
  }, []);

  const loadUserData=async () => {
    return await axios
    .get("http://localhost:3001/getUsers")
    .then((response)=>setData(response.data))
    .catch((err)=>console.log(err));
  };
  console.log("data",data);
};
export default App;