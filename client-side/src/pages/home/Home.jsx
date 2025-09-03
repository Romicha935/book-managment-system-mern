import  { useEffect, useState } from 'react'

const Home = () => {
    const [books,setBooks] = useState([])

    useEffect(()=>{
        fetch("http://localhost:5000/books")
        .then(res=> res.json())
        .then(data => setBooks(data));
     
        
    },[])

    console.log(books);
    
  return (
    <div>
        {books.map((book)=> (
            <div key={book._id}>

            </div>
        ))}
    </div>
  )
}

export default Home