import React from 'react'
import { Link } from 'react-router'

const BookCard = ({book,onDelete}) => {
  return (
    <div className='group shadow-md rounded-lg'>
        <div className='aspect-square mb-4 overflow-hidden rounded-lg bg-yellow-100 p-8 relative group'>
            <img src={book.bookUrl} alt={book.title} className='w-full object-cover group-hover:scale-110 transition-transform duration-300' />
            <div className='absolute inset-0 bg-black/60 flex items-center justify-center  opacity-0 group-hover:opacity-100  transition-opacity duration-300'>
                <Link to={`/books/${book._id}`} className='bg-amber-500 text-white py-2 px-4 rounded cursor-pointer'>View Details</Link>
            </div>
        </div>
        {/* book details */}
        <div className='space-y-2 p-4'>
            <h2 className='text-lg font-medium text-gray-900'>{book.title}</h2>
            <p className='text-sm text-gray-500'>{book.author}</p>
            <div className='flex items-center justify-between'>
             <p>${book.price}</p>
             <div className='flex space-x-2'>
              <Link className='text-gray-400 hover:text-gray-600' to={`/books/edit/${book._id}`}>Edit</Link>
              <button onClick={()=> onDelete(book._id)} className='text-gray-400 hover:text-red-500 cursor-pointer'>Delete</button>
             </div>
             
            </div>
        </div>
    </div>
  )
}

export default BookCard