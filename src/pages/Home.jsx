import React from "react";
import college_convocation from "../assets/college_convocation.jpg";
import group_meeting from "../assets/group_meeting.png";
import college_student from "../assets/college_student.jpg";
import focused_indian_student from "../assets/focused_indian_student.jpg";


const images = [
  college_student,
  college_convocation, 
  group_meeting,
  focused_indian_student
];

export default function Home() {
  return (
    <div className="">
      <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div></div>
      <header className="py-4 px-8 bg-white shadow-sm">
        <div className="container mx-auto flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-blue-600">  
            <span className="font-extrabold">P</span>lacify
          </a>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="/" className="text-gray-800 hover:text-blue-600">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-800 hover:text-blue-600">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-800 hover:text-blue-600"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="container mx-auto py-16 px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-8 text-left">
            Welcome to <br /> Placify
          </h1>
          <p className="text-gray-600 mb-1 text-clip">
            Discover a world of opportunities with our comprehensive </p> <p> placement
            support. Your career starts here.
          </p>
          <div className="flex space-x-4 mt-10">
            <a
              href="/"
              className="bg-orange-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg"
            >
              Learn More
            </a>
            <a
              href="/contact"
              className="bg-transparent hover:bg-gray-100 text-blue-600 border border-blue-600 hover:text-blue-700 font-bold py-3 px-6 rounded-lg"
            >
              Contact Us →
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Campus Placement ${index + 1}`}
             className="rounded-lg shadow-md h-60"
             />
          ))}
        </div>
      </section>

      <section className="bg-[#1b4af114] py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#421bf0] rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300 ease-in-out">
              <h3 className="text-2xl font-bold text-white mb-4">Career Counseling</h3>
              <p className="text-gray-200 mb-6">
                Our team of experienced career counselors provides personalized guidance to help you make informed
                decisions about your future.
              </p>
              <a
                href="#"
                className="text-[#a5b4fc] font-medium hover:text-[#c4d2ff] transition duration-300 ease-in-out"
              >
                Learn More <span className="ml-2">→</span>
              </a>
            </div>
            <div className="bg-[#421bf0] rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300 ease-in-out">
              <h3 className="text-2xl font-bold text-white mb-4">Interview Preparation</h3>
              <p className="text-gray-200 mb-6">
                We offer comprehensive interview preparation services, including mock interviews, feedback, and
                strategies to help you ace your interviews.
              </p>
              <a
                href="#"
                className="text-[#a5b4fc] font-medium hover:text-[#c4d2ff] transition duration-300 ease-in-out"
              >
                Learn More <span className="ml-2">→</span>
              </a>
            </div>
            <div className="bg-[#421bf0] rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300 ease-in-out">
              <h3 className="text-2xl font-bold text-white mb-4">Employer Connections</h3>
              <p className="text-gray-200 mb-6">
                Our extensive network of industry partners and alumni connections provides you with unparalleled
                placement opportunities.
              </p>
              <a
                href="#"
                className="text-[#a5b4fc] font-medium hover:text-[#c4d2ff] transition duration-300 ease-in-out"
              >
                Learn More <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#421bf0] text-white py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-bold mb-4">About Us</h4>
              <p className="text-gray-200 mb-6">
                Placify is a leading provider of comprehensive placement support services, helping students
                and graduates achieve their career goals.
              </p>
              <a
                href="#"
                className="text-[#a5b4fc] font-medium hover:text-[#c4d2ff] transition duration-300 ease-in-out"
              >
                Learn More
              </a>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-200 hover:text-white transition duration-300 ease-in-out">
                    Personalized Guidance
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-200 hover:text-white transition duration-300 ease-in-out">
                    Comprehensive Preparation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-200 hover:text-white transition duration-300 ease-in-out">
                    Extensive Network
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-200 hover:text-white transition duration-300 ease-in-out">
                    Career Counseling
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-200 hover:text-white transition duration-300 ease-in-out">
                    Interview Preparation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-200 hover:text-white transition duration-300 ease-in-out">
                    Employer Connections
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-200 hover:text-white transition duration-300 ease-in-out">
                    Email: info@placify.com
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-200 hover:text-white transition duration-300 ease-in-out">
                    Phone: +911234567890
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-200 hover:text-white transition duration-300 ease-in-out">
                    Address: IIIT Pune, Maharashtra
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-200 hover:text-white transition duration-300 ease-in-out">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 6.63 5.37 12 12 12 6.63 0 12-5.37 12-12 0-6.63-5.37-12-12-12zm3.54 11.54l-4.5 4.5a.75.75 0 01-1.06 0l-2.25-2.25a.75.75 0 011.06-1.06l1.72 1.72 3.97-3.97a.75.75 0 011.06 1.06z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-200 hover:text-white transition duration-300 ease-in-out">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 6.63 5.37 12 12 12 6.63 0 12-5.37 12-12 0-6.63-5.37-12-12-12zm3.54 11.54l-4.5 4.5a.75.75 0 01-1.06 0l-2.25-2.25a.75.75 0 011.06-1.06l1.72 1.72 3.97-3.97a.75.75 0 011.06 1.06z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-200 hover:text-white transition duration-300 ease-in-out">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
    </div>
  );
}