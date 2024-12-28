export default function HaroldPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Welcome to Harold's Page
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Explore the details of Harold, a machine learning app built with Python and Flask.
          </p>
        </header>

        {/* Content Section */}
        <section className="bg-white rounded-lg shadow-md p-8 md:p-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            About Harold
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Harold is a cutting-edge machine learning application designed to simplify complex tasks 
            using Python and Flask. It leverages advanced algorithms to analyze data and deliver insightful predictions.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Key Features
          </h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Built using Python and Flask for robust backend performance.</li>
            <li>Integrates with modern machine learning libraries like TensorFlow and scikit-learn.</li>
            <li>User-friendly interface for seamless interaction.</li>
            <li>Real-time data analysis and insights.</li>
          </ul>
        </section>

        {/* Call-to-Action Section */}
        <section className="mt-12 text-center">
          <a
            href="#"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
          >
            Learn More About Machine Learning
          </a>
        </section>
      </div>
    </div>
  );
}
