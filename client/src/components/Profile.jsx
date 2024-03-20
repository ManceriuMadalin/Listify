import React, { useState } from "react";
import Navbar from "./Navbar";
import Avatar from "./Avatar"
import Calendar from "./Calendar"
import { num } from "./Day";
import addTasksToProfile from "./addTasksToProfile";

export default function Profile() {
     const [calendarLeft, setCalendarLeft] = useState("50%");
     const [tasksLeft, setTasksLeft] = useState("50%");
     const [tasksOpacity, setTasksOpacity] = useState("0")
     const [list, setList] = useState([])

     const avatarStyle = {
          position: "absolute",
          width: "100px",
          height: "100px",
          left: "50%",
          transform: "translateX(-50%)"
     };

     const commonStyle = {
          position: "absolute",
          zIndex: "1",
          width: "335px",
          height: "fit-content",
          marginTop: "100px",
          transition: "all 1s",
          top: "50%",
          transform: "translate(-50%, -50%)"
     }

     const handleClick = () => {
          setList(addTasksToProfile(num))
          setCalendarLeft("35%");
          setTasksLeft("65%");
          setTasksOpacity("1")
     }

     return (
          <>
               <Navbar />
               <div style={avatarStyle}>
                    <Avatar width="100%" img={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"} />
               </div>
               <div style={{...commonStyle, left: calendarLeft}} onClick={handleClick}>
                    <Calendar />
               </div>
               <div style={{...commonStyle, opacity: tasksOpacity, backgroundColor: "#31363F", padding: "20px", borderRadius: "12.5px", left: tasksLeft, zIndex: -1}}>{list}</div>
          </>
     )
}
