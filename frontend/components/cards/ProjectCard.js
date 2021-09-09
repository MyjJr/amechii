import React from "react";
import Link from "next/link";
// bg-primary text-primary-content

const ProjectCard = ({ data }) => {
  return (
    //   <div className="card lg:card-side glass hover:bg-primary text-primary-content m-3 cardStyle">
    <div className="card glass lg:card-side text-neutral-content m-3 cardStyle">
      <figure className="p-6">
        <img src={data.imageURL} className="rounded-lg shadow-lg" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{data.title}</h2>
        <p>{data.memo}</p>
        <div className="card-actions ml-auto">
          <Link href={`/projects/${data.id}`}>
            <a className="btn glass rounded-full">詳細を見る</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
