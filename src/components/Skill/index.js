import * as React from "react";
//icon
import { DiJavascript1, DiReact, DiGithubBadge, DiJava, DiMongodb, DiMysql,DiHtml5,DiCss3 } from "react-icons/di";
import {IoLogoNodejs} from "react-icons/io"

let skillset = [
    { name: "HTML", icons: <DiHtml5 />},
    { name: "CSS", icons: <DiCss3 /> },
    { name: "Javascript", icons: <DiJavascript1 /> },
    { name: "React", icons: <DiReact /> },
    { name: "Node", icons: <IoLogoNodejs /> },
     { name: "Git", icons: <DiGithubBadge /> },
     { name: "Java", icons: <DiJava /> },
     { name: "MongoDB", icons: <DiMongodb /> },
     { name: "MySQL", icons: <DiMysql /> }
];

export default function Skill() {
  return (
    <div id="skill" className="md:col-span-2">
      <div className="font-black bg-purple-800 bg-clip-padding shadow-lg rounded-3xl bg-opacity-10 border border-gray-200 backdrop-filter backdrop-blur-xl p-4 text-2xl md:text-3xl text-cust-cyan text-center font-sans m-3" data-aos="zoom-in">
          Techstack
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 text-xl md:text-2xl gap-4 p-3">
            {skillset.map((({name, icons}, idx) => {
                return( 
                  <div data-aos="zoom-in" key={idx}>
                    <div key={idx} className="border flex flex-col justify-between items-center
                    border-gray-200 bg-clip-padding bg-white shadow-lg rounded-3xl bg-opacity-10 backdrop-filter backdrop-blur-xl p-4
                    transform hover:scale-105 hover:bg-opacity-10 transition duration-300 group"
                    >
                        <div className={`mb-2`}>{name}</div>
                        <div className={`text-3xl md:text-5xl`}>{icons}</div>
                    </div>
                  </div>
                )
            }))}
      </div>     
    </div>
  );
}
