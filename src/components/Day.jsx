import React, { useState } from "react"

let numOfDays = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate()
let days = Array.from({ length: numOfDays }, function () {
     return 0;
})
export let num

export default function Day(props) {
     const [isHovered, setIsHovered] = useState(false);
     const dayClassName = props.hidden ? "day hidden" : "day";

     return (
          <div className={dayClassName}
               onMouseEnter={() => {
                    if (props.hoverable) {
                         var dataCurenta = new Date();
                         dataCurenta.setDate(1);
                         var ziuaInceputLuna = dataCurenta.getDate();
                         setIsHovered(true)
                         days[Number(props.num)] = Math.floor(JSON.parse(localStorage.getItem("databaseModel"))[Number(props.num) - ziuaInceputLuna].tasksDone / JSON.parse(localStorage.getItem("databaseModel"))[Number(props.num) - ziuaInceputLuna].totalOfTasks * 100)
                    }
               }}
               onMouseLeave={() => setIsHovered(false)}>
               <p onClick={() => {num = props.num}}>{isHovered ? isNaN(days[Number(props.num)]) ? "0%" : `${days[Number(props.num)]}%` : props.num}</p>
          </div>
     );
}