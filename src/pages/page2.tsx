import { Link, Outlet } from "react-router-dom"


function Page2() {
  return (
    <>
        <div>page2</div>
    <Link to={'/page2/pagechild2'}>click</Link>
    <Outlet />
    <section>

    </section>
    </>

  )
}

export default Page2