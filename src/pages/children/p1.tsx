import { Link, Outlet } from "react-router-dom";

const PageChild1 = () => {
    return (<>
    <div>Page child 1</div>
    <Link to={'/Page1/pagechild1/pagechild11'}>click</Link>
    <Outlet/>
    </>);
}
 
export default PageChild1;