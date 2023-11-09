import { useState } from "react";

interface comp{
  btnarray: { id: number, text: string , info: string}[]
}

function MapBtn({btnarray}:comp ) {
  const [info, setInfo] = useState('');
 
  const handleButtonClick = (buttonInfo: string) => {
    setInfo(buttonInfo);
  };

  return (
    <>

   {btnarray.map((item) =>(
    <li key={item.id}>
    <button onClick={() => handleButtonClick(item.info) }>{item.text}</button>
    </li>
   ))}

   <div>
    <p>{info}</p>
   </div>
    </>
  
  );
}

export default MapBtn;
