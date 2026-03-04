import { useCallback, useContext, useEffect, useState, createContext } from "react";
import axios from "axios";

const BookContext = createContext();

export const BookProvider = ({ children }) => {
    const [books, setBooks] = useState([]);
    const [currentBook, setCurrentBook] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [filters, setFilters] = useState({
        page: 1,
        limit: 8,
        genre: "",
        minYear: "",
        maxYear: "",
        author: "",
        minPrice: "",
        maxPrice: "",
        sortBy: "title",
        order: "asc",
        search: "",
    });

    const categories = [
        "All Books",
        "Science",
        "Programming",
        "Programming / AI",
        "Productivity",
        "Memoir",
    ];

    const [pagination, setPagination] = useState({
        totalBooks: 26,
        currentPage: 1,
        totalPages: 1,
    });

    const fetchBooks = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);
            const params = new URLSearchParams();
            Object.entries(filters).forEach(([key, value]) => {
                if (value !== "") {
                    params.append(key, value);
                }
            });
            const response = await axios.get(
                `https://book-managment-system-mern.onrender.com/books?${params}`
            );
            setBooks(response.data.books || []);
            setPagination({
                currentPage: response.data.currentPage,
                totalBooks: response.data.totalBooks,
                totalPages: response.data.totalPages,
            });
        } catch (error) {
            setError(error.message); // ✅ fixed typo
        } finally {
            setLoading(false);
        }
    }, [filters]);

    const clearCurrentBook = useCallback(() => {
        setCurrentBook(null); // ✅ fixed (was setBooks(null))
    }, []);

    const updateFilters = useCallback((newFilters) => {
        setFilters((prev) => ({
            ...prev,
            ...newFilters,
            page: Object.prototype.hasOwnProperty.call(newFilters, "page")
                ? newFilters.page
                : 1,
        }));
    }, []);

    const fetchBookDetails = useCallback(async (bookId) => {
        try {
            setLoading(true);
            setError(null);
            const response = await axios.get(
                `https://book-managment-system-mern.onrender.com/books/${bookId}`
            );
            setCurrentBook(response.data);
            return response.data;
        } catch (error) {
            setError(error.message); // ✅ fixed typo
            throw error;
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchBooks();
    }, [fetchBooks]); // ✅ fixed dependency array

    const value = {
        books,
        currentBook,
        loading,
        error,
        categories,
        filters,
        pagination,
        fetchBooks,
        clearCurrentBook,
        updateFilters,
        fetchBookDetails,
    };

    return (
        <BookContext.Provider value={value}>
            {children}
        </BookContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useBooks = () => {
    const context = useContext(BookContext);
    if (!context) {
        throw new Error("useBooks must be within a BookProvider");
    }
    return context;
};