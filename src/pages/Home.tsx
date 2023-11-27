// import Component from '../components/component'
// import Product from '../components/product'
// import MapBtn from '../components/mapping-btns'
// import States from '../components/states'
import { store } from "../redux/reducer";
import {useSelector} from "react-redux"

const Home = () => {
 
//     const listOfUsers =[
//         {name: "person1",
//          job: "job1"} ,
//          {name: "person2",
//          job: "job2"},
//          {name: "person3",
//          job: "job3"},
//          {name: "person4",
//          job: "job4"}
       
//        ]


//  // const Items = [
//   //   { itemName: "Shirt", itemPrice: 20, noOfItems: 2 },
//   //   { itemName: "Jeans", itemPrice: 30, noOfItems: 1 },
//   //   { itemName: "Jeans", itemPrice: 30, noOfItems: 1 },
//   // ];

//        const buttonData = [
//          { id: 1, text: 'Button 1', info: 'Info for Button 1' },
//          { id: 2, text: 'Button 2', info: 'Info for Button 2' },
//          { id: 3, text: 'Button 3', info: 'Info for Button 3' },
{/* <States/>
<Component name={"Sanskruti"} list={listOfUsers}/>
<Product/>
<MapBtn btnarray={buttonData}/> */}
{/* <Asgnt3 Items={Items}/> */}
//        ];

const count = useSelector(state=>state)
    return ( 
    
    <>
    <div>

<h1>Count:{store.getState()}</h1>
<div>
  <button onClick={()=> store.dispatch({type:"INCRE", payload:1})}>Increment</button>
  <button onClick={()=>store.dispatch({type:"DECRE"})}>Decrement</button>
</div>
</div>
    </> );
}
 
export default Home;