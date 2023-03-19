import logo from './logo.svg';
import './App.css';
import FrontPage from './Components/FrontPage';
import Signup from './Components/Singup';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ShowUser from './Components/ShowUser';


function App() {  
  

  return (
    <div>
     {/* <Link to = "/signup">Signup</Link> */}
     
   
     <BrowserRouter>
     
     <Routes>
      <Route path="/" element = {<FrontPage />} />
      <Route path="/signup" element= {<Signup />} />
      <Route path='/show-users' element={<ShowUser />}/>
     </Routes>
     </BrowserRouter>
    </div>
      );
}
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
export default App;
