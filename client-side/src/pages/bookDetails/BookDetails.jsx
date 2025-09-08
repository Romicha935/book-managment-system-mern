import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router'
import { useBooks } from '../../context/BookContext'
import { FaArrowLeft, FaShoppingCart } from 'react-icons/fa'

const BookDetails = () => {
    const {id} = useParams()
    const {currentBook,fetchBookDetails,loading} = useBooks()
    console.log(currentBook);
    

    useEffect(()=> {
        fetchBookDetails(id)

    },[id, fetchBookDetails])

    if(loading) return <div>Loading...</div>

      if (!currentBook) {
    return <div>No book found!</div>
  }
  return (
    <div className='container mx-auto px-4 py-8'>
      <Link to='/books' className='inline-flex items-center text-gray-600 hover:text-green-500 py-3'>
       <FaArrowLeft className='mr-2'/>
       Back to Books
      </Link>
      <div className='max-w-5xl grid grid-cols-1  md:grid-cols-2 gap-12'>
        {/* left colum image */}
        <div className='space-y-4'>
          <div className='aspect-square rounded-lg overflow-hidden bg-gray-100'>
            <img src={currentBook.bookUrl} alt={currentBook.title} className='w-full h-full object-cover' />
          </div>
        </div>

        {/* right colum details */}
        <div className='space-y-4'>
          {/* title and authr */}
           <div className=''>
            <h1 className='text-3xl font-bold text-gray-900 mb-2'>{currentBook.title}</h1>
            <p className='text-xl text-gray-600 '>by {currentBook.author}</p>
           </div>
          {/* price and genre */}
           <div className=''>
            <p className='text-2xl font-bold text-green-500 mb-2'>${currentBook.price}</p>
            <p className='text-xl text-gray-600 '><span className='text-gray-900'>{currentBook.genre}</span> </p>
            {currentBook.publishedYear && (
              <p className='text-gray-600'>Published : <span className='text-gray-900'>{currentBook.publishedYear}</span></p>
            )}
           </div>
          {/* description */}
           <div className=''>
            <h2 className='text-xl font-semibold text-gray-900 mb-2'>Description</h2>
            <p className=' text-gray-600  leading-relaxed'>{currentBook.description || "No description available"}</p>
           </div>

{/* action buttons */}
            <div className='flex space-x-4 pt-6'>
              <button className='bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:text-amber-600 transition-colors cursor-pointer  flex items-center justify-center'>
                <FaShoppingCart className='mr-2'/>
                Add to Cart</button>
                <Link className='px-6 py-2 border  rounded-lg text-gray-400 hover:bg-gray-50 transition-colors' to={`/books/edit/${currentBook._id}`}>Edit</Link>
            </div>

            {/* additional details */}
          {currentBook?.isbn && (
            <div className='pt-6 border-t border-gray-200'>
              <h2 className='text-lg font-semibold text-gray-900 mb-2'>Additional Information</h2>
              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <p className='text-gray-600'>ISBN</p>
                  <p className='text-gray-900'>{currentBook?.isbn}</p>
                </div>
                <div>
                  <p className='text-gray-600'>Pages</p>
                  <p className='text-gray-900'>{currentBook?.pages || 'N/A'}</p>
                </div>
                <div>
                  <p className='text-gray-600'>Language</p>
                  <p className='text-gray-900'>{currentBook?.language || 'N/A'}</p>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}

export default BookDetails