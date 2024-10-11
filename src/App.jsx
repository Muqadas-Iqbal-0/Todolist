import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTasks = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
      localStorage.setItem("tasks", JSON.stringify([...tasks, task]));
    }
  };
  
  const deleteTasks = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index); // Filter out the task to delete
    setTasks(updatedTasks); // Update the state
    localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // Save updated tasks to localStorage
  };

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      try {
        setTasks(JSON.parse(savedTasks)); // Parse the JSON string
      } catch (error) {
        console.error("Error parsing JSON from local storage:", error);
      }
    }
  }, []);
  return (
    <>
      <div className="app flex flex-col w-full items-center   mx-auto h-screen  shadow-lg  align-middle bg-gray-800">
        <div className="flex justify-center flex-col align-middle items-center mt-5  mx-auto gap-4 p-10 rounded-md bg-gray-700">
          <div className="w-full flex flex-row gap-4 align-middle justify-center items-center">
            <input
              type="text"
              placeholder="Enter your task"
              value={task}
              onChange={(e) => {
                setTask(e.target.value);
              }}
              className="bg-gray-100  w-[500px]  h-10 text-black px-4 py-2 rounded-md mt-2 border-none focus:outline-none"
            />
            <button
              onClick={addTasks}
              className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2"
            >
              Add Tasks
            </button>
          </div>
        </div>
        <div className="w-full  flex justify-center items-center align-middle max-auto mt-6">
          <ul className="flex flex-col gap-2 justify-center items-center align-middle max-auto w-full">
            {tasks.map((t, index) => (
              <li
                className="bg-blue-100 w-[600px] flex flex-row justify-between items-center  gap-6 h-10 text-black px-4 py-2 rounded-md mt-2 border-none focus:outline-none"
                key={index}
              >
                {t}
                <button
                  onClick={() => deleteTasks(index)}
                  className="bg-gray-400 text-white px-2 py-1 rounded-md "
                >
                  &#x274C;
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
