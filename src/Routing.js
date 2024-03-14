import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./Header"
import Postdata from "./Postdata"
import Deletedata from "./Deletedata"
import Getdata from "./Getdata"
import Updatedata from "./Putdata"

function Routing()
{
    return(
        <div>
   <BrowserRouter>
   <Header></Header>
   <Routes>
    <Route path="/" element={<Getdata></Getdata>}></Route>
    <Route path="/post" element={<Postdata></Postdata>}></Route>
    <Route path="/put" element={<Updatedata></Updatedata>}></Route>
    <Route path="/delete" element={<Deletedata></Deletedata>}></Route>
   </Routes>
   </BrowserRouter>
        </div>
    )
}
export default Routing