import Link from "next/link";

const ResourcesTab = ({ documents, relatedProducts }) => {
  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Documentation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {documents.map((doc, index) => (
            <Link
              key={index}
              href={doc.url}
              className="border rounded-lg shadow-sm bg-white p-4 flex items-center hover:bg-gray-50 transition-colors"
            >
              <div className="bg-blue-100 rounded-full p-2 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              <span className="text-blue-600 font-medium">{doc.name}</span>
            </Link>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Related Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {relatedProducts.map((product, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-sm bg-white p-4 text-center"
            >
              <span className="text-gray-700 font-medium">{product}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ResourcesTab;
