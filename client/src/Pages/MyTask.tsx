import React from "react";
import { Link, Links } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

const MyTask: React.FC = () => {
  return (
    <div className="flex flex-col gap-5 py-15 px-20 bg-[#FAF9FB] border-[#EDEDED] border-[3px] rounded-2xl">
      <div className="flex justify-between ">
        <h3 className=" text-medium text-[50px]">My Tasks</h3>

        <Link
          to="/NewTask"
          className="flex items-center text-[#974FD0] text-medium text-[22px]"
        >
          <FaPlus />
          Add New Task
        </Link>
      </div>

      <div className="flex justify-between">
        <h3 className="text-[24px] text-[#F38383]">Urgent</h3>
        <div className="flex gap-2 ">
          
            <Link to="/EditTask" className="flex items-center gap-1 font-medium text-[24px] rounded-md bg-[#974FD0] px-6.25 py-2.5 text-[#FAF9FB]">
              <FaRegEdit />
              Edit
            </Link>


         
            <button className="flex items-center gap-1 font-medium text-[24px] text-[#974FD0] border border-[#974FD0] py-2 px-4 rounded-md">
              <FaRegTrashAlt />
              Delete
            </button>

        </div>
      </div>
      <hr className="text-[#B8B6B6]"/>

      <div className="flex flex-col text-start w-269">
        <h3 className="text-[35px] font-medium ]">FinTech Website Update</h3>
        <p className="text-[#737171] font-normal text-[24px] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis nibh posuere non tempor. Erat mattis gravida pulvinar nibh aliquam faucibus et magna. Interdum eu tempus ultricies cras neque mi. Eget tellus suspendisse et viverra.</p>
      </div>
    </div>
  );
};

export default MyTask;
