import React from "react"
import Calendar from "./Calendar"
import Avatar from "./Avatar"
import Day from "./Day"
import Button from "./Button"
import Navbar from "./Navbar"

export default function App() {
     return (
          <>
               <Navbar />
               <div className="container">
                    <nav>
                         <Avatar width="25%" img="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />
                         <Calendar />
                         <div className="info">
                              <p>Learn more <a href="#" className="about">About Us</a></p>
                              <p>Get in touch with us <a href="#" className="contact">Contact Us</a></p>
                         </div>
                    </nav>
                    <main>
                         <Day hoverable={true} num={new Date().getDate()} />
                         <div id="toDoList">
                              <Button icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                   <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                              </svg>} text="Add" />
                         </div>
                    </main>
               </div>
          </>
     )
}