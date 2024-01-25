
export default function SideBar({ onChange }) {

  const categoryFilters = ['Shirt', 'Tees', 'Pants', 'Footwear', 'Jackets', 'Handbags'];
  const brandFilters = ['Puma', 'Gucci', 'Dior', 'Louis Vuitton', 'Nike', 'Levis', 'Chanel'];

  const handleFilterChange = (event, filter) => {
    const value = event.target.value;
    onChange(filter, value)
  }

  return (
    <div className="grid grid-cols-2 space-y-0 md:space-y-4">
      <div className="colspan-1 md:col-span-2">
        <h4 className="h4 text-warning">Category</h4>
        <ul className="w-full p-0">
          {
            categoryFilters.map((item, index) => {
              return (
                <li className="w-full" key={index}>
                  <div className="flex items-center gap-x-4  cursor-pointer">
                    <input type="radio" id={`filer-category-${item}`} name="filter-category" value={item} onChange={(event) => handleFilterChange(event, 'category')} />
                    <label htmlFor={`filer-category-${item}`}>
                      {item}
                    </label>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div className="colspan-1 md:col-span-2">
        <h4 className="h4 text-warning">Brands</h4>
        <ul className="w-full p-0">
          {
            brandFilters.map((item, index) => {
              return (
                <li className="w-full" key={index}>
                  <div className="flex items-center gap-x-4  cursor-pointer">
                    <input type="radio" id={`filer-brand-${item}`} name="filter-brand" value={item} onChange={(event) => handleFilterChange(event, 'brand')} />
                    <label htmlFor={`filer-brand-${item}`}>
                      {item}
                    </label>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}
