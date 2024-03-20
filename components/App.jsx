import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from "./Main"
import Profile from "./Profile"

export default function App() {
     return (

          <Router>
               <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/profile" element={<Profile />} />
               </Routes>
          </Router>
     )
}