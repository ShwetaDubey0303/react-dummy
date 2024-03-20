import {useState} from "react"
const App1 = () => {
    let[data,setData]=useState([])
    let[obj,setObj]=useState({"name":"","pwd":"","gen":"","branch":"","addr":"","rating":"5","dob":""})
    let [lang,setLang]=useState([])

    let fun=(e)=>{
        setObj({...obj,[e.target.name]:e.target.value})
}
   let fun1=(e)=>{
    if(e.target.checked){
        setLang([...lang,e.target.value])
    }
    else{
        lang.splice(lang.indexOf[e.target.value],1)
    }
  }
    let add=()=>{
        setData([...data,{...obj,"lang":[...lang]}])
        setObj({"name":"","email":"","pwd":"","gen":"","branch":"","addr":"","rating":"5","dob":""})
        setLang([])
    }
  return (
    <div>
      <input type="text" placeholder="enter name" name="name" onChange={fun} value={obj.name}/>
      <input type="text" placeholder="enter password" name="pwd" onChange={fun} value={obj.pwd}/>
      <input type="text" placeholder="enter email" name="email" onChange={fun} value={obj.email}/>
      <input type="radio" value="male" onChange={fun}  name="gen" checked={obj.gen=="male"}/>Male
      <input type="radio" value="female" onChange={fun}  name="gen" checked={obj.gen=="female"}/>Female
      Branch:<select onChange={fun} name="branch" value={obj.branch}>
        <option value="cse">Computers</option>
        <option value="eee">electrical</option>
        <option value="ece">electronics</option>
        <option value="ce">civil</option>
      </select>
      Addr:<textarea name="addr" onChange={fun} value={obj.addr}></textarea>
      DOB:<input type="date" onChange={fun} name="dob" value={obj.dob}/>
      Skillrating:<input type="range" min={1} max={10} onChange={fun} name="rating" value={obj.rating}/>
      <input type="checkbox" onChange={fun1} value="Telgu" checked={lang.includes("Telgu")}/>Telugu
      <input type="checkbox" onChange={fun1} value="Hindi" checked={lang.includes("Hindi")}/>Hindi
      <input type="checkbox" onChange={fun1} value="English" checked={lang.includes("English")}/>English
      <button onClick={add}>Add</button>
      {
        data.length>0&&<table border={1}>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Gender</th>
                <th>Branch</th>
                <th>Address</th>
                <th>DOB</th>
                <th>Rating</th>
                <th>Langknown</th>

            </tr>
            {
                data.map((item)=>{
                  return(
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.pwd}</td>
                        <td>{item.gen}</td>
                        <td>{item.branch}</td>
                        <td>{item.dob}</td>
                        <td>{item.addr}</td>
                        <td>{item.rating}</td>
                        <td>{item.lang.join("")}</td>
                    </tr>
                  )
                })
            }
        </table>
      }

      
    </div>
  )

}

export default App1
