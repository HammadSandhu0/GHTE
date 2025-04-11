"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const UpsTypeAccordion = ({ upsTypes, currentUpsId }) => {
  const [openUpsType, setOpenUpsType] = useState(null);

  const toggleUpsType = (id) => {
    setOpenUpsType(openUpsType === id ? null : id);
  };

  return (
    <div className="mt-12 bg-white border rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-semibold mb-6">
        Understanding UPS System Types
      </h2>
      <p className="text-gray-700 mb-6">
        Uninterruptible Power Supply (UPS) systems come in several different
        topologies, each designed for specific applications and offering
        different levels of protection. Understanding these differences is
        crucial for selecting the right UPS for your needs.
      </p>

      <div className="w-full">
        {upsTypes.map((type, index) => (
          <div key={index} className="border-b last:border-b-0">
            <button
              onClick={() => toggleUpsType(index)}
              className="flex items-center w-full text-left py-4 hover:bg-gray-50 transition-colors"
            >
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <span className="font-bold text-blue-600">{index + 1}</span>
              </div>
              <span className="text-lg font-medium">{type.name}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 ml-auto transition-transform ${
                  openUpsType === index ? "transform rotate-180" : ""
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div
              className={`pt-2 pb-4 ${
                openUpsType === index ? "block" : "hidden"
              }`}
            >
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <div className="relative aspect-video rounded-lg overflow-hidden border">
                    <Image
                      src={
                        type.image || "/placeholder.svg?height=200&width=300"
                      }
                      alt={type.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:col-span-2 space-y-4">
                  <p className="text-gray-700">{type.detailedDescription}</p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">
                        Advantages
                      </h4>
                      <ul className="space-y-1">
                        {type.advantages?.map((adv, i) => (
                          <li key={i} className="flex items-start">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <span className="text-sm text-gray-700">{adv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">
                        Disadvantages
                      </h4>
                      <ul className="space-y-1">
                        {type.disadvantages?.map((disadv, i) => (
                          <li key={i} className="flex items-start">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 text-red-500 mr-2 mt-1 flex-shrink-0"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <line x1="18" y1="6" x2="6" y2="18"></line>
                              <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                            <span className="text-sm text-gray-700">
                              {disadv}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      Technical Details
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                      <div className="bg-gray-50 p-2 rounded">
                        <span className="font-medium">Topology:</span>{" "}
                        {type.technicalDetails?.topology}
                      </div>
                      <div className="bg-gray-50 p-2 rounded">
                        <span className="font-medium">Transfer Time:</span>{" "}
                        {type.technicalDetails?.transferTime}
                      </div>
                      <div className="bg-gray-50 p-2 rounded">
                        <span className="font-medium">Efficiency:</span>{" "}
                        {type.technicalDetails?.efficiency}
                      </div>
                      <div className="bg-gray-50 p-2 rounded">
                        <span className="font-medium">Waveform:</span>{" "}
                        {type.technicalDetails?.waveform}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      Ideal For
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {type.idealFor?.map((ideal, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200"
                        >
                          {ideal}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpsTypeAccordion;
