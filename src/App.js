
import './App.css';
// import Header from './Components/Heading/Header';
import Header from './Components/Common/Heading/Header';
// import { BrowserRouter as Router, Routes } from "react-router-dom"
// import { Switch, Router } from "react-router-dom";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom"
// import Home from './Components/Heading/Home/Hero/Home';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import CourseHome from './Components/allcourses/CourseHome';
import Team from './Components/Team/Team';
import Price from './Components/Pricing/Price';
import Contact from './Components/Contact/Contact'
function App() {
  return (
    <div className="App">
    
<Router>
<Header/>

<Routes>
<Route exact path="/" element={<Home/>}/>


<Route exact path= "/about" element={<About/>}/>

<Route exact path= "/Courses" element={<CourseHome/>}/>

<Route exact path= "/team" element={<Team/>}/>

<Route exact path= "/pricing" element={<Price/>}/>

<Route exact path= "/contact" element={<Contact/>}/>

</Routes>
</Router>

    </div>
  );
}

export default App;
