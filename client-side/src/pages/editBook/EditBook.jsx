import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useBooks } from '../../context/BookContext';
import { useForm } from "react-hook-form"
import axios from 'axios';

const EditBook = () => {
    const {id} = useParams()
    console.log(id);

      const {
    register,
    handleSubmit,
  setValue
  } = useForm()

    const { currentBook,fetchBookDetails, updateFilters,} = useBooks();

    useEffect(()=> {
        fetchBookDetails(id)
    },[id,fetchBookDetails])

    useEffect(()=>{
        if(currentBook){
            setValue('title', currentBook.title)
            setValue('author', currentBook.author)
            setValue('publishedYear', currentBook.publishedYear)
            setValue('genre', currentBook.genre)
            setValue('price', currentBook.price)
            setValue('description', currentBook.description)
            setValue('imageUrl', currentBook.imageUrl)
        }
    },[currentBook,setValue])
    
     const onSubmit = async (data) => {
    const price = parseFloat(data.price)
    data.price = price;

    try{
   const response =  axios.put(`http://localhost:5000/books/${id}`,data)
   if((await response).data.acknowledge) {
    alert("Book added successfully")
   }
   console.log(response);
   
    } catch (error) {
        console.error("Error updating book data",error.message);
        alert('error updating boook data')
    }
     } 
  return (
    <div className='container mx-auto px-4 py-12'>
        <h1 className='text-3xl'>Edit Book</h1>
        <form action="" onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
             <div>
                <label >Title</label>
                <input type="text" {...register("title")}
                
                className='mt-1 p-2 block w-full bg-gray-50 rounded-md shadow-md' />
             </div>
             <div>
                <label >Author</label>
                <input type="text" {...register("author")}
                
                className='mt-1 p-2 block w-full bg-gray-50 rounded-md shadow-md' />
             </div>
             <div>
                <label >Published Year</label>
                <input type="text" {...register("publishedYear")}
          
                className='mt-1 p-2 block w-full bg-gray-50 rounded-md shadow-md' />
             </div>
             <div>
                <label >Genre</label>
                <input type="text" {...register("genre")}
               
                className='mt-1 p-2 block w-full bg-gray-50 rounded-md shadow-md' />
             </div>
             <div>
                <label >Price</label>
                <input type="text" {...register("price")}
             
                className='mt-1 p-2 block w-full bg-gray-50 rounded-md shadow-md' />
             </div>
             <div>
                <label >Description</label>
                <input type="text" {...register("description")}
               
                className='mt-1 p-2 block w-full bg-gray-50 rounded-md shadow-md' />
             </div>
             <div>
                <label >ImageUrl</label>
                <input type="text" {...register("title")}
         
                className='mt-1 p-2 block w-full bg-gray-50 rounded-md shadow-md' />
             </div>

             <button type='submit' className='bg-amber-500 py-2 px-4 hover:bg-amber-400 cursor-pointer'>Save Change</button>
        </form>
    </div>
  )
}

export default EditBook