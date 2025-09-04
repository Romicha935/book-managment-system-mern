import {  useCallback, useContext, useEffect, useState } from "react";
import { createContext } from "react";
import axios from "axios"

const BookContext = createContext()

export const BookProvider = ({children}) => {
    const [books,setBooks] = useState([])
    const [currentBook,setCurrentBook] = useState(null)
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)

    const [filters,setFilters] = useState({
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

    const fetchBooks = useCallback(async () => {
        try{
           setLoading(true)
           setError(null)
           const params = new URLSearchParams()
           Object.entries(filters).forEach(([key, value ]) => {
            if(value !== ''){
                params.append(key,value)
            }
           })
           const response = await axios.get(`http://localhost:5000/books? ${params}`)
           setBooks(response.data.books || [])
           setPagination({
            currentPage: response.data.currentPage,
            totalBooks: response.data.totalBooks,
            totalPages:response.data.totalBooks
           })
           //console.log(response);
           
        } catch(error) {
            setError(error.messsage)
            //console.log(error);
            
        }
        finally {
            setLoading(false)
        }
    },[filters])

    const clearCurrentBook = useCallback(()=> {
        setBooks(null)
    },[])

    const updateFilters = useCallback(async(newFilters)=> {
     setFilters(prev =>({
        ...prev,
         ...newFilters,
         page: newFilters.
     }))
    },[])

    useEffect(()=>{
        fetchBooks()
    },[filters])

    const value = {
        books,
        currentBook,
        loading,
        error,filters,
        pagination,
        fetchBooks,
        clearCurrentBook
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