import Layout from "../components/Layout";
import notFoundImage from "../assets/nf.png";  
const NotFound = () => {
  return (
    <Layout>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 text-center">
          {/* 404 Image */}
          <img 
            src={notFoundImage} 
            alt="404 Not Found" 
            className="w-[30rem] h-[26rem]" 
          />
          
          {/* Title */}
          <h1 className="text-5xl font-extrabold text-gray-900">404</h1>
          
          {/* Subtitle */}
          <h2 className="mt-2 text-2xl font-semibold text-gray-800">
            Page Not Found
          </h2>
          
          {/* Description */}
          <p className="mt-4 text-lg text-gray-600">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          
          {/* Back to Home Button */}
          <div className="mt-8">
            <a
              href="/"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors duration-300"
            >
              Go back home
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;