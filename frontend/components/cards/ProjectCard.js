import React from "react";
import Link from "next/link";
import Image from "next/image";
// bg-primary text-primary-content

//

const ProjectCard = ({ data }) => {
  console.log(data);
  return (
    <div className="card mt-6 lg:card-side shadow-lg" style={{ width: "55vw" }}>
      <figure className="p-8">
        <Image
          src={
            data.items[0]
              ? `http://amechii.jp/image/icon/${data.items[0].items.image}`
              : "https://placehold.jp/150x150.png"
          }
          width={190}
          height={170}
          className="rounded-lg shadow-lg"
        />
      </figure>
      ​
      <div className="max-w-md card-body">
        <h2 className="card-title">
          {data.title}
          <span className="ml-3 px-4 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            {data.status}
          </span>
        </h2>
        <div className="avatar">
          <div className="mb-2 rounded-full w-8 h-8">
            <img src={`http://amechii.jp/image/icon/${data.set_user.icon}`} />
          </div>
        </div>
        <p>作成者：{data.set_user.display_name}</p>
        <p>期限：{data.deadline}</p>
        <div className="card-actions">
          <Link href={`/projects/${data.id}`}>
            <a className="rounded-full">詳細を見る</a>
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 ml-1 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </div>
      </div>
    </div>

    // //   <div className="card lg:card-side glass hover:bg-primary text-primary-content m-3 cardStyle">
    // <div className="card glass lg:card-side text-neutral-content m-3 cardStyle">
    //   <figure className="p-6">
    //     {/* <img src={`http://amechii.jp/image/icon/${data.items[0].items.image}`} className="rounded-lg shadow-lg" /> */}
    //     <Image
    //       src={data.items[0] ? `http://amechii.jp/image/icon/${data.items[0].items.image}` : "https://placehold.jp/150x150.png"}
    //       width={170}
    //       height={170}
    //       className="rounded-lg shadow-lg"
    //     />
    //   </figure>
    //   <div className="card-body">
    //     <h2 className="card-title">{data.title}</h2>
    //     <p>{data.memo}</p>
    //     <div className="card-actions ml-auto">
    //       <Link href={`/projects/${data.id}`}>
    //         <a className="btn glass rounded-full">詳細を見る</a>
    //       </Link>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ProjectCard;
