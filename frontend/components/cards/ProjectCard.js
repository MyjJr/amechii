import React from "react";
import Link from "next/link";
import Image from "next/image";
// bg-primary text-primary-content

//

const ProjectCard = ({ data }) => {
  console.log(data);
  return (
    //   <div className="card lg:card-side glass hover:bg-primary text-primary-content m-3 cardStyle">
    <div className="card glass lg:card-side text-neutral-content m-3 cardStyle">
      <figure className="p-6">
        {/* <img src={`http://amechii.jp/image/icon/${data.items[0].items.image}`} className="rounded-lg shadow-lg" /> */}
        <Image
          src={data.items[0] ? `http://amechii.jp/image/icon/${data.items[0].items.image}` : "https://placehold.jp/150x150.png"}
          width={170}
          height={170}
          className="rounded-lg shadow-lg"
        />
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
