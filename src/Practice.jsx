// import React from "react";
// import { useState } from "react";
// function Practice() {
//   const [task, setTask] = useState("");
//   const [tasks, setTasks] = useState([]);
//   const addTasks = () => {};
//   if (task) {
//     setTasks([...tasks, task]);
//     setTask("");
//   }
//   const deleteTask = (index)=>{
//     const updateTask = tasks.filter((t, i)=> i !==index )
//     setTasks(updateTask);
//   }
//   return (
//     <div>
//       <div className="flex justify-center flex-col align-middle items-center mt-5  mx-auto gap-4 p-10 rounded-md">
//         <input value={task} type="text" />
//         <button onClick={addTasks}>add</button>
//       </div>
//       <ul>
//         {setTasks.map((t, index) => {
//           <li key={index}>
//             {t}
//             <button onClick={() => deleteTask(index)}></button>
//           </li>;
//         })}
//       </ul>
//     </div>
//   );
// }

// export default Practice;
