import React from 'react'
import Source from './Source'
import LogInPage from "./LogInPage";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import Test from "./test";



const App = () => {
  return (
    <div>
        {/*<BrowserRouter>*/}
        {/*   <Routes>*/}
        {/*       <Route path="/" element={<LogInPage />}/>*/}
        {/*       <Route path="/source" element={<Source />} />*/}
        {/*   </Routes>*/}
        {/*</BrowserRouter>*/}
        <Test />

    </div>
  )
}

// export default App
// import React from 'react';
// import './App.css';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Signin from './Signin';
// import Profile from './Profile';
//
// function App() {
//     const token = localStorage.getItem('accessToken');
//
//     if(!token) {
//         return <Signin />
//     }
//
//     return (
//         <div className="wrapper">
//             <BrowserRouter>
//                 <Switch>
//                     <Route path="/profile">
//                         <Profile />
//                     </Route>
//                     <Route path="/">
//                         <Profile />
//                     </Route>
//                 </Switch>
//             </BrowserRouter>
//         </div>
//     );
// }

export default App;