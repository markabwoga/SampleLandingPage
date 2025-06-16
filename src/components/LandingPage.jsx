import Accordion from "./Accordion";


export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-100 to-gray-200 px-4">
      {/* Logo */}
      

      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-2 text-center">
        Welcome to the School of Code
      </h1>

      {/* Subheading */}
      <p className="text-lg sm:text-xl text-gray-600 text-center mb-6">
        Learn. Build. Launch. Your coding journey starts here.
      </p>

      {/* Call to Action */}
      <div className="space-x-4">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
          Get Started
        </button>
        <button className="bg-white border border-gray-300 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-100 transition">
          Learn More
        </button>
      </div>
    </div>
  );
}

