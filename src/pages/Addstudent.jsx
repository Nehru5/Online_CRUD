import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
const Addstudent = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [department,setDepartment] = useState("")
  const [course, setCourse] = useState("")

  function addStudent(e){
    e.preventDefault()
    let data = {name,email,department,course}
    axios.post("http://localhost:4000/students",data)
    .then(()=>{
      alert("Student Added")
      setName("")
      setEmail("")
      setDepartment("")
      setCourse("")
    })
    .catch((err)=>console.log(err))

  }
  return (
    <>
    <Navbar/>
      <center><h1>Add Student</h1></center>
      <center>
        <form onSubmit={addStudent}>
          <input 
          type="text" 
          placeholder='Enter Name' 
          required 
          value={name} 
          onChange={(e)=>setName(e.target.value)} /> <br />


          <input 
          type="text" 
          placeholder='Enter Email' 
          required 
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          /> <br />

          <input 
          type="text" 
          placeholder='Enter Department' 
          required 
          value={department}
          onChange={(e)=>setDepartment(e.target.value)}
          /> <br />

          <input 
          type="text" 
          placeholder='Enter Course' 
          required
          value={course}
          onChange={(e)=>setCourse(e.target.value)}
          /> <br />
          <button>Add</button>
        </form>
      </center>
    </>
  )
}

export default Addstudent