
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import React from 'react';
import LoginSignUp from './components/LoginSignup';
import Home from './components/Home';
import './App.css';
import Account from './components/account';
import { Navbar } from './components/navbar';
import Chatbot from './components/Chatbot';
import Layout from './components/Layout';
import Discover from './components/Discover';
import CostModelPage from './components/CostModelPage';
import SurveyComponent from './components/SurveyComponent';


function App() {

  const modelchat = () => { 
    return (
      <div>
      <Layout/>
      <Chatbot/>
      </div>
    ) 
  }


  return (
    <div>
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' exact index element={<Home/>}
      ></Route>
      <Route path='/Login'exact index element={<LoginSignUp/>}></Route>
      <Route path='/account' exact index element={<Account/>}></Route>
      <Route path='/chat' exact index element={<Chatbot/>}></Route>
      <Route path='/Cost' exact index element={<CostModelPage/>}></Route>
      <Route path='/form' exact index element={<SurveyComponent/>}></Route>
      <Route exact path='/' element={<Layout/>}>
          <Route exact index element={<Chatbot/>}></Route>
          <Route exact path='/discover' element={<Discover/>}></Route>
          <Route path='/library'></Route>
      </Route>
      {/* <Route path='/ch' exact index element={modelchat}></Route> */}
      
      </Routes> 

      </BrowserRouter>
      
    </div>
  );
}

export default App;
