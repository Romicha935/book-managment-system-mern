import  { useEffect, useState } from 'react'
import { useBooks } from '../../context/BookContext';

const Home = () => {
  const {books,currentBook,oading,error} = useBooks()
    //const [books,setBooks] = useState([])

    // useEffect(()=>{
    //     fetch("http://localhost:5000/books")
    //     .then(res=> res.json())
    //     .then(data => setBooks(data.books));
     
        
    // },[])

    console.log(books);
    
  return (
     <div>
      {/* {Array.isArray(books) && books.map((book) => (
        <div key={book._id}>
          {book.title}
        </div>
      ))} */}
      home
    </div>
  )
}

export default Home