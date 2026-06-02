import React from "react";
import { Link } from "react-router-dom";
import covering from "../assets/Images/Component 1.png"

const CoverPage: React.FC = () => {
  return (
    <div  className="flex gap-4 items-center justify-center bg-[#FAF9FB] px-10 py-30">
      <div className="flex flex-col gap-5 px-5 py-10 text-start w-133.75">
        <h3 className="text-medium text-[50px]">Manage your Tasks on <span className="text-[#974FD0] text-medium text-[50px]">TaskDuty</span></h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non tellus, sapien, morbi ante nunc euismod ac felis ac. Massa et, at platea tempus duis non eget. Hendrerit tortor fermentum bibendum mi nisl semper porttitor. Nec accumsan.</p>

        <Link to="MyTask" className="w-fit py-2 px-4  rounded-md bg-[#974FD0] text-[#FAF9FB]">
        Go To My Tasks
        </Link>
      </div>

      <div>
        <img src={covering} alt="" />
      </div>
    </div>
  );
};

export default CoverPage;
