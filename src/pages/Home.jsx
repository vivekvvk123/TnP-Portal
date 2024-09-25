import React from 'react';

const images = [
  '/path/to/handshake.jpg', // Replace with actual image paths
  '/path/to/group-meeting.jpg',
  '/path/to/graduate.jpg',
  '/path/to/student-working.jpg',
];

export default function Home() {
  return (
    <div className="bg-white">
      <header className="py-4 px-8 bg-white shadow-sm">
        <div className="container mx-auto flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-blue-600">
            {/* Replace with your logo */}
            <span className="font-extrabold">C</span>ampus<span className="font-extrabold">P</span>lacement<span className="font-extrabold">P</span>ro
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Welcome to <br /> CampusPlacementPro
          </h1>
          <p className="text-gray-600 mb-6">
            Discover a world of opportunities with our comprehensive placement
            support. Your career starts here.
          </p>
          <div className="flex space-x-4">
            <a
              href="/learn-more"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg"
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
              className="rounded-lg shadow-md"
            />
          ))}
        </div>
      </section>
    </div>
  );
}