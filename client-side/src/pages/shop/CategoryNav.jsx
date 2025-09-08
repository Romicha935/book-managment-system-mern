import React from 'react'

const CategoryNav = ({  categories,activeCategory,onCategoryChange}) => {
  return (
    <div className='p-4'>
   <nav className='flex items-center flex-wrap space-x-8 overflow-auto '>
    {categories.map((category)=>(
        <button onClick={()=> onCategoryChange(category)} key={category} className={`whitwspace-nowrap cursor-pointer py-2 px-1 border-b text-sm font-medium transition-colors ${category === activeCategory? 'border-green-500 text-green-500':'border-transparent text-gray-500 hover:text-gray-700'}` }>{category}</button>
    ))}
   </nav>
    </div>
  )
}

export default CategoryNav