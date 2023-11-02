import Component from './components/component'
import './App.css'


function App(){
  const listOfUsers =[
   {name: "person1",
    job: "job1"} ,
    {name: "person2",
    job: "job2"},
    {name: "person3",
    job: "job3"},
    {name: "person4",
    job: "job4"}
  
  ]
  return (
    <>
    <Component name={"Sanskruti"} list={listOfUsers}/>
    </>
  )
}

export default App
