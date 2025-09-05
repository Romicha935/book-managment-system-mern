import React, { useState } from 'react'
import heroImg from '../assets/bookImg/hero.png'
import { useBooks } from '../context/BookContext'

const Hero = () => {
    const {books, lfilters,updateFilters} = useBooks()
    const [searchInput,setSearchInput] = useState('')
   

    const handleSubmit = (e) => {
        e.preventDefault()
         updateFilters({
            search = searchInput.trim()
         })
    }
    console.log(books);
    
    
  return (
    <div className='bg-gray-900 min-h-[500px] relative overflow-hidden'>
     <div className='container mx-auto px-4 py-36 flex flex-col lg:flex-row flex-wrap items-center justify-between'>
        <div className='text-white w-full lg:w-1/2 z-10'>
        <h1 className='text-5xl font-bold'>Welcome to Our Books -  a haven for books lovers</h1>
        <form onSubmit={handleSubmit} action="" className='mt-8 max-w-md flex gap-1'>
            <input 
            value={(e)=>setSearchInput(e.target.value)}
            type="text"
             placeholder='Enter title' 
             className='bg-white px-4 py-2 border text-black w-full' />
            <button 
            type='submit'
             className='bg-amber-300 px-6 py-2 text-black'>Search</button>
        </form>
        </div>
        <div className='w-full lg:w-1/2'>
        <img className='w-full h-fit object-cover rounded-2xl' src={heroImg} alt="" /></div>
     </div>
    </div>
  )
}

export default Hero