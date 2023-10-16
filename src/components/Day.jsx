import React, { useState } from "react"
import { totalOfTasks, tasksDone } from "./Button";

let numOfDays = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate()
var days = Array.from({ length: numOfDays }, function () {
     return "";
})

export default function Day(props) {
     const [isHovered, setIsHovered] = useState(false);
     const dayClassName = props.hidden ? "day hidden" : "day";

     return (
          <div className={dayClassName}
          onMouseEnter={() => {
               setIsHovered(true)
               days[new Date().getDate()] = Math.floor((tasksDone / totalOfTasks) * 100)
          }}
          onMouseLeave={() => setIsHovered(false)}>
               <p>{isHovered ? `${days[Number(props.num)]}%` : props.num}</p>
          </div>
     );
}