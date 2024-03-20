import React from "react"
import {useState} from "react"
const App=()=>{
  let [data,setData]=useState([])
  let[obj,setObj]=useState({"name":"","email":"","phno":"","city":""})
  let fun=(e)=>{
    setObj({...obj,[e.target.name]:e.target.value})
  }
  let add=()=>{
    setData([...data,obj])
    setObj({"name":"","email":"","phno":"","city":""})
  }
  return(
    <div>
    
      <input type="text" placeholder="enter name" onChange={fun} name="name" value={obj.name} />
      <input type="text" placeholder="enter email" onChange={fun} name="email" value={obj.email}/>
      <input type="text" placeholder="enter phno" onChange={fun} name="phno" value={obj.phno}/>
      <input type="text" placeholder="enter city" onChange={fun} name="city" value={obj.city}/>
      <button onClick={add}>Add</button>
      
      {
      data.length>0 && <table border={1}>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phno</th>
            <th>City</th>
          </tr>
          {
            data.map((item)=>{
              return(
              <tr>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phno}</td>
                <td>{item.city}</td>
              </tr>
              )
            })
          }
          </table>
}
</div>
  )
}
export default App

            
