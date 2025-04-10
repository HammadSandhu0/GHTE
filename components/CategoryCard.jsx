// CategoryCard.js
import Image from "next/image";
import Link from "next/link";

export const CategoryCard = ({ category, items }) => {
  return (
    <div className="bg-white border rounded-lg shadow-sm overflow-hidden">
      {/* Category Header */}
      <div className="bg-gray-50 border-b p-6">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="w-full md:w-1/4 relative aspect-video rounded-lg overflow-hidden border">
            <Image
              src={category.image || "/placeholder.svg?height=200&width=300"}
              alt={category.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full md:w-3/4">
            <h2 className="text-2xl font-semibold mb-2">{category.name}</h2>
            <p className="text-gray-700 mb-4">{category.description}</p>
            <div className="flex flex-wrap gap-2">
              {category.idealFor?.slice(0, 5).map((ideal, i) => (
                <span
                  key={i}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200"
                >
                  {ideal}
                </span>
              ))}
            </div>
            <Link
              href={`/en/ups-saudi-arabia/${category.id}`}
              className="inline-block mt-4"
            >
              <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 transition-colors">
                Learn More About {category.name}
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Available Items */}
      <div className="p-6">
        <h3 className="text-lg font-medium mb-4">
          Available {category.name} Items
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <Link key={item.id} href={`/item/${item.id}`}>
              <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={item.image || "/placeholder.svg?height=200&width=300"}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-lg mb-1">{item.name}</h4>
                  <p className="text-gray-600 text-sm mb-2">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">
                      {item.power}
                    </span>
                    <span className="text-blue-600 font-medium">
                      {item.price}
                    </span>
                  </div>
                  <div className="flex gap-2 mt-3">
                    {item.purchaseAvailable && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200">
                        Purchase
                      </span>
                    )}
                    {item.rentalAvailable && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200">
                        Rental
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
