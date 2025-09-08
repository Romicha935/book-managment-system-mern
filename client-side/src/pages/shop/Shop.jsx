import React, { useEffect } from 'react'
import { useBooks } from '../../context/BookContext'
import BookGrid from './BookGrid'
import CategoryNav from './CategoryNav'
import SortBooks from './SortBooks'
import Pagination from './Pagination'
import axios from 'axios'
import { baseUrl } from '../../utils/baseUrl'

const Shop = () => {
     const {  books,loading,error,filters,pagination,fetchBooks,  categories,
    updateFilters,} = useBooks()

        useEffect(()=>{
            fetchBooks()
        },[filters,fetchBooks])

        
    const handleCategoryChange = (category) => {
        updateFilters({
            genre: category === "All Books"? '':category,
            page:1,
        })
    }

    const handleSortChange = (sortConfig) => {
      updateFilters({
         sortBy:sortConfig.sortBy,
        order: sortConfig.order,
        page:1,
      })
    }

        const handleDeleteBook = async (id) => {
           try {
             console.log("book deleted",id);
           await axios.delete(`http://localhost:5000/books/${id}`)
           alert("Boook deleted succesfully")
           fetchBooks()
           } catch (error) {
          console.error(error);
          alert('error')
           }
            
        }

        const handlePageChange = (newPage) => {
         updateFilters({
            page: newPage
         })
        }
  return (
    <div className='container mx-auto px-4 py-12 min-h-screen'>
        <div className='flex justify-between items-center flex-wrap border-b border-gray-200 pb-4'>
         <CategoryNav categories={categories} activeCategory={filters.genre ||"All Books" } onCategoryChange={handleCategoryChange} />
        <div className='py-4 flex justify-end px-4'>
             <SortBooks currentSort={{
                sortBy:filters.sortBy,
                order:filters.order
             }} onSortChange={handleSortChange} />
        </div>

        </div>
        {/* reult summary */}
        <div className='py-4 text-gray-600 px-4  '>
            Showing {pagination.totalBooks > 0 ? (pagination.currentPage -1) * filters.limit + 1: 0} - <span>{Math.min(pagination.currentPage * filters.limit, pagination.totalBooks)}</span> of {pagination.totalBooks} books
        </div>
    <div className='py-8 md:px-4'>
     <BookGrid books={books} loading={loading} error={error} onDeleteBook={handleDeleteBook} />
    </div>

    {/* pagination */}
    {
        pagination.totalPages > 1 && (<Pagination 
        totalPages = {pagination.totalPages}
        currentPage = {pagination.currentPage}
        onPageChange = {handlePageChange}
        />)
    }
    </div>
  )
}

export default Shop