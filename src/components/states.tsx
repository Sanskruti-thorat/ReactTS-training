import {  useState, useEffect } from "react";
import '../CSS/statestyles.css';

function States() {

  const [name, setName] = useState('');
  const [data , setData] = useState('');
  const [display , setDisplay] = useState('');
    useEffect(() => {
    setDisplay(data);
  }, [data]);
  return (
    <>
    <input type="text" onChange={(e)=> setData(e.target.value)} />
    <p className="para-style">{display}</p>
      <button onClick={() => setName("Sanskruti")}>Set Name</button>
      <p className="para-style">My name is {name}</p>
      
    </>
  );
}

export default States;


