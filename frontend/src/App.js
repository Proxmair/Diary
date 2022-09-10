import React,{useEffect} from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './component/Header.jsx'
import Auth from './component/Auth.jsx'
import Diary from './component/Diary.jsx'
import Footer from './component/Footer.jsx'
import {useDispatch,useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
const App = () => {
  const dispatch=useDispatch();
  const alert=useAlert();
  const {message, error ,isAuthenticated } = useSelector((state => state.login));
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch({ type: "CLEAR_ERRORS" });
    } 
    if (message) {
      alert.success(message);
      dispatch({ type: "CLEAR_MESSAGE" });
    }
  }, [alert,error, message, dispatch]);
  return (
    <Router>
      <Header/>
      <Routes>
          <Route path='/' element={isAuthenticated ? <Diary/> : <Auth />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App