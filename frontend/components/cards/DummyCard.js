import React, { Fragment, useState, useContext, useEffect } from "react";
import { PlusIcon } from "@heroicons/react/outline";
import { projectData } from "../../data/projectData";
import Link from "next/link";
import { UserContext } from "../../contexts/UserContext";
import { Dialog, Transition } from "@headlessui/react";
import ProjectModal from "components/modal/ProjectModal";
import { createProject } from "lib/projects";

const DummyCard = ({userInfo, projects  ,setProjects}) => {
    const [projectTitle, setProjectTitle] = useState("");

    console.log(userInfo)
    const [isOpen, setIsOpen] = useState(false);
  
    const handleOpen = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <>
        <div className="cardStyle m-3 border-4 border-dashed border-gray-400 rounded-xl flex justify-center items-center">
          <div
            className="flex items-center p-3 cursor-pointer text-gray-400 hover:text-gray-200"
            onClick={handleOpen}
          >
            <PlusIcon className="h-5 w-5" />
            <p className="p-2">New Project</p>
          </div>
        </div>
        <ProjectModal
          title="Project Title"
          isOpen={isOpen}
          handleOpen={handleOpen}
        >
          <div className="mt-2">
            <div className="p-10 card bg-base-200">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="title"
                  className="input"
                  onChange={(e) => setProjectTitle(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <button
              type="button"
              className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
              onClick={async () => {
                const newProject = await createProject({ cookies: userInfo, title: projectTitle })
                setProjects([...projects, newProject])                
                setProjectTitle('')
                handleOpen()
              }}
            >
              作成する
            </button>
          </div>
        </ProjectModal>
      </>
    );
  };
  

export default DummyCard
