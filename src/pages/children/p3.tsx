import { Link, Outlet } from "react-router-dom";


const PageChild3 = () => {
    return (  <>
    <div>Page child 3</div>
    <Link to={'/page3/pagechild3/pagechild33'}>click</Link>
    <Outlet/>
    </>);
}
 
export default PageChild3;