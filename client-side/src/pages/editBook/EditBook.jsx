import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useBooks } from '../../context/BookContext';

const EditBook = () => {
    const {id} = useParams()
    console.log(id);

    const { currentBook,fetchBookDetails, updateFilters,} = useBooks();

    useEffect(()=> {
        fetchBookDetails(id)
    },[id,fetchBookDetails])
    
  return (
    <div>EditBook</div>
  )
}

export default EditBook