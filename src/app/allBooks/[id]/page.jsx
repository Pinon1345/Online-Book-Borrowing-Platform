import { Button, Card, CloseButton } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiPackage } from 'react-icons/fi';
import { HiOutlineTag } from 'react-icons/hi';
import { PiHandDepositFill } from 'react-icons/pi';

const BookDetails = async ({ params }) => {
    const { id } = await params

    const response = await fetch("https://online-book-borrowing-platform-eight.vercel.app/data.json")

    const books = await response.json()

    const book = books.find(b => b.id == id)

    console.log("Individual Book Details", book);

    const { title, author, description, category, available_quantity, image_url } = book;


    return (
        <div className='container w-11/12 mx-auto bg-slate-50 shadow-lg rounded-3xl mt-12 mb-12 p-4 flex flex-col md:flex-row gap-8 md:items-start items-center'>
            {/* Left Side */}
            <div className='overflow-hidden rounded-3xl'>
                <Image
                    className='w-90 h-110 p-4 rounded-2xl object-contain transition duration-500 hover:scale-105'
                    src={image_url}
                    alt={title}
                    width={500}
                    height={700}
                ></Image>

            </div>

            {/* Right Side */}

            <div className='p-4 flex-1 space-y-3'>
                <h2 className='font-bold text-4xl md:text-5xl text-blue-700'>{title}</h2>
                <h2 className='text-2xl md:text-xl font-bold pt-2'><span className='text-gray-400'>By</span> {author}</h2>
                <p className='text-xl pt-2'>{description}</p>

                <div className='flex justify-between items-center gap-4 font-bold mt-5 mb-6'>
                    <p className='font-semibold text-lg text-gray-500'>Book Category:</p>
                    <h2 className='text-md px-5 py-1 bg-blue-100 text-blue-700 rounded-2xl flex items-center gap-1'><HiOutlineTag className='text-blue-600 text-lg'></HiOutlineTag> {category}</h2>

                </div>

                <div className='flex justify-between items-center gap-4 font-bold mt-5 mb-6'>
                    <p className='font-semibold text-lg text-gray-500'>Available Quantity:</p>

                    <h2 className='text-md px-5 py-1 bg-green-100 text-green-700 rounded-2xl flex items-center gap-1'><FiPackage className='text-green-600 text-lg'></FiPackage> {available_quantity} Copies Left</h2>

                </div>

                <Link href={"/allBooks"}>
                    <Button className="btn-primary w-6/12 rounded-full mt-6"><PiHandDepositFill className='w-5 h-5 mr-1'></PiHandDepositFill> Borrow This Book</Button>
                </Link>

            </div>

        </div>
    );
};

export default BookDetails;