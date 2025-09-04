import {  useContext, useEffect, useState } from "react";
import { createContext } from "react";
import axios from "axios"

const BookContext = createContext()

export const BookProvider = ({children}) => {
    const [books,setBooks] = useState([])
    const [currentBook,setCurrentBook] = useState(null)
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)

    const [] = useState({
        page:1,
        limit: 8,
        genre: '',
        minYear: '',
        maxYear: '',
        author:'',
        minPrice:'',
        maxPrice:'',
        sortBy:'title',
        order:'asc',
        search:'',
    })

     const [pagination,setPagination] = useState({
        totalBooks: 26,
        currentPage: 1,
        totalPages: 3
     })

    const fetchBooks = async () => {
        try{
           setLoading(true)
           setError(null)
           const response = await axios.get('http://localhost:5000/books')
           setBooks(response.data.books || [])
           //console.log(response);
           
        } catch(error) {
            console.log(error);
            
        }
    }

    useEffect(()=>{
        fetchBooks()
    },[])

    const value = {
        books,
        currentBook,
        loading,
        error
    }
    return (
        <BookContext.Provider value={value}>
           {children}
        </BookContext.Provider>
    )
}

export const useBooks = () => {
    const context = useContext(BookContext)
    if(!context){
        throw new Error("useBooks must be withing a Book Provider")
    }
    return context
}