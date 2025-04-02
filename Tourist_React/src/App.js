import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./website/Pages/Home";
import About from "./website/Pages/About";
import Services from "./website/Pages/Services";
import Packeges from "./website/Pages/Packeges";
import Ulogin from "./website/Pages/Ulogin";
import Uregister from "./website/Pages/Uregister";

import Dashboard from "./Admin/Apages/Dashboard";  
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             

import Pack_manage from "./Admin/Apages/Pack_manage";
import Page from "./website/Pages/Page";
import Add_packeges from "./Admin/Apages/Add_packeges";
import ServiceMange from "./Admin/Apages/ServiceMange";
import Add_service from "./Admin/Apages/Add_services";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Alogin from "./Admin/Apages/Alogin";
import Usermanage from "./Admin/Apages/Usermanage";

function App() {
  return (
    <div className="App">
    {/* <Home/> */}
    <ToastContainer />
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<><Home/></>} />
     <Route path="/about" element={<><About/></>}/>
     <Route path="/services" element={<><Services/></>}/>
    <Route path="/packeges" element={<><Packeges/></>}/>
   <Route path="/page" element={<><Page/></>}>
   
   </Route>
   <Route path="/ulogin" element={<><Ulogin /></>} />
        <Route path="/uregister" element={<><Uregister /></>} />
        {/* <Route path="/profile" element={<><Profile /></>} /> */}

   
  


     <Route  path="/dashboard" element={<><Dashboard/></>}/>
     <Route path="/packmange" element={<><Pack_manage/></>}/>
     <Route path="/addpack" element={<><Add_packeges/></>}/>
     <Route path="/Servicemange" element={<><ServiceMange/></>}/>
     <Route path="/addservice" element={<><Add_service/></>}/>
     <Route path="/alogin" element={<><Alogin/></>}/>
     <Route path="/usermanage" element={<><Usermanage /></>} />

    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
