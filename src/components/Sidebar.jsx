export default function SideBar({ onChange }) {
  const categoryFilters = [
    "Shirt",
    "Tees",
    "Pants",
    "Footwear",
    "Jackets",
    "Handbags",
  ];
  const brandFilters = [
    "Puma",
    "Gucci",
    "Dior",
    "Louis Vuitton",
    "Nike",
    "Levis",
    "Chanel",
  ];

  const handleFilterChange = (event, filter) => {
    const value = event.target.value;
    onChange(filter, value);
  };

  const bgMap = {
    pink: "bg-pink-200",
    green: "bg-green-200",
    blue: "bg-blue-200",
    purple: "bg-purple-200",
  };

  const ringMap = {
    pink: "peer-checked:ring-pink-400",
    green: "peer-checked:ring-green-400",
    blue: "peer-checked:ring-blue-400",
    purple: "peer-checked:ring-purple-400",
  };

  return (
    <div className="flex flex-col bg-white p-8 rounded-md h-full space-y-0 md:space-y-4">
      <div className=" border-b border-gray-200 pb-3 flex justify-between items-center">
        <h2 className="text-2xl">Filters By</h2>
        <button className="text-sm text-red-500 hover:text-red-600" onClick={clearFilter}>
          x Clear
        </button>
      </div>
      <div className="filter-wrapper">
        <h4 className="text-xl">Category</h4>
        <ul className="w-full p-0 flex flex-wrap gap-x-1 gap-y-3 mt-4">
          {categoryFilters.map((item, index) => {
            return (
              <li className="mb-1.5" key={index}>
                <label htmlFor={`filer-category-${item}`}>
                  <input
                    type="radio"
                    id={`filer-category-${item}`}
                    name="filter-category"
                    className="hidden peer"
                    value={item}
                    onChange={(event) => handleFilterChange(event, "category")}
                  />
                  <span className="border border-black/70 rounded-md px-2.5 py-1.5 transition-colors hover:bg-black/70 hover:text-white peer-checked:bg-black peer-checked:text-white peer-checked:border-black">
                    {item}
                  </span>
                </label>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="filter-wrapper">
        <h4 className="text-xl">Brands</h4>
        <ul className="w-full p-0 flex flex-wrap gap-x-1 gap-y-3 mt-4">
          {brandFilters.map((item, index) => {
            return (
              <li className="mb-1.5" key={index}>
                <label htmlFor={`filer-brand-${item}`}>
                  <input
                    type="radio"
                    id={`filer-brand-${item}`}
                    name="filter-brand"
                    className="hidden peer"
                    value={item}
                    onChange={(event) => handleFilterChange(event, "brand")}
                  />
                  <span className="border border-black/70 rounded-md px-2.5 py-1.5 transition-colors hover:bg-black/70 hover:text-white peer-checked:bg-black peer-checked:text-white peer-checked:border-black">
                    {item}
                  </span>
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
