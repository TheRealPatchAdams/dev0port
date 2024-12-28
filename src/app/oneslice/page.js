export default function OneSlicePage() {
    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          {/* Header Section */}
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
              Welcome to Project One Slice
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Dive into the details of this innovative React + Node.js project designed for efficiency and scalability.
            </p>
          </header>
  
          {/* About Section */}
          <section className="bg-white rounded-lg shadow-md p-8 md:p-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">About One Slice</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Project One Slice is a modern web application built with React and Node.js to demonstrate seamless
              integration between the front-end and back-end. Designed for speed, simplicity, and scalability, this project
              is a testament to efficient web development.
            </p>
  
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Features</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>React for dynamic, component-based UI development.</li>
              <li>Node.js for a robust and scalable back-end architecture.</li>
              <li>REST API integration for seamless data flow.</li>
              <li>Responsive design for mobile, tablet, and desktop users.</li>
            </ul>
          </section>
  
          {/* Call-to-Action Section */}
          <section className="mt-12 text-center">
            <a
              href="https://github.com/your-repo/project-one-slice"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
            >
              View on GitHub
            </a>
          </section>
        </div>
      </div>
    );
  }
  