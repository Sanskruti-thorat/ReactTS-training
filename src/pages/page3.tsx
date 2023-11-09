import { Link, Outlet } from "react-router-dom"


function Page3() {
  return (
    <>
     <div>page3</div>
    <Link to={'/page3/pagechild3'}>click</Link>
    <Outlet />
    
    </>
   
  )
}

export default Page3