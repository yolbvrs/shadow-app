import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react'; // optional

const Signup = () => {
  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-10 text-center">
      
      {/* ← Home Button */}
      <Link 
        to="/" 
        className="absolute top-4 left-4 flex items-center text-gray-400 hover:text-white transition"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        <span className="text-sm font-medium">Home</span>
      </Link>

	<img 
  	src="public/shadow-icon.jpg" 
  	alt="SHADOW icon" 
  	className="w-24 h-24 mb-6 mx-auto object-cover rounded-full"
	/>

      {/* Content */}
      <h1 className="text-4xl font-bold mb-4 tracking-widest">SHADOW</h1>
      <p className="text-lg text-gray-300 max-w-xl mb-8">
        SHADOW is a secure, modern platform that connects verified security professionals to people and businesses in need of protection.
      </p>

      <div className="text-left max-w-lg space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">🛡️ Why Join SHADOW?</h2>
          <ul className="list-disc list-inside text-gray-400">
            <li>Access exclusive job opportunities in high-trust environments</li>
            <li>Get verified and showcase your professionalism</li>
            <li>Build your presence in the digital security space</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">⚙️ How It Works</h2>
          <ol className="list-decimal list-inside text-gray-400">
            <li>Create your provider profile</li>
            <li>Upload your license and credentials</li>
            <li>Get approved and start receiving requests</li>
          </ol>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">🌐 The Vision</h2>
          <p className="text-gray-400">
            SHADOW empowers those who protect. In a rapidly evolving digital age, we give security professionals the tools to thrive and connect—no middlemen, no noise. Just trust, readiness, and access.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
