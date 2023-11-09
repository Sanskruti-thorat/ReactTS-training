import { Outlet, useNavigate } from "react-router-dom"



export default function Page1() {
  const navigate= useNavigate();
  return (
    <>
     <div>Page1</div>
   <button onClick={()=>navigate('/Page1/pagechild1')}>click me</button>
   <Outlet />
    </>
   
  )
}
