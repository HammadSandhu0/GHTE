import { memo } from "react";

const CategoryFilter = memo(
  ({
    items,
    selectedItem,
    onItemChange,
    renderItem,
    className = "",
    activeClassName = "bg-secondary text-white shadow-md",
    inactiveClassName = "bg-gray-200 text-gray-700 hover:bg-gray-300",
    itemClassName = "px-3 py-2 sm:px-4 md:py-2.5 text-sm sm:text-base rounded-full cursor-pointer transition-all whitespace-nowrap",
  }) => (
    <div className={`overflow-x-auto -mx-4 px-4 pb-3 ${className}`}>
      <ul className="flex flex-nowrap min-w-max justify-center gap-2 sm:gap-3 md:gap-4">
        {items.map((item, index) => (
          <li
            key={index}
            className={`${itemClassName} ${
              selectedItem === item ? activeClassName : inactiveClassName
            }`}
            onClick={() => onItemChange(item)}
          >
            {renderItem ? renderItem(item) : item}
          </li>
        ))}
      </ul>
    </div>
  )
);

export default CategoryFilter;
