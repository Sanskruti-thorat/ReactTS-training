import LazyLoader from './LazyLoader';
import { lazy } from 'react';


const Home = LazyLoader(lazy(async () => await import('./Home')));
const Page1 = LazyLoader(lazy(async () => await import('./Page1')));
const Page2 = LazyLoader(lazy(async () => await import('./page2')));
const Page3 = LazyLoader(lazy(async () => await import('./page3')));
const PageChild1 = LazyLoader(lazy(async () => await import('./children/p1')));
const PageChild2 = LazyLoader(lazy(async () => await import('./children/p2')));
const PageChild3 = LazyLoader(lazy(async () => await import('./children/p2')));
// const PageChild11 = LazyLoader(lazy(async () => await import('./Home')));
// const PageChild11 = LazyLoader(lazy(async () => await import('./Home')));







const Routes = [
{
    path:'/',
 element: <Home/>

},
{
    path:'/Page1/',
 element:<Page1/>,
 children:[
    
    {
    name:"pagechild1",
    path:'pagechild1',
    element:<PageChild1/>
    }
]
},
{
    path:'/page2/',
element:<Page2/>,
children:[{
    name:"pagechild2",
    path:'pagechild2',
    element:<PageChild2/>
 }
]
},
{
    path:'/page3/',
element:<Page3/>,
children:[{
    name:"pagechild3",
    path:'pagechild3',
    element:<PageChild3/>
 } 
]
}

]

export default Routes
