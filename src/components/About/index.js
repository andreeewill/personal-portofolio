import * as React from "react";
import Tilt from "react-tilt";
//component
//ui
import who from "../../asset/who.svg";

export default function About() {
  return (
    <>
      <div className="place-self-center text-2xl md:text-3xl text-cust-cyan font-sans">  
          <Tilt options={{ max: 35 }}>
            <img src={who} alt="question" />
          </Tilt>  
      </div>
      <div className=" p-4 font-sans md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3 text-xl md:text-2xl text-justify flex flex-col justify-evenly text-pink-100">
        <p className="block leading-normal md:leading-loose indent-sm md:indent-md">
          Hello there, my name is Andre William and I am 20 years old. While studying in my 4th semester in the Computer Science field, I have done many projects in web development using modern web technologies/languages and frameworks such as Javascript, ReactJS, NodeJS, Laravel, and many more. Beside of web applications, I'm interested in artificial intelligence and database management. While doing any tasks/projects, i always try to write clean codes and doing the best practices.
        </p>
      </div>
    </>
  );
}
