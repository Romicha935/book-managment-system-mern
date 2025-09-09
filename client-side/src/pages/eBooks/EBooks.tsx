import React from "react";

const ebooksData = [
  {
    id: 1,
    title: "The Adventures of Tom Sawyer",
    author: "Mark Twain",
    cover: "/the-adventures-of-tom-sawyer-46.jpg",
    type: "story",
    pdf: "/pdfs/tom-sawyer.pdf",
  },
  {
    id: 2,
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    cover: "/harry-potter-and-the-philosophers-stone.jpg",
    type: "fantasy",
    pdf: "/pdfs/harry-potter.pdf",
  },
  {
    id: 3,
    title: "The Little Prince",
    author: "Antoine de Saint-Exupéry",
    cover: "/The littile prices.jpg",
    type: "children",
    pdf: "/pdfs/little-prince.pdf",
  },
  {
    id: 4,
    title: "Alice in Wonderland",
    author: "Lewis Carroll",
    cover: "/alice in wonderland.jpeg",
    type: "fantasy",
    pdf: "/pdfs/alice.pdf",
  },
];

const Ebooks = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-center mb-8">Ebooks Collection</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {ebooksData.map((book) => (
          <div
            key={book.id}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            <img
              src={book.cover}
              alt={book.title}
              className="h-60 w-full object-cover rounded"
            />
            <h3 className="text-lg font-semibold mt-3">{book.title}</h3>
            <p className="text-sm text-gray-600">{book.author}</p>
            <div className="flex justify-between mt-4">
              {/* Read Online */}
              <a
                href={book.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
              >
                Read Online
              </a>

              {/* Download */}
              <a
                href={book.pdf}
                download
                className="bg-gray-700 text-white px-3 py-1 rounded hover:bg-gray-800"
              >
                Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ebooks;
