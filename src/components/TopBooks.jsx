import React from 'react';
import BookCard from './BookCard';

const TopBooks = async () => {

    const response = await fetch("https://online-book-borrowing-platform-eight.vercel.app/data.json")
    const data = await response.json()
    // console.log("JSON Data", data);

    const topBooks = data.slice(0, 8)
    // console.log("Slice Data", topBooks);
    

    return (
        <div className='container w-11/12 mx-auto mt-4 mb-8 p-4'>
            <h1 className='pt-4 pb-6 text-3xl md:text-4xl font-bold text-center text-blue-600'>Top Books</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto mt-6'>
                {
                    topBooks.map(book => <BookCard
                        key={book.id}
                        book={book}
                    ></BookCard>)
                }
            </div>
        </div>
    );
};

export default TopBooks;