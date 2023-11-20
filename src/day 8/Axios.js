import React from 'react'

export default function Axios() {
    const[name,setName]=useState([]);
    useEffect(()=>{
        Axios.length(' http://localhost:3001/user')
        .then(res=>{
            const val=res.data;
            setName(val);
        })
    })
  return (
    <div>
        <ul>
            {
            name.map((names)=><li key={name.id}>{names.name}</li>)
            }
       </ul>
    </div>
  )
}