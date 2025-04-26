
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow flex items-center justify-center bg-gray-50 pt-20">
        <div className="text-center px-4 animate-fade-in">
          <h1 className="text-6xl font-bold mb-4 text-yuvan-blue">404</h1>
          <p className="text-xl text-gray-600 mb-8">Oops! This page is as crunchy as our snacks, but doesn't exist!</p>
          <Link to="/" className="bg-yuvan-blue hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
