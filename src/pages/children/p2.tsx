
import { Link, Outlet } from "react-router-dom";

const PageChild2 = () => {
    return (  <>
    <div>Page  child 2</div>
   <Link to={'/page2/pagechild2/pagechild22'}>click</Link>
   <Outlet/>
    </>);
}
 
export default PageChild2;