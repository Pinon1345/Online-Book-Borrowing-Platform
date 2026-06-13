"use client";

import React, { useEffect, useState } from "react";
import BookCard from "@/components/BookCard";
import CategoryPage from "@/components/Category";
import { PiSmileySadBold } from "react-icons/pi";

const AllBooksPage = () => {
    const [books, setBooks] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchText, setSearchText] = useState("");

    // FETCH DATA
    useEffect(() => {
        const fetchBooks = async () => {
            const response = await fetch(
                "https://online-book-borrowing-platform-eight.vercel.app/data.json"
            );

            const data = await response.json();

            // Convert object → array
            const allBooks = Object.values(data).flat();

            setBooks(allBooks);
            setFilteredBooks(allBooks);
        };

        fetchBooks();
    }, []);

    // FILTER FUNCTION
    const filterBooks = (category, search) => {
        let result = [...books];

        // CATEGORY FILTER
        if (category !== "All") {
            result = result.filter(
                (book) => book.category === category
            );
        }

        // SEARCH FILTER (TITLE)
        if (search.trim() !== "") {
            result = result.filter((book) =>
                book.title.toLowerCase().includes(search.toLowerCase())
            );
        }

        setFilteredBooks(result);
    };

    // CATEGORY CLICK
    const handleCategory = (cat) => {
        setSelectedCategory(cat);
        filterBooks(cat, searchText);
    };

    // SEARCH INPUT
    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchText(value);
        filterBooks(selectedCategory, value);
    };

    return (
        <div className="container w-11/12 mx-auto p-4 mt-6 mb-6">

            {/* TITLE */}
            <h1 className="pt-4 pb-6 text-3xl md:text-4xl font-bold text-center text-blue-600">
                All Books
            </h1>

            {/* CATEGORY BUTTONS */}
            <CategoryPage onFilter={handleCategory} />

            {/* SEARCH INPUT */}
            <div className="flex justify-center mb-6">
                <input
                    type="text"
                    placeholder="Search book by title..."
                    value={searchText}
                    onChange={handleSearch}
                    className="w-full md:w-1/2 px-4 py-3 mt-2 mb-6 border rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* BOOK GRID */}
            <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredBooks.length > 0 ? (
                    filteredBooks.map((book) => (
                        <BookCard key={book.id} book={book} />
                    ))
                ) : (

                    <h2 className="text-3xl font-bold text-blue-600 col-span-1 text-center"> NO BOOK FOUND!</h2>

                )}
            </div>

        </div>
    );
};

export default AllBooksPage;