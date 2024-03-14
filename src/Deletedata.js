import { useState } from "react"

function Deletedata()
{
    const [rollno1,setRollno]=useState()
    function Submitform()
    {
        const rollno=parseInt(rollno1); 
        const data={rollno}
        fetch("https://nodeproject11-1h3t.onrender.com",{
            method:"DELETE",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        }).then((result)=>{
            result.json().then((data1)=>{
                console.log(data1)
            })
        })
    }

    return(
        <div>
            
                <input type="number" placeholder="Enter Roll no" onChange={(e)=>setRollno(e.target.value)}></input><br></br>
                <button onClick={Submitform}>Submit</button>
            
        </div>
    )
}
export default Deletedata
