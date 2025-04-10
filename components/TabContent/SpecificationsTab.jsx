const SpecificationsTab = ({
  specifications,
  certifications,
  installationRequirements,
}) => {
  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold mb-4">
          Technical Specifications
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-3 border">Specification</th>
                {specifications.map((spec, index) => (
                  <th key={index} className="text-left p-3 border">
                    {spec.capacity}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="p-3 border font-medium">Dimensions (W×D×H)</td>
                {specifications.map((spec, index) => (
                  <td key={index} className="p-3 border">
                    {spec.dimensions}
                  </td>
                ))}
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border font-medium">Weight</td>
                {specifications.map((spec, index) => (
                  <td key={index} className="p-3 border">
                    {spec.weight}
                  </td>
                ))}
              </tr>
              <tr className="bg-white">
                <td className="p-3 border font-medium">Topology</td>
                {specifications.map((spec, index) => (
                  <td key={index} className="p-3 border">
                    {spec.topology}
                  </td>
                ))}
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border font-medium">Efficiency</td>
                {specifications.map((spec, index) => (
                  <td key={index} className="p-3 border">
                    {spec.efficiency}
                  </td>
                ))}
              </tr>
              <tr className="bg-white">
                <td className="p-3 border font-medium">Input Voltage</td>
                {specifications.map((spec, index) => (
                  <td key={index} className="p-3 border">
                    {spec.inputVoltage}
                  </td>
                ))}
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border font-medium">Output Voltage</td>
                {specifications.map((spec, index) => (
                  <td key={index} className="p-3 border">
                    {spec.outputVoltage}
                  </td>
                ))}
              </tr>
              <tr className="bg-white">
                <td className="p-3 border font-medium">Battery Type</td>
                {specifications.map((spec, index) => (
                  <td key={index} className="p-3 border">
                    {spec.batteryType}
                  </td>
                ))}
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border font-medium">Noise Level</td>
                {specifications.map((spec, index) => (
                  <td key={index} className="p-3 border">
                    {spec.noiseLevel}
                  </td>
                ))}
              </tr>
              <tr className="bg-white">
                <td className="p-3 border font-medium">Cooling Method</td>
                {specifications.map((spec, index) => (
                  <td key={index} className="p-3 border">
                    {spec.coolingMethod}
                  </td>
                ))}
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border font-medium">Warranty</td>
                {specifications.map((spec, index) => (
                  <td key={index} className="p-3 border">
                    {spec.warranty}
                  </td>
                ))}
              </tr>
              <tr className="bg-white">
                <td className="p-3 border font-medium">Purchase Price</td>
                {specifications.map((spec, index) => (
                  <td key={index} className="p-3 border">
                    {spec.purchasePrice}
                  </td>
                ))}
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border font-medium">Rental Price (Daily)</td>
                {specifications.map((spec, index) => (
                  <td key={index} className="p-3 border">
                    {spec.rentalPrice?.daily}
                  </td>
                ))}
              </tr>
              <tr className="bg-white">
                <td className="p-3 border font-medium">
                  Rental Price (Weekly)
                </td>
                {specifications.map((spec, index) => (
                  <td key={index} className="p-3 border">
                    {spec.rentalPrice?.weekly}
                  </td>
                ))}
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border font-medium">
                  Rental Price (Monthly)
                </td>
                {specifications.map((spec, index) => (
                  <td key={index} className="p-3 border">
                    {spec.rentalPrice?.monthly}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
        <div className="flex flex-wrap gap-2">
          {certifications.map((cert, index) => (
            <span
              key={index}
              className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-white border border-gray-200 text-gray-700"
            >
              {cert}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">
          Installation Requirements
        </h2>
        <ul className="space-y-2">
          {installationRequirements.map((req, index) => (
            <li key={index} className="flex items-start">
              <div className="bg-blue-100 rounded-full p-1 mr-2 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 text-blue-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span className="text-gray-700">{req}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SpecificationsTab;
