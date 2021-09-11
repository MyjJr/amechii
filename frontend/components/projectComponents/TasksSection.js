import React, { useState } from "react";
import { PlusIcon, TrashIcon } from "@heroicons/react/outline";
import { createTask, deleteTask, updateTaskStatus } from "lib/projects";

const TasksSection = (props) => {
  const { projectData, setProjectData, userInfo } = props;

  const [tasks, setTasks] = useState(projectData.subtasks)

  const [inputValue, setInputValue] = useState("");


  const changeStatusFormat = (status) => {
    if(status) return "success"
    return "not_complete"
  }

  const checkTaskStatus = (status) => {
    switch (status) {
      case "not_complete":
        return false
      case "success":
        return true
      default:
        console.error("正当なstatusではありません");
    }
  }

  const handleIsDone = async ({id, status}) => {
    const updateTasks = tasks.map((item) =>
      item.id === id ? { ...item, status: changeStatusFormat(!checkTaskStatus(item.status)) } : item
    );
    setTasks(updateTasks)
    updateTaskStatus({ cookies: userInfo, id, status: changeStatusFormat(!checkTaskStatus(status))})
  };


  const handleDelete = (id) => {
    const deletedTasks = tasks.filter((item) => item.id !== id);
    setTasks(deletedTasks)
    deleteTask({ cookies: userInfo, id})
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTask = await createTask({cookies: userInfo, title: inputValue, projectId: projectData.id})
    setTasks([...tasks, newTask])
    setInputValue("");
  };

  return (
    <div className="border-2 border-gray-200 w-full lg:h-5/6 relative">
      <div className="lg:h-1/5 border-2 border-gray-200 flex justify-center items-center">
        <h1>{projectData.title}</h1>
      </div>
      <div className="lg:h-4/5 flex justify-center items-start relative">
        <ul className="lg:w-7/12 lg:h-5/6 overflow-y-scroll p-2 no-scrollbar">
          {tasks.length > 0 &&
            tasks.map((item) => (
              <li
                key={item.id}
                className="flex justify-evenly items-center border-b border-gray-100 my-4 lg:mx-30"
              >
                <input
                  type="checkbox"
                  className="checkbox checkbox-xs"
                  checked={checkTaskStatus(item.status)}
                  onChange={() => handleIsDone({id: item.id, status: item.status})}
                />
                <input
                  type="text"
                  className={
                    checkTaskStatus(item.status)
                      ? "input border-none text-center w-9/12 line-through"
                      : "input border-none text-center w-9/12"
                  }
                  defaultValue={item.title}
                  disabled
                />
                <TrashIcon
                  className="h-4 w-4 text-red-600 cursor-pointer"
                  onClick={() => handleDelete(item.id)}
                />
              </li>
            ))}
        </ul>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="lg:w-7/12 flex justify-evenly items-center border-b border-gray-100 lg:mx-30 absolute bottom-1"
        >
          <input
            type="text"
            className="input border-none text-center w-10/12"
            value={inputValue}
            placeholder="タスクを入力してください"
            onChange={(e) => setInputValue(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

export default TasksSection;
