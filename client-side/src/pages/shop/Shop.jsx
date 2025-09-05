import React from 'react'
import { useBooks } from '../../context/BookContext'
import BookGrid from './BookGrid'

const Shop = () => {
     const {  books,currentBook,loading,error,filters,pagination,fetchBooks,
        clearCurrentBook,
        updateFilters,
        fetchBookDetails} = useBooks()

        const handleDeleteBook = () => {
            console.log("book deleted");
            
        }
  return (
    <div className='container mx-auto'>
        {/* reult summary */}
        <div className='py-4 text-gray-600 px-4'>
            Showing {pagination.totalBooks > 0 ? (pagination.currentPage -1) * filters.limit + 1: 0} - <span>{Math.min(pagination.currentPage * filters.limit, pagination.totalBooks)}</span> of {pagination.totalBooks} books
        </div>
    <div className='py-8 md:px-4'>
     <BookGrid books={books} loading={loading} error={error} onDeleteBook={handleDeleteBook} />
    </div>
    </div>
  )
}

export default Shop