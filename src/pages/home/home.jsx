import React from "react";
import banner from "../../assets/banner.png";

export default function Home() {
  return (
    <div>
      {/* Section with Red Background */}
      <div className="bg-[#CD3838] w-full py-20 px-4">
        <div className="w-full mx-auto flex justify-center items-center">
          <img 
            src={banner} 
            alt="Care For Caregivers Banner" 
            className="max-w-md w-full h-auto"
          />
        </div>
      </div>

      {/* Rest of your page content */}
      <div className="bg-[#F0DA9D] w-full mx-auto px-4 py-8">
        <h2>Welcome to the Home Page!</h2>
        <p>This is the web Home component.</p>
      </div>
    </div>
  );
}