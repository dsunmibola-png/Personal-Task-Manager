import React from "react";
import { GrFormPrevious } from "react-icons/gr";

const NewTask: React.FC = () => {
  
  return (
    <div>
      <div className="flex flex-col items-start gap-3 pt-7 bg-[#FAF9FB] border-[#EDEDED] border-[3px] rounded-2xl">
        <h4 className="flex items-center text-[50px]">
          <GrFormPrevious />
          New Task
        </h4>
        <div className="w-full rounded-xs shadow-xs flex flex-col gap-5">
          <fieldset className="border border-[#B8B6B6] rounded-md px-4 pb-4 pt-1 mt-8">
            <legend className="text-start ml-2 text-[30px] font-normal text-[#9C9C9C]">
              Task Title
            </legend>
            <input
              type="text"
              placeholder="E.g Project Defense, Assignment ..."
              className="text-black placeholder:text-[#CCCCCC] w-full outline-none bg-white"
            />
          </fieldset>

          <fieldset className="border border-[#B8B6B6] rounded-md px-4 pb-4 pt-1 mt-8">
            <legend className="text-start ml-2 text-[30px] font-normal text-[#9C9C9C]">
              Description
            </legend>
            <input
              type="text"
              placeholder="Briefly describe your task..."
              className=" text-black placeholder:text-[#CCCCCC] w-full outline-none min-h-30 pb-40 bg-white"
            />
          </fieldset>

          <fieldset className="border border-[#B8B6B6] rounded-md px-4 pb-4 pt-1 mt-8">
            <legend className="text-start ml-2 text-[30px] font-normal text-[#9C9C9C]">
              Tags
            </legend>

            <details className="relative group">
              {/* Dropdown Button */}
              <summary className="list-none flex items-center justify-between border border-gray-300 rounded-md px-4 py-3 cursor-pointer bg-white">
                <span className="text-gray-500">Select Tag</span>

                {/* Arrow */}
                <svg
                  className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>

              {/* Dropdown Content */}
              <div className="absolute left-0 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-md z-10">
                <label className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer">
                  <input
                    type="radio"
                    name="tag"
                    className="accent-purple-600"
                  />
                  <span>Urgent</span>
                </label>

                <label className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer">
                  <input
                    type="radio"
                    name="tag"
                    className="accent-purple-600"
                  />
                  <span>Important</span>
                </label>
              </div>
            </details>
          </fieldset>

          <button className="bg-[#974FD0] py-2.5 text-[#FAF9FB] rounded-lg text-[35px] font-medium">
            Done
          </button>

          <a href="#top" className="underline text-[#974FD0]">Back to Top</a>
        </div>
      </div>
    </div>
  );
};

export default NewTask;