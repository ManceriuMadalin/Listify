import React from "react"

export default function Day(props) {
     const dayClassName = props.hidden ? "day hidden" : "day";

     return (
          <div className={dayClassName}>
               <p>{props.num}</p>
          </div>
     );
}