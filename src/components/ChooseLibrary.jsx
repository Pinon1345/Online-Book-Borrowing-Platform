"use client";

import React, { useEffect, useState } from 'react';

import { motion } from "framer-motion";
import { Card } from '@heroui/react';

const features = [
    {
        title: "24/7 Access",
        desc: "Browse and borrow books anytime, anywhere without limitations.",
    },
    {
        title: "5000+ Books Collection",
        desc: "Huge library of Story, Tech, Science and academic books.",
    },
    {
        title: "Easy Borrowing System",
        desc: "Borrow books in just a few clicks—fast and hassle-free.",
    },
    {
        title: "Secure Authentication",
        desc: "Your account and data are protected with modern security.",
    },
    {
        title: "Fast & Modern UI",
        desc: "Smooth, responsive experience built for students.",
    },
    {
        title: "Smart Categorization",
        desc: "Find books quickly using filters and categories.",
    },
];
const ChooseLibrary = () => {

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
        <section className="pt-10 pb-16 px-4 md:px-12 bg-white">
            {/* Heading */}
            <div className="text-center mb-12">
                <h2
                    className={`${show ? "text-3xl md:text-4xl font-bold text-blue-600  text-center pt-2 animate__animated animate__jello animate__delay" : ""}`}>
                    Why Choose Our Library
                </h2>
                <p className="text-gray-500 mt-4">
                    Everything you need for a modern digital reading experience
                </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((item, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Card className="shadow-md border hover:shadow-xl transition-all">
                            <div className='p-6'>

                                <h3 className="text-xl font-bold text-blue-700 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-sm">{item.desc}</p>

                            </div>

                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ChooseLibrary;