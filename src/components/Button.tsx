
interface Info {
    desp: string;
    onselectR: (info: string) => void;
    info: string;
    btn:string
  }
  
  function Button({ desp, onselectR, info , btn }: Info) {
    return (
      <div>
        <button onClick={() => onselectR(info)}>{btn}</button>
        <p>{desp}</p>
      </div>
    );
  }
  
  export default Button;
  