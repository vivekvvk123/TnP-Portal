import React from "react";
import certificateCourses from "../assets/certificateCourses.json";

function CertificationPrograms() {
  return (
    <div className="max-w-[1200px] mb-6 mt-5 flex pb-5 flex-col border border-gray-200 rounded-md justify-center items-center mx-auto px-4 bg-white shadow-md">
      <h1 className="text-3xl m-2 text-gray-900">Certificates And Courses</h1>
      <div className="grid md:grid-cols-3 mt-8 justify-center gap-5 items-center mx-auto">
        {certificateCourses?.map((item) => {
          return (
            <div className="flex bg-white justify-center items-center p-4 rounded-md border border-gray-200 shadow shadow-gray-200 gap-3 w-[335px] mx-auto">
              <div className="flex flex-col w-[40%] justify-center items-center mx-auto gap-4">
                <img src={item?.img_url} alt="" width="80px" />
                <h1 className="text-gray-800">{item?.company_name}</h1>
              </div>
              <div className="w-[1px] bg-gray-300 h-[120px]"></div>
              <div className="flex flex-col w-[52%] justify-center items-center mx-auto gap-4">
                <div className="flex flex-col justify-center items-center mx-auto gap-4">
                  <p className="text-[15px] text-gray-700">
                    {item?.course_name}
                  </p>
                </div>
                <a
                  href={item?.link}
                  className="bg-blue-500 text-white px-5 text-xl hover:bg-blue-600 py-1 rounded-md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Link
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CertificationPrograms;
