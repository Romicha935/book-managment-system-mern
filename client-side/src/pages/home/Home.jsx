import  { useEffect, useState } from 'react'
import { useBooks } from '../../context/BookContext';
import Hero from '../../components/Hero';
import Shop from '../shop/Shop';

const Home = () => {
       
    //const [books,setBooks] = useState([])

    // useEffect(()=>{
    //     fetch("http://localhost:5000/books")
    //     .then(res=> res.json())
    //     .then(data => setBooks(data.books));
     
        
    // },[])

    // console.log(books);
    
  return (
     <div>
      {/* {Array.isArray(books) && books.map((book) => (
        <div key={book._id}>
          {book.title}
        </div>
      ))} */}
      <Hero></Hero>
      <Shop/>
     {/* <div className='container mx-auto'>
      {books.length ? <div>
        {books.map(book => (
          <div key={book._id}>
            {book.title}
          </div>
        ))}
      </div> : "no books found"}
     </div> */}

    </div>
  )
}

export default Home