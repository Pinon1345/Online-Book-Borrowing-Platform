"use client";

import React, { useEffect, useState } from 'react';

import storyImg from "@/assets/storybook.webp";
import leptopImg from "@/assets/leptop.jpeg";
import scienceImg from "@/assets/science.jpeg";
import historyImg from "@/assets/history.jpeg";
import Image from 'next/image';
import { IoShieldCheckmarkOutline } from 'react-icons/io5';
import { GiCheckMark } from 'react-icons/gi';
import { Button } from '@heroui/react';



    const PopularCategories = () => {

        const [show, setShow] = useState(false);

        useEffect(() => {
            const interval = setInterval(() => {
                setShow(false);

                setTimeout(() => {
                    setShow(true);
                }, 150);
            }, 8000);

            return () => clearInterval(interval);
        }, []);

        return (
            <div className='container w-11/12 mx-auto mt-4 mb-8'>
                <h2
                    className={`${show ? "font-bold text-3xl text-blue-600 md:text-4xl text-center pb-15 pt-4 animate__animated animate__bounce animate__delay" : ""}`}>
                    Our Popular Categories
                </h2>

                {/* Cards Section */}

                <div className='grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center'>

                    <div className='mt-10 space-y-3 flex flex-col items-center bg-slate-100 px-6 py-4 border-4 border-slate-200 rounded-2xl shadow-lg mx-auto shadow-gray-400 relative transition-all duration-400 hover:bg-slate-300 hover:-translate-y-2'>
                        <div className='absolute -top-14'>
                            <Image
                                className='w-20 h-20 border-4 border-gray-200 rounded-full bg-slate-50 p-2 shadow-lg'
                                src={storyImg}
                                alt='Story Image'
                                width={300}
                                height={300}
                            >
                            </Image>
                        </div>
                        <h2 className='font-bold text-3xl text-center pt-4 text-purple-600'>Story Collection</h2>
                        <p className='font-semibold text-gray-800 text-justify pt-4 pb-3'>Discover captivating tales, timeless classics, and modern fiction that spark imagination and entertain readers of all ages.</p>

                        <p className='text-gray-500 flex items-center gap-2'><GiCheckMark className='text-green-500 w-5 h-5'></GiCheckMark> Explore fiction, romance, mystery & adventure</p>
                        <p className='text-gray-500 flex items-center gap-2'><GiCheckMark className='text-green-500 w-5 h-5'></GiCheckMark> Perfect for entertainment and imagination</p>
                        <p className='text-gray-500 flex items-center gap-2'><GiCheckMark className='text-green-500 w-5 h-5'></GiCheckMark> Read bestselling novels and classics</p>
                        <Button className="my-4 transition-all duration-300 hover:bg-blue-700 hover:-translate-y-1">Explore Stories</Button>

                    </div>

                    <div className='mt-10 space-y-3 flex flex-col items-center bg-slate-100 px-6 py-4 border-4 border-slate-200 rounded-2xl shadow-lg mx-auto shadow-gray-400 relative transition-all duration-400 hover:bg-slate-300 hover:-translate-y-2'>
                        <div className='absolute -top-14'>
                            <Image
                                className='w-20 h-20 border-4 border-gray-200 rounded-full bg-slate-50 p-2 shadow-lg'
                                src={leptopImg}
                                alt='Story Image'
                                width={300}
                                height={300}
                            >
                            </Image>
                        </div>
                        <h2 className='font-bold text-3xl text-center pt-4 text-purple-600'>Tech Hub</h2>
                        <p className='font-semibold text-gray-800 text-justify pt-4 pb-3'>Learn programming, artificial intelligence, cybersecurity, web development, and the latest innovations shaping the future.</p>

                        <p className='text-gray-500 flex items-center gap-2'><GiCheckMark className='text-green-500 w-5 h-5'></GiCheckMark> Learn programming, AI, and web development</p>
                        <p className='text-gray-500 flex items-center gap-2'><GiCheckMark className='text-green-500 w-5 h-5'></GiCheckMark> Explore modern software and tools</p>
                        <p className='text-gray-500 flex items-center gap-2'><GiCheckMark className='text-green-500 w-5 h-5'></GiCheckMark> Stay updated with tech trends and try to adapt with tech</p>
                        <Button className="my-4 transition-all duration-300 hover:bg-blue-700 hover:-translate-y-1">Explore Stories</Button>

                    </div>

                    <div className='mt-10 space-y-3 flex flex-col items-center bg-slate-100 px-6 py-4 border-4 border-slate-200 rounded-2xl shadow-lg mx-auto shadow-gray-400 relative transition-all duration-400 hover:bg-slate-300 hover:-translate-y-2'>
                        <div className='absolute -top-14'>
                            <Image
                                className='w-20 h-20 border-4 border-gray-200 rounded-full bg-slate-50 p-2 shadow-lg'
                                src={scienceImg}
                                alt='Story Image'
                                width={300}
                                height={300}
                            >
                            </Image>
                        </div>
                        <h2 className='font-bold text-3xl text-center pt-4 text-purple-600'>Science World</h2>
                        <p className='font-semibold text-gray-800 text-justify pt-4 pb-3'>Explore the wonders of physics, chemistry, biology, astronomy, and groundbreaking scientific discoveries.</p>

                        <p className='text-gray-500 flex items-center gap-2'><GiCheckMark className='text-green-500 w-5 h-5'></GiCheckMark> Understand physics, chemistry & biology</p>
                        <p className='text-gray-500 flex items-center gap-2'><GiCheckMark className='text-green-500 w-5 h-5'></GiCheckMark> Discover space and universe secrets</p>
                        <p className='text-gray-500 flex items-center gap-2'><GiCheckMark className='text-green-500 w-5 h-5'></GiCheckMark> Learn through real-world science facts</p>
                        <Button className="my-4 transition-all duration-300 hover:bg-blue-700 hover:-translate-y-1">Explore Stories</Button>

                    </div>

                    <div className='mt-10 space-y-3 flex flex-col items-center bg-slate-100 px-6 py-4 border-4 border-slate-200 rounded-2xl shadow-lg mx-auto shadow-gray-400 relative transition-all duration-400 hover:bg-slate-300 hover:-translate-y-2'>
                        <div className='absolute -top-14'>
                            <Image
                                className='w-20 h-20 border-4 border-gray-200 rounded-full bg-slate-50 p-2 shadow-lg'
                                src={historyImg}
                                alt='Story Image'
                                width={300}
                                height={300}
                            >
                            </Image>
                        </div>
                        <h2 className='font-bold text-3xl text-center pt-4 text-purple-600'>History Archive</h2>
                        <p className='font-semibold text-gray-800 text-justify pt-4 pb-3'>Travel through ancient civilizations, world wars, famous leaders, and events that shaped human history.</p>

                        <p className='text-gray-500 flex items-center gap-2'><GiCheckMark className='text-green-500 w-5 h-5'></GiCheckMark> Learn ancient civilizations & world events</p>
                        <p className='text-gray-500 flex items-center gap-2'><GiCheckMark className='text-green-500 w-5 h-5'></GiCheckMark> Discover famous leaders and wars</p>
                        <p className='text-gray-500 flex items-center gap-2'><GiCheckMark className='text-green-500 w-5 h-5'></GiCheckMark> Understand human evolution and culture</p>
                        <Button className="my-4 transition-all duration-300 hover:bg-blue-700 hover:-translate-y-1">Explore Stories</Button>

                    </div>


                </div>
            </div>
        );
    };

    export default PopularCategories;