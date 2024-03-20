import React from "react";
import Day from "./Day"

var currentDate = new Date();
var daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

const monthDays = [];

currentDate.setDate(1)
var daysOfWeek = currentDate.getDay()

for (let i = 0; i < 35; i++) {
     let dayProps = { num: 0, hidden: false, hoverable: true};

     if (i < daysOfWeek || i >= (daysOfWeek + daysInMonth)) {
          dayProps.hidden = true;
     } else if (i < daysOfWeek) {
          dayProps.num = i + 1;
     } else if (daysOfWeek + daysInMonth < i) {
          dayProps.num = i - daysInMonth;
     } else {
          dayProps.num = i - daysOfWeek + 1;
     }

     monthDays.push(<Day {...dayProps} />);
}

export default monthDays