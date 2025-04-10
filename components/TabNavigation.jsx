"use client";

const TabNavigation = ({ activeTab, setActiveTab }) => {
  return (
    <div className="w-full mb-6">
      <div className="grid grid-cols-5 border-b">
        <button
          onClick={() => setActiveTab("overview")}
          className={`py-3 font-medium text-sm sm:text-base transition-colors ${
            activeTab === "overview"
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab("specifications")}
          className={`py-3 font-medium text-sm sm:text-base transition-colors ${
            activeTab === "specifications"
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Specifications
        </button>
        <button
          onClick={() => setActiveTab("applications")}
          className={`py-3 font-medium text-sm sm:text-base transition-colors ${
            activeTab === "applications"
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Applications
        </button>
        <button
          onClick={() => setActiveTab("buyvsrent")}
          className={`py-3 font-medium text-sm sm:text-base transition-colors ${
            activeTab === "buyvsrent"
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Buy vs Rent
        </button>
        <button
          onClick={() => setActiveTab("resources")}
          className={`py-3 font-medium text-sm sm:text-base transition-colors ${
            activeTab === "resources"
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Resources
        </button>
      </div>
    </div>
  );
};

export default TabNavigation;
