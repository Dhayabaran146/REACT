import React,{useState} from 'react'

export default function PostAx() {
    const[name,setName]=useState("")
    handleChangeName=event=>{setName(event.target.value)}
    handleSubmit=event=>{
        event.preventDefault();
        Axios.post('http://localhost:3001/user',{name})
        .then(res=>{console.log(res.data)})
        .catch(error=>{console.log("Something went wrong"+error)})
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={handleChangeName}></input>
            <button type='submit'></button>
        </form>
    </div>
  )
}