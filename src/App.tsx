
import './App.css'
// import Asgnt3 from './components/typescrpit-asg';
import { useRoutes } from 'react-router-dom'
import Routes from './pages/Routees';
import Header from './pages/Header';




function App(){
  const routing = useRoutes(Routes);
  

  return (
    <>
   
    <Header/>
    {routing}
 
    </>
  )
}

export default App
