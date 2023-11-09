import { Link } from "react-router-dom"


function Page3() {
  return (
    <>
     <div>page3</div>
    <Link to={'/page3/pagechild3'}>click</Link>
    </>
   
  )
}

export default Page3