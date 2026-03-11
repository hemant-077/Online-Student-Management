const Home = () => {
  return (
    <section className="min-h-[calc(100vh-64px)] bg-gray-950">
      
      {/* Hero / Welcome Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Student Management System
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
          Your centralized platform for managing students efficiently,
          securely, and professionally.
        </p>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Key Features
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <FeatureCard
            title="Student Records"
            description="Add, update, view, and manage student information easily."
          />

          <FeatureCard
            title="Attendance Tracking"
            description="Monitor attendance percentage and performance."
          />

          <FeatureCard
            title="Grades & Performance"
            description="Track grades, CGPA, and academic progress."
          />

          <FeatureCard
            title="Communication"
            description="Connect with students and parents seamlessly."
          />

        </div>
      </div>
    </section>
  );
};

/* Reusable Feature Card */
const FeatureCard = ({ title, description }) => (
  <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl hover:border-blue-500 transition">
    <h3 className="text-lg font-semibold text-white mb-2">
      {title}
    </h3>
    <p className="text-gray-400 text-sm">
      {description}
    </p>
  </div>
);

export default Home;
