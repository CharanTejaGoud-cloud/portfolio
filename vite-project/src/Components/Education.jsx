import React from 'react';

const Education = () => {
  return (
    <section id="education" className="p-6  text-white-800">
      <h2 className="text-3xl font-bold mb-6">Education</h2>

      <div className="space-y-6">
        <div className=" p-4 rounded-lg shadow border-red-500 bg-gray-700">
          <h3 className="text-xl font-semibold">B.Tech in Information Technology</h3>
          <p><strong>College:</strong> Sri indu college of engineering and technology</p>
          <p><strong>Year:</strong> 2023-2027</p>
          
        </div>

        <div className=" p-4 rounded-lg shadow bg-gray-800">
          <h3 className="text-xl font-semibold">Intermediate (10+2)</h3>
          <p><strong>College:</strong>Gowthami junior college</p>
          <p><strong>Year:</strong> 2021-2023</p>
          <p><strong>Percentage:</strong>93.9%</p>
        </div>

        <div className=" p-4 rounded-lg shadow bg-gray-900">
          <h3 className="text-xl font-semibold">SSC (10th)</h3>
          <p><strong>School:</strong>Satyam grammar high school</p>
          <p><strong>Year:</strong> 2020-2021</p>
          <p><strong>GPA:</strong>10</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
