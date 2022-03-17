import React from "react";
import Link from "next/link";

import profile from "../../public/images/pic.svg";
import git from "../../public/images/profile/git.svg";
import facebook from "../../public/images/profile/facebook.svg";
import book from "../../public/images/nav/book.svg";
import contact from "../../public/images/profile/contact.svg";
import SkillsCard from "./SkillsCard";

function ProfileCard() {
  return (
    <div className="text-[#1e214d]  bg-white rounded-2xl h-[75vh] px-5">
      <div className="grid grid-cols-2 pt-5 ">
        <div className="flex flex-col justify-center items-start">
          <div className="text-5xl font-bold my-2">John</div>
          <div className="text-3xl my-2">Full Stack Developer</div>
          <div className="flex my-2">
            <a href="https://www.github.com">
              <img src={git.src} alt="" className="" />
            </a>
            <a href="https://www.facebook.com">
              <img src={facebook.src} alt="" className="mx-5" />
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src={profile.src} alt="" className="h-[30vh]" />
        </div>
      </div>
      <div className="my-5 font-medium">
        Computer Science Engineering student with interest in Full Stack
        Development. Creating the architecture of a front-end website, and
        web page user interactions excites me. Creating website applications for the back
        end. For functionality, servers and databases are one of my speciality. I always ensure mobile
        phone cross-platform optimization.
      </div>

      <div className="grid grid-cols-2 gap-1 my-5">
        <div className="">
          <div className="text-3xl font-bold">Skills</div>
          <div className="grid grid-cols-5 gap-2 my-4">
            <SkillsCard title="HTML" />
            <SkillsCard title="CSS" />
            <SkillsCard title="JavaScript" />
            <SkillsCard title="Nodejs" />
            <div className="flex justify-start items-center ">
              <button className="bg-[#1e214d] text-white px-2  rounded-full text-3xl font-bold">
                +
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <button className="px-8 py-2 mb-3 rounded-md bg-[#1e214d] text-white text-lg">
            Resume
            <img src={book.src} alt="" className="inline ml-4" />
          </button>
          <button className="px-8 py-2 mt-2 rounded-md bg-[#1e214d] text-white text-lg">
            Contact
            <img src={contact.src} alt="" className="inline ml-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
