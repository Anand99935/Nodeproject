import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"

function Getdata()
{
    const[data1,setdata]=useState([])
    useEffect(()=>
    {
    fetch("http:localhost:6000/").then((result)=>{
        result.json().then((data)=>{
             setdata(data)
        })
      })
    },[])
    return(
        <div>
         <Table striped bordered hover varient="dark">
         <tbody>
            <tr>
                <td>rollno</td>
                <td>name</td>
                <td>marks</td>
            </tr>
            {
                data1.map((item)=>
                <tr>
                    <td>{item.rollno}</td>
                    <td>{item.name}</td>
                    <td>{item.marks}</td>
                </tr>
                )
            }
         </tbody>
         </Table>
        </div>
    )
}
export default Getdata