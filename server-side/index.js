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

const { MongoClient, ServerApiVersion } = require('mongodb');
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
   app.get("/books", async(req,res)=> {
    const {page,limit,genre,minYear,maxYear,author,minprice,MaxPrice, sortBy,order,search} = req.query
    try {
      const currentPage = Math.max(1, parseInt(page) || 1);
      const perpage = parseInt(limit) || 10;
      const skip = (currentPage - 1) * perpage;

      const filter = {};
      if(search){
        filter.$or = [
          {title: {$regex: search,$options: "i"}},
          {description: {$regex: search,$options: "i"}},
       
        ]
      }

    const books = await booksCollection.find(filter).toArray()
    res.status(201).json({books})
    } catch (error) {
        res.status(500).json({error: error,message})
      }
   })

   //get all books (Get)


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