import React, { useState } from "react";
import { PlusIcon, TrashIcon } from "@heroicons/react/outline";

const TasksSection = (props) => {
  const { data, setData } = props;

  const [inputValue, setInputValue] = useState("");

  const handleIsDone = (id) => {
    const updateTasks = data.tasks.map((item) =>
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    );
    setData({
      ...data,
      tasks: updateTasks,
    });
  };

  const handleDelete = (id) => {
    const deletedTasks = data.tasks.filter((item) => item.id !== id);
    setData({
      ...data,
      tasks: deletedTasks,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: data.tasks.length + 1,
      name: inputValue,
      isCompleted: false,
    };
    setData({
      ...data,
      tasks: [...data.tasks, newTask],
    });
    setInputValue("");
  };

  return (
    <div className="border-2 border-gray-200 w-full lg:h-5/6 relative">
      <div className="lg:h-1/5 border-2 border-gray-200 flex justify-center items-center">
        <h1>{data.title}</h1>
      </div>
      <div className="lg:h-4/5 flex justify-center items-start relative">
        <ul className="lg:w-7/12 lg:h-5/6 overflow-y-scroll p-2 no-scrollbar">
          {data &&
            data.tasks.map((item) => (
              <li
                key={item.id}
                className="flex justify-evenly items-center border-b border-gray-100 my-4 lg:mx-30"
              >
                <input
                  type="checkbox"
                  className="checkbox checkbox-xs"
                  checked={item.isCompleted}
                  onChange={() => handleIsDone(item.id)}
                />
                <input
                  type="text"
                  className={
                    item.isCompleted
                      ? "input border-none text-center w-9/12 line-through"
                      : "input border-none text-center w-9/12"
                  }
                  defaultValue={item.name}
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
