import React from "react";

const FeatureGrid = ({ features }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
      {features.map((feature, index) => (
        <div key={index} className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-medium mb-2 flex items-center">
            {/* <span className="h-5 w-5 text-blue-600 mr-2">{feature.icon}</span> */}
            {feature.title}
          </h3>
          <p className="text-sm text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureGrid;
