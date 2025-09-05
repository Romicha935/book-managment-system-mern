import React from 'react'
import BookCard from './BookCard'

const BookGrid = ({books,loading,error,onDeletedBook}) => {
    if(error) return <div>Error: {error}</div>
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        {loading? (<div>Loading...</div> ): books.length === 0 ? (<div>No Books found</div>) : (books.map((book) => (
            <BookCard key={book._id} book={book} onDelete={onDeletedBook} />
        )))}
    </div>
  )
}

export default BookGrid