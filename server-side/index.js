const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const port = process.env.PORT || 5000
console.log(process.env.MONGODB_URL);

//middleware
app.use(express.json())
app.use(cors())

//connect mongodb

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = process.env.MONGODB_URL

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //connect the client to server
    const db = client.db("book-managment-system")
    const booksCollection = db.collection("books")

    //create a book post
    app.post("/books", async (req,res)=> {
      const bookData = req.body;
      try {
      const book =await booksCollection.insertOne(bookData)
      console.log(book);
      
      res.status(201).json({message: "Book inserted successfuly"})
      } catch (error) {
        res.status(500).json({error: error,message})
      }
      console.log(bookData);
      
    })

       //get all books (Get)
   app.get("/books", async(req,res)=> {
    const {page,limit,genre,minYear,maxYear,author,minPrice,maxPrice, sortBy,order,search} = req.query
    try {
      const currentPage = Math.max(1, parseInt(page) || 1);
      const perPage = parseInt(limit) || 10;
      const skip = (currentPage - 1) * perPage;

      const filter = {};
      if(search){
        filter.$or = [
          {title: {$regex: search,$options: "i"}},
          {description: {$regex: search,$options: "i"}},
       
        ]
      }
      if(genre) filter.genre = genre;

      if(minYear || maxYear){
        filter.publishedYear = {
          ...(minYear && {$gte: parseInt(minYear)}),
          ...(maxYear && {$gte: parseInt(maxYear)})

        }
      }

      if(author) filter.author = author;

      if(minPrice || maxPrice) {
        const price = {
          ...(minPrice &&{$gte: parseInt(minPrice)}),
          ...(maxPrice && {$gte: parseInt(maxPrice)})
        }
      }

      const sortOptions = {[sortBy || 'title']: order === 'doc'? -1 : 1}
       const [books,totalBooks] = await Promise.all([booksCollection.find(filter).sort(sortOptions).skip(skip).limit(perPage).toArray(), booksCollection.countDocuments(filter)])


    //const books = await booksCollection.find(filter).sort(sortOptions).skip(skip).limit(perpage).toArray()
    res.status(201).json({books,totalBooks,currentPage,totalPages : Math.ceil(totalBooks / perPage)})
    } catch (error) {
        res.status(500).json({error: error,message})
      }
   })


   app.get("/books/:id", async(req,res)=> {
    const bookId = req.params.id

    try {
      const book = await booksCollection.findOne({_id: new ObjectId(bookId)});
      if(!book) return res.status(404).json({message: "book not found!"})
        res.json(book)
    } catch (error) {
      res.status(500).json({error: error.message})
    }
   })

   app.put("/books/:id", async(req,res)=> {
    try {
      const updateBook = await booksCollection.updateOne({_id: new ObjectId(req.params.id)},{$set: req.body})
      res.json(updateBook)
    } catch (error) {
      res.status(500).json({error: error.message})
    }
   })

   app.delete("/books/:id", async(req,res)=> {
    try {
      await booksCollection.deleteOne({_id: new ObjectId(req.params.id)})
      res.json({message: "Book Deleted"})
    } catch (error) {
      res.status(500).json({error: error.message})
    }
   })


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
   // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('welcome to book managment system')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})