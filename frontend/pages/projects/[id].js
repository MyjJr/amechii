// import React, {useState, useEffect} from 'react'
import { useRouter } from "next/router";
import Link from "next/link";
import { projectData } from "../../data/projectData";
import { Dialog, Transition, Switch, Listbox } from "@headlessui/react";
import { Fragment, useState, useEffect, useRef, useContext } from "react";
import { PlusIcon, TrashIcon } from "@heroicons/react/outline";
// import ProjectForm from "../../components/forms/ProjectForm";
import ProjectCreateForm from "../../components/forms/ProjectCreateForm";
import { UserContext } from "../../contexts/UserContext";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import Navbar from "../../components/Navbars/Navbar";
import ProductsSection from "../../components/projectComponents/ProductsSection";
import TasksSection from "../../components/projectComponents/TasksSection";
import ProjectPaymentModal from "../../components/modal/ProjectPaymentModal";
import { handleGetProjectTasks } from "lib/projects";

const Project = (props) => {
  const router = useRouter();

  const [projectData, setProjectData] = useState();

  const { userInfo, setUserInfo } = useContext(UserContext);

  const [isOpen, setIsOpen] = useState(false);

  // return <ProjectCreateForm />;
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setProjectData(props.data);
  }, []);

  if (!projectData) return <ProjectCreateForm />;

  return (
    <div className="layout-container">
      <Navbar />
      <main className="main-section overflow-y-scroll bg-white">
        <div className="h-full w-full flex flex-col justify-center items-center">
          <ProjectPaymentModal
            isOpen={isOpen}
            handleOpen={handleOpen}
            projectData={projectData}
            userInfo={userInfo}
          />
          <div
            className="bg-white shadow-lg rounded-lg"
            style={{ height: "80%", width: "80%" }}
          >
            <div className="flex flex-col lg:flex-row items-center justify-center h-full w-full lg:p-3">
              <ProductsSection projectData={projectData} userInfo={userInfo} />
              <div className="rounded h-full flex flex-col justify-center items-center lg:w-7/12">
                <TasksSection
                  projectData={projectData}
                  setProjectData={setProjectData}
                  userInfo={userInfo}
                />
                <div className="flex justify-end items-center border-gray-300 w-full lg:h-1/6 ">
                  <button
                    onClick={handleOpen}
                    class="btn btn-accent btn-active"
                    role="button"
                    aria-pressed="true"
                  >
                    次へ
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Project;

export const getServerSideProps = async (context) => {
  const { id } = context.query;

  const data = await handleGetProjectTasks({ id: Number(id), context });
  return {
    props: {
      data,
    },
  };
};
