import React from 'react';

const AllBooksLoading = () => {
    return (
        <div className="flex h-[70vh] items-center justify-center">
            <div className="h-16 w-16 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600 shadow-lg"></div>
        </div>
    );
};

export default AllBooksLoading;