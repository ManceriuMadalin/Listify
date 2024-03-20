import React from "react";
import Day from "./Day";

export default function NameDays() {
     var firstLetterOfName = ["S", "M", "T", "W", "T", "F", "S"]
     var daysOfWeek = []

     firstLetterOfName.forEach((element) => daysOfWeek.push(<Day hoverable={false} num={element} />))
     return (
          <div className="daysOfWeek">
               {daysOfWeek}
          </div>
     )
}