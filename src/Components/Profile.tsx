import Image from "next/image";
import React from "react";
import profilePic from "../../public/profile-pic.jpg";
import { AiFillInstagram } from "react-icons/ai";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";

import { MdFacebook } from "react-icons/md";

const Profile = () => {
  return (
    <div className="flex flex-col items-center bg-white lg:w-[22rem] md:w-80 w-72 h-auto rounded-4xl shadow-xl">
      <div className="bg-secondary h-40 w-full rounded-t-4xl flex justify-center items-center">
        <Image
          src={profilePic}
          width={150}
          height={150}
          alt="profile-pic"
          className="rounded-full w-24 h-24 object-cover"
        />
      </div>
      <div className="flex flex-col items-center mt-6">
        <p className="text-2xl font-semibold font-mono tracking-wider text-zinc-700">
          Johnny Rodgers
        </p>
        <p className="text-xs text-zinc-500 font-semibold tracking-tight mt-1">
          @jonnyrodgers
        </p>
      </div>
      <div className="flex justify-between w-60 mt-6">
        <MdFacebook size={26} />
        <RiLinkedinBoxFill size={26} />
        <AiFillInstagram size={26} />
        <FaXTwitter size={26} />
        <TbWorld size={26} />
      </div>
      <p className="text-sm text-zinc-800 font-semibold mt-8 px-6  text-center">
        Crafting brand and communications strategies, creating visual designs,
        leading art direction, and capturing portraits through photography.{" "}
      </p>
      <div className="flex justify-between items-center w-full mt-10 px-8 pb-10">
        <button className="bg-accent lg:w-32 md:w-28 w-24 h-10 rounded-full text-white font-semibold">
          Follow
        </button>{" "}
        <button className="lg:w-32 md:w-28 w-24 h-10 rounded-full border-2 border-zinc-400 text-zinc-400 font-semibold">
          Message
        </button>
      </div>
    </div>
  );
};

export default Profile;
