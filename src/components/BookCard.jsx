import { Button, Card, Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { FiPackage } from 'react-icons/fi';
import { HiOutlineTag } from 'react-icons/hi';

const BookCard = ({ book }) => {
    const { id, title, author, description, category, available_quantity, image_url } = book
    console.log("Book Information", book);
    return (
        <div>
            <Card className='border border-slate-200 shadow-lg shadow-slate-200 bg-gray-50 transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-slate-400 rounded-4xl'>
                <div className='group ... p-1.5 relative aspect-square w-full'>
                    <Image
                        className='h-full w-full object-container transition duration-500 group-hover:scale-105 rounded-4xl shadow-md shadow-gray-400'
                        src={image_url}
                        alt={title}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        fill
                    >
                    </Image>

                    <Chip size='sm' className='absolute right-4 top-2 font-bold text-gray-700'>New</Chip>

                </div>
                <div>
                    <h2 className='font-bold text-2xl line-clamp-1 text-blue-900 mt-2'>{title}</h2>
                    <h2 className='font-semibold text-lg text-gray-800 mt-1'><span className='text-gray-500'>By</span> {author}</h2>
                </div>
                <div className='flex justify-between items-center mx-1 gap-4 font-bold mt-2'>

                    <h2 className='text-md px-5 py-1 bg-blue-100 text-blue-700 rounded-2xl flex items-center gap-1'><HiOutlineTag className='text-blue-600 text-lg'></HiOutlineTag> {category}</h2>

                    <h2 className='text-md px-5 py-1 bg-green-100 text-green-700 rounded-2xl flex items-center gap-1'><FiPackage className='text-green-600 text-lg'></FiPackage> {available_quantity}</h2>

                </div>

                <Link href="/">
                    <Button className="btn-primary rounded-2xl w-full text-lg px-3 mt-5 mb-3">View Details <FaArrowRight></FaArrowRight></Button>
                </Link>


            </Card>
        </div>
    );
};

export default BookCard;