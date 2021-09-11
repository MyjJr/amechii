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
import { getProductTasks } from "lib/projects";

const people = [
  { id: 1, name: "Durward Reynolds", unavailable: false },
  { id: 2, name: "Kenton Towne", unavailable: false },
  { id: 3, name: "Therese Wunsch", unavailable: false },
  { id: 4, name: "Benedict Kessler", unavailable: true },
  { id: 5, name: "Katelyn Rohan", unavailable: false },
];

const Project = (props) => {
  const router = useRouter();
  // const { id } = router.query;

  const [projectData, setProjectData] = useState()

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
      <main className="main-section overflow-y-scroll bg-coolGray-500">
        <div className="h-full w-full flex flex-col justify-center items-center">
          <ProjectPaymentModal isOpen={isOpen} handleOpen={handleOpen} projectData={projectData} userInfo={userInfo} />
          <div
            className="bg-white shadow-lg rounded-lg"
            style={{ height: "90%", width: "90%" }}
          >
            <div className="flex flex-col lg:flex-row items-center justify-center h-full w-full lg:p-3">
              <ProductsSection projectData={projectData} />
              <div className="rounded h-full flex flex-col justify-center items-center lg:w-7/12">
                <TasksSection projectData={projectData} setProjectData={setProjectData} userInfo={userInfo} />
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
  const data = await getProductTasks({ id: Number(id), context });
  console.log(data)
  return {
    props: {
      data,
    },
  };
};
