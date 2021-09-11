import React, { Fragment, useState, useContext, useEffect } from "react";
import Navbar from "../../components/Navbars/Navbar";
import ProjectCard from "../../components/cards/ProjectCard";
import { PlusIcon } from "@heroicons/react/outline";
import { projectData } from "../../data/projectData";
import Link from "next/link";
import { UserContext } from "../../contexts/UserContext";
import { Dialog, Transition } from "@headlessui/react";
import { redirectHomePage } from "lib/redirect";
import DummyCard from "components/cards/DummyCard";
import { handleGetAllProjects } from "lib/projects";

const projects = (props) => {
  const { userInfo, setUserInfo } = useContext(UserContext);

  const [projects, setProjects] = useState([]);

  if (!userInfo.access_token) return null;

  useEffect(() => {
    const projectsData = projects.concat(
      props.data.do_tasks,
      props.data.set_tasks
    );
    setProjects(projectsData);
  }, []);

  const filteredObject = ({ projects }) => {
    const data = projects.filter(
      (item, index, array) =>
        array.findIndex((nextItem) => item.id === nextItem.id) === index
    );
    return data;
  };

  redirectHomePage({ userInfo });

  return (
    <div className="layout-container">
      <Navbar />
      <main className="main-section overflow-y-scroll bg-white">
        <div className="cardWrapper lg:mt-8">
          <DummyCard
            userInfo={userInfo}
            projects={projects}
            setProjects={setProjects}
          />
          {projects &&
            filteredObject({ projects })
              .sort((a, b) => (a < b ? 1 : -1))
              .map((data) => <ProjectCard key={data.id} data={data} />)}
        </div>
      </main>
    </div>
  );
};

export default projects;

export const getServerSideProps = async (context) => {
  const data = await handleGetAllProjects(context);

  return {
    props: {
      data,
    },
  };
};
