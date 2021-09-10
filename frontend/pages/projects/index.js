import React, { Fragment, useState, useContext, useEffect } from "react";
import Navbar from "../../components/Navbars/Navbar";
import ProjectCard from "../../components/cards/ProjectCard";
import { PlusIcon } from "@heroicons/react/outline";
import { projectData } from "../../data/projectData";
import Link from "next/link";
import { UserContext } from "../../contexts/UserContext";
import { Dialog, Transition } from "@headlessui/react";
import { getAllProjects } from "../../lib/projects";
import { redirectHomePage } from "lib/redirect";
import DummyCard from "components/cards/DummyCard";

const projects = (props) => {
  const { userInfo, setUserInfo } = useContext(UserContext);

  const [projects, setProjects] = useState([])

  // useEffect(() => {
  //   setUserInfo({ ...userInfo, projects: projectData });
  // }, []);

  useEffect(() => {
    setProjects(projects.concat(props.data.do_tasks, props.data.set_tasks))
  },[])

  // console.log(userInfo);
  console.log(props.data);
  console.log(projects)

  redirectHomePage({ userInfo });

  // if (!userInfo) return null;


  return (
    <div className="layout-container">
      <Navbar />
      <main className="main-section overflow-y-scroll bg-coolGray-500">
        <div className="cardWrapper lg:mt-8">
          <DummyCard
            userInfo={userInfo}
            projects={projects}
            setProjects={setProjects}
          />
          {projects &&
            projects.map((data) => <ProjectCard key={data.id} data={data} />)}
        </div>
      </main>
    </div>
  );
};

export default projects;

export const getServerSideProps = async (context) => {
  const data = await getAllProjects(context);
  return {
    props: {
      data,
    },
  };
};
