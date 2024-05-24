
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import home from './Pages/home';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path='/' element={ <home/>}/>
          <Route path='/about' element={ <about/>}/>
          <Route path='/safety' element={ <safety/>}/>
          <Route path='/support' element={ <support/>}/>
          <Route path='/login' element={ <login/>}/>
      </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
