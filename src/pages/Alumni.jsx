import React, { useState } from "react";
import AluminiaData from "../assets/alumniData.json";
import { AiFillLinkedin } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Alumni() {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter the alumni based on the search query
  const filteredAluminai = AluminiaData.filter((temp) =>
    temp.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const navigate = useNavigate();

  return (
    <>
      <div className="min-h-[100vh] font-mullish overflow-hidden px-6 bg-gray-100">
        <div className="max-w-[1400px] mx-auto mt-5">
          <input
            type="text"
            placeholder="Search by Name"
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md bg-white text-gray-800"
          />
        </div>

        <div className="max-w-[1400px] justify-center grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mx-auto pb-8 mt-4">
          {filteredAluminai?.map((temp) => {
            return (
              <a
                href={temp.linkedin_url}
                target="_blank"
                rel="noopener noreferrer"
                key={temp.name}
                className="rounded-md shadow-md hover:shadow-lg bg-white shadow-gray-300 flex justify-center items-center mx-auto w-[340px] h-[170px] gap-3 border border-gray-200"
              >
                <div className="w-[100px] h-[100px] rounded-full border border-blue-400 overflow-hidden">
                  <a
                    href={temp.image_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={temp.image_url}
                      alt=""
                      className="w-[100px] h-[100px] rounded-full"
                    />
                  </a>
                </div>
                <div className="flex w-[200px] flex-col justify-center items-center px-2">
                  <h1 className="text-xl mb-4 text-gray-900">{temp.name}</h1>
                  <div className="p-1 flex w-[170px] justify-evenly items-center gap-2 mx-auto">
                    <a
                      href={temp.linkedin_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiFillLinkedin size={35} className="text-blue-600" />
                    </a>
                    <h1 className="font-bold text-lg bg-blue-100 text-blue-600 rounded-md p-1 px-2">
                      {temp.company}
                    </h1>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Alumni;
