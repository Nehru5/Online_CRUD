import React,{useEffect,useState} from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Viewstudent = () => {
  const [students, setStudents] = useState([])

  const navigate = useNavigate()
  function fetchData(){
    axios.get("http://localhost:4000/students")
    .then(x=>setStudents(x.data))
    .catch(err=>console.log(err))
  }
  useEffect(()=>{
    fetchData()
  },[])

  function handleUpdate(){
    navigate("/updatestudent")
  }
  return (
    <>
    <Navbar/>
      <center><h1>Student List</h1></center>

      {students.map((x)=>{
        return <div>
          <h1>Name: {x.name}</h1>
          <h2>Email: {x.email}</h2>
          <h2>Department: {x.department}</h2>
          <h2>Course: {x.course}</h2>
          <button onClick={handleUpdate}>Edit</button>
          <button>Delete</button>
        </div>
      })}
    </>
  )
}

export default Viewstudent