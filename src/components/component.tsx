interface myComp{
name:string,
list: { name: string; job: string; }[];
}

export default function Component({name , list} : myComp) 
{
  return (
    <>
    <div>My name is {name}</div>
    <div>
    {list.map((item , i)=> <li key={i}>{item.name} has {item.job}</li>)}
    </div>
    </>
    
  )
}
