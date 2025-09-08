import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'

const AddBook = () => {
      const {
        register,
        handleSubmit,
   
      } = useForm()
 const onSubmit = async (data) => {
     console.log(data);
   try {
      const response = await axios.post(`http://localhost:5000/books/`, data)
     console.log(response.data);
     alert('Book added sucessfully')
   } catch (error) {
    alert("Error create new book", error)
   }
     
     
     } 

  return (
    <div className='container mx-auto px-4 py-12'>
        <h1 className='text-3xl'>Add New Book</h1>
        <form action="" onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
             <div>
                <label >Title</label>
                <input type="text" {...register("title")}
                placeholder='Book Title'
                className='mt-1 p-2 block w-full bg-gray-50 rounded-md shadow-md' />
             </div>
             <div>
                <label >Author</label>
                <input type="text" {...register("author")}
                 placeholder='author'
                className='mt-1 p-2 block w-full bg-gray-50 rounded-md shadow-md' />
             </div>
             <div>
                <label >Published Year</label>
                <input type="text" {...register("publishedYear")}
           placeholder='published year'
                className='mt-1 p-2 block w-full bg-gray-50 rounded-md shadow-md' />
             </div>
             <div>
                <label >Genre</label>
                <input type="text" {...register("genre")}
                placeholder='genre'
                className='mt-1 p-2 block w-full bg-gray-50 rounded-md shadow-md' />
             </div>
             <div>
                <label >Price</label>
                <input type="text" {...register("price")}
              placeholder='price'
                className='mt-1 p-2 block w-full bg-gray-50 rounded-md shadow-md' />
             </div>
              <div>
          <label>Description</label>
          <textarea
            {...register("description")}
            placeholder='Description'
            rows="4"
            className='mt-1 p-2 block w-full bg-gray-50 rounded-md shadow-md'
          />
        </div>
             <div>
                <label >ImageUrl</label>
                <input
            type="text"
            {...register("bookUrl", { required: true })}
            placeholder='Image URL'
            className='mt-1 p-2 block w-full bg-gray-50 rounded-md shadow-md'
          />
             </div>

             <button type='submit' className='bg-green-500 py-2 px-4 hover:bg-green-400 cursor-pointer'>Upload</button>
        </form>
    </div>
  )
}

export default AddBook