import React, { Fragment, useState, useContext, useEffect } from "react";
import Navbar from "../../components/Navbars/Navbar";
import ProjectCard from "../../components/cards/ProjectCard";
import { PlusIcon } from "@heroicons/react/outline";
import { projectData } from "../../data/projectData";
import Link from "next/link";
import { UserContext } from "../../contexts/UserContext";
import { Dialog, Transition } from "@headlessui/react";
import ProjectModal from "../../components/modal/ProjectModal";
import { getAllProjects } from "../../lib/projects";

const DummyCard = (props) => {
  const [projectTitle, setProjectTitle] = useState("");

  const temp = {
    id: props.projectData.length + 1,
    title: projectTitle,
    status: "success",
    imageURL: "http://placehold.it/200",
    products: [
      {
        name: "",
        price: "",
        imageURL: "http://placehold.it/200",
      },
    ],
    tasks: [],
    memo: "",
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="cardStyle m-3 border-4 border-dashed border-gray-200 rounded-xl flex justify-center items-center">
        <div
          className="flex items-center p-3 cursor-pointer text-white hover:text-gray-200"
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
            // disabled
            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
            onClick={() => {
              handleOpen();
              props.setUserInfo({
                ...props.userInfo,
                projects: [...props.userInfo.projects, temp],
              });
            }}
          >
            作成する
          </button>
        </div>
      </ProjectModal>
    </>
  );
};

const projects = (props) => {
  const { userInfo, setUserInfo } = useContext(UserContext);

  // useEffect(() => {
  //   setUserInfo({ ...userInfo, projects: projectData });
  // }, []);

  console.log(userInfo);

  // console.log(props)

  if (!userInfo) return null;

  return (
    <div className="layout-container">
      <Navbar />
      <main className="main-section overflow-y-scroll bg-coolGray-500">
        <div className="cardWrapper lg:mt-8">
          <DummyCard
            projectData={projectData}
            userInfo={userInfo}
            setUserInfo={setUserInfo}
          />
          {userInfo.projects &&
            userInfo.projects.map((data) => (
              <ProjectCard key={data.id} data={data} />
            ))}
        </div>
      </main>
    </div>
  );
};

export default projects;

// export const getServerSideProps = async (context) => {
//   // const { data, parsedCookies } = await getUserData(context);

//   const data = await getAllProjects(context)

//   return {
//     props: {
//       data
//     },
//   };
// };
