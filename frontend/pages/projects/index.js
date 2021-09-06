import React from "react";
import Navbar from "../../components/Navbars/Navbar";
import ProjectCard from "../../components/cards/ProjectCard";
import { PlusIcon } from "@heroicons/react/outline";
import { projectData } from "../../data/projectData";

const DummyCard = () => {
  return (
    <div className="cardStyle m-3 border-4 border-dashed border-gray-200 rounded-xl flex justify-center items-center">
      <div className="flex items-center p-3 cursor-pointer text-white hover:text-gray-200">
        <PlusIcon className="h-5 w-5" />
        <p className="pl-2">New Projects</p>
      </div>
    </div>
  );
};

const projects = ({ projects }) => {
  return (
    <div className="layout-container">
      <Navbar />
      <main className="main-section overflow-y-scroll bg-gradient-to-r from-teal-400 to-blue-500">
        <div class="cardWrapper lg:mt-8">
          <DummyCard />
          {projects.map((data) => (
            <ProjectCard key={data.id} data={data} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default projects;

export async function getStaticProps() {
  const projects = await projectData;
  return {
    props: { projects },
    revalidate: 3,
  };
}
