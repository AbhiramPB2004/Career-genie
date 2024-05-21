// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CareerRating from './components/CareerRating';
import NewAssessment from './components/NewAssessment';
import Connect from './components/Connect';
import Test from './components/test';
// import Assessment from './components/Assessment';

function App() {
  return (
    <div className="App">
      {/* <Assessment/> */}
      {/* <NewAssessment/> */}
      {/* <CareerRating/> */}
      {/* <Connect/> */}

      <BrowserRouter>
      <Routes>
        <Route exact path='/assignment' element={<NewAssessment/>}></Route>
        <Route exact path='/rate' element={<CareerRating/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
