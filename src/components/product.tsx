import { useState } from "react";
import Button from "./Button";

function Product() {
    const [descrpition , setDescription ] = useState('');
   
    const [descrpitionA , setDescriptionA ] = useState('');
    const [descrpitionJ, setDescriptionJ ] = useState('');
  
    const  reactInfo  = "react information";
    const  angularInfo  = "Angular information";
    const  javascriptInfo = "JAvascript information";


  function handleDisplayR(productinfo : string ){
       setDescription(productinfo);
    }
    
  function handleDisplayA(productinfo : string ){
      setDescriptionA(productinfo);
   }
   
   function handleDisplayJ(productinfo : string ){
    setDescriptionJ(productinfo);
   }
  return (
   <>
   <div>
    <p>Click on the product to know about them</p>
   <Button desp={descrpition} onselectR ={handleDisplayR} info={reactInfo}  btn={"REACT"} />
    <div>
    <Button desp={descrpitionA} onselectR ={handleDisplayA} info={angularInfo} btn={"ANGULAR"}/>    
    </div>
    <div>
    <Button desp={descrpitionJ} onselectR ={handleDisplayJ} info={javascriptInfo} btn={"JAVASCRIPT"}/>
    </div>
   
   </div>
   </> 
  )
}


export default Product