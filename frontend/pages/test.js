import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";

const test = () => {
  return (
    <div className="flex items-center w-full px-4 py-10 card bg-white">
​
​
        <div className="card mt-6 lg:card-side shadow-lg">
            <figure className="p-6">
                <img src="https://picsum.photos/id/1005/300/200" className="rounded-lg shadow-lg"/>
            </figure>
​
            <div className="max-w-md card-body">
                <h2 className="card-title">
                    大学に合格
                    {/* 完了 */}
                    <span className="ml-3 px-4 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Finished</span>
                    {/* 完了 */}
                </h2>
                <div className="avatar">
                    <div className="mb-2 rounded-full w-8 h-8">
                        <img src="http://daisyui.com/tailwind-css-component-profile-1@40w.png"/>
                    </div>
                </div>
                <p>作成者：〇〇</p>
                <p>期限：〇〇月〇〇日〇〇時〇〇分</p>
                
        
​
                <div className="card-actions">
                    <button className="hover:opacity-75">
                        詳細を見る    
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 ml-1 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7"></path></svg>
                    </button>
                </div>
            </div>  
        </div>
​
​
        <div className="card mt-6 lg:card-side shadow-lg">
            <figure className="p-6">
                <img src="https://picsum.photos/id/1005/300/200" className="rounded-lg shadow-lg"/>
            </figure>
​
            <div className="max-w-md card-body">
                <h2 className="card-title">
                    大学に合格
                    {/* アクティブ */}
                    <span className="ml-3 px-4 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">Active</span>
                    {/* アクティブ */}
                </h2>
                <div class="avatar">
                    <div class="mb-2 rounded-full w-8 h-8">
                        <img src="http://daisyui.com/tailwind-css-component-profile-1@40w.png"/>
                    </div>
                </div>
                <p>作成者：〇〇</p>
                <p>期限：〇〇月〇〇日〇〇時〇〇分</p>
                <div className="card-actions">
                    <button className="hover:opacity-75">
                        詳細を見る    
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 ml-1 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7"></path></svg>
                    </button>
                </div>
            </div>  
        </div>
​

    </div>
  );

};

test.layout = BaseLayout;

export default test;
