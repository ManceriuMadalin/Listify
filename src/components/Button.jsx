import React from "react"
import { addTask, deleteTask } from "./function"

export default function Button(props) {
     const handleClick = () => {
          if (props.text === "Add") {
               addTask()
          } else if (props.text === "Delete") {
               deleteTask()
          }
     }
     return (
          <>
               <button onClick={handleClick}>
                    {props.icon}
                    {props.text}
               </button>
          </>
     )
}