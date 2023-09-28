import React from "react";
import monthDays from "./monthDays";
import NameDays from "./NameDays";

export default function Calendar() {
   return (
      <div className="calendar">
      <NameDays />
         {monthDays}
      </div>
   )
}