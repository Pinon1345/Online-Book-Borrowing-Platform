import BookCard from '@/components/BookCard';
import React from 'react';

const AllBooksPage = async () => {

    const response = await fetch("https://online-book-borrowing-platform-eight.vercel.app/data.json")

    const books = await response.json()

    console.log("All books information", books);

    return (
        <div className='container w-11/12 mx-auto p-4 mt-6 mb-6'>
            <h1 className='pt-4 pb-6 text-3xl md:text-4xl font-bold text-center text-blue-600'>All Books</h1>

            <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 mb-4'>
                {
                    books.map(book => <BookCard
                        key={book.id}
                        book={book}
                    ></BookCard>)

                }
            </div>

        </div>
    );
};

export default AllBooksPage;