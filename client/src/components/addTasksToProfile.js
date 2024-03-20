export default function addTasksToProfile(num) {
     let list = []
     let quote = "You don't write any task in this day"
     const database = JSON.parse(localStorage.getItem("databaseModel"))
     database[num - 1].tasks.forEach(task => {
          list.push(<p>•{task.text}</p>)
     });

     return list.length ? list : quote
}