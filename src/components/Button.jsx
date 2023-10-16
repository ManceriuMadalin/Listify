import React, { useState } from "react";

export let totalOfTasks = 0
export let tasksDone = 0

export default function Button(props) {
     const [tasks, setTasks] = useState([]);
     const [line, setLine] = useState("none");
     const [color, setColor] = useState("#78D6C6");

     const handleClick = () => {
          const inputText = document.querySelector("#input").value;
          if (inputText !== "") {
               setTasks((prevTasks) => [
                    ...prevTasks,
                    {
                         text: inputText,
                         line,
                         color,
                    },
               ]);

               setLine("none");
               setColor("#78D6C6");

               document.querySelector("#input").value = "";
          }

          totalOfTasks++
          console.log(totalOfTasks)
     };

     const handleTaskClick = (index) => {
          setTasks((prevTasks) => {
               const updatedTasks = [...prevTasks];
               updatedTasks[index].line = "line-through";
               updatedTasks[index].color = "#FF6969";
               return updatedTasks;
          });

          tasksDone++
          console.log(tasksDone)
     };

     return (
          <>
          <span>
               <input id="input" type="text" placeholder="Add your task for today" />
               <button style={{ backgroundColor: "#78D6C6" }} onClick={handleClick}>
                    {props.icon}
                    {props.text}
               </button>
               </span>

               <div id="tasks">
                    {tasks.map((task, index) => (
                         <span className="task" key={index}>
                              <p style={{ textDecorationLine: task.line }}>{task.text}</p>
                              <button
                                   style={{ backgroundColor: task.color }}
                                   onClick={() => handleTaskClick(index)}
                              >
                                   <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        class="bi bi-check"
                                        viewBox="0 0 16 16"
                                   >
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                   </svg>
                                   Done
                              </button>
                         </span>
                    ))}
               </div>
          </>
     );
}
