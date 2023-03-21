import logo from './logo.svg';
import './App.css';
import FrontPage from './Components/FrontPage';
import Signup from './Components/Singup';
import Notestate from './context/notes/NoteState';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ShowUser from './Components/ShowUser';
import Edit from './Components/Edit';
import LoginPage from './Components/LoginPage';
function App() {  
  

  return (
    <div>
     {/* <Link to = "/signup">Signup</Link> */}
     <Notestate>
     <BrowserRouter>
     
     <Routes>
      <Route path="/" element = {<FrontPage />} />
      <Route path="/signup" element= {<Signup />} />
      <Route path='/show-users' element={<ShowUser />}/>
      <Route path='edit/:id' element={ <Edit />}/>
      <Route path='/login' element={ <LoginPage/> }/>
     </Routes>
     </BrowserRouter>
     </Notestate>
   
    
    </div>
      );
}
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
export default App;
