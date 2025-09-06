import React from 'react'


const SortBooks = ({currentSort,onSortChange}) => {
    //const {filters, updateFilters,fetchBooks,} = useBooks()
    const sortOptions = [
        {label: 'Default', value: {sortBy: 'title', order: 'desc'}},
        {label: 'Price: Low to High', value: {sortBy: 'price', order: 'desc'}},
        {label: 'Price: High to Low', value: {sortBy: 'price', order: 'desc'}},
        {label: 'Date:Newest', value: {sortBy: 'publishedYear', order: 'desc'}},
        {label: 'Date: Oldest', value: {sortBy: 'publishedYear', order: 'desc'}},
    ]
  return (
<div>
    <label htmlFor="">Sort By: </label>
    <select name="" id="sort" value={`${currentSort.sortBy}-${currentSort.order}`} onChange={(e)=>{
        const [sortBy,order] = e.target.value.split('-');
        onSortChange({sortBy,order})
    }} >
        {sortOptions.map((option)=>(
            <option value={`${option.value.sortBy}-${option.value.order}`} key={`${option.value.sortBy}-${option.value.order}`}>
                {option.label}
            </option>
        ))}
    </select>
</div>
  )
}

export default SortBooks