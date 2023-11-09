import { Link } from "react-router-dom"


function Page2() {
  return (
    <>
        <div>page2</div>
    <Link to={'/page2/pagechild2'}>click</Link>
    </>

  )
}

export default Page2