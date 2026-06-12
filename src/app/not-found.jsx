"use client";

import React from 'react';

import Link from "next/link";
import { FiHome } from "react-icons/fi";
import { HiOutlineBookOpen } from "react-icons/hi2";

const NotFoundPage = () => {
    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-4 sm:px-6 lg:px-8">

            {/*  Background (responsive sizes) */}
            <div className="absolute -top-32 -left-32 sm:-top-40 sm:-left-40 h-75 w-75 sm:h-125 sm:w-125 rounded-full bg-blue-100 blur-3xl opacity-50 animate-pulse"></div>
            <div className="absolute -bottom-32 -right-32 sm:-bottom-40 sm:-right-40 h-75 w-75 sm:h-125 sm:w-125 rounded-full bg-purple-100 blur-3xl opacity-50 animate-pulse"></div>

            {/*  Floating Books (hidden on very small screens) */}
            <div className="absolute top-10 left-4 sm:top-20 sm:left-16 text-2xl sm:text-4xl opacity-20 animate-bounce">
                📘
            </div>
            <div className="absolute top-20 right-6 sm:top-40 sm:right-20 text-3xl sm:text-5xl opacity-20 animate-bounce delay-150">
                📗
            </div>
            <div className="absolute bottom-16 left-8 sm:bottom-32 sm:left-24 text-2xl sm:text-4xl opacity-20 animate-bounce delay-300">
                📕
            </div>

            {/*  MAIN CARD WRAPPER */}
            <div className="relative z-10 w-full max-w-sm sm:max-w-xl lg:max-w-2xl">

                {/* Glow Border */}
                <div className="absolute -inset-1 rounded-2xl sm:rounded-3xl bg-linear-to-r from-blue-200 via-purple-200 to-blue-200 opacity-50 blur-xl"></div>

                {/* Glass Card */}
                <div className="relative rounded-2xl sm:rounded-3xl border border-white/40 bg-white/70 backdrop-blur-xl shadow-2xl p-6 sm:p-10 text-center">

                    {/* Icon */}
                    <div className="mx-auto flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl bg-linear-to-br from-blue-50 to-purple-50 shadow-md">
                        <HiOutlineBookOpen className="text-3xl sm:text-4xl text-blue-600" />
                    </div>

                    {/* 404 */}
                    <h1 className="mt-5 sm:mt-6 text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-gray-900">
                        404
                    </h1>

                    {/* Subtitle */}
                    <h2 className="mt-2 text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 leading-snug">
                        This page is lost in the library
                    </h2>

                    {/* Description */}
                    <div className="mt-5 sm:mt-6 rounded-xl sm:rounded-2xl bg-white/60 border border-gray-100 p-4 sm:p-5 shadow-sm">
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                            The book or page you are looking for does not exist, has been moved,
                            or is currently unavailable in our digital library system.
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">

                        <Link
                            href="/"
                            className="group flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 px-5 sm:px-6 py-3 text-sm sm:text-base text-white font-medium shadow-lg transition-all hover:scale-105 hover:shadow-blue-300"
                        >
                            <FiHome className="group-hover:rotate-12 transition" />
                            Go Home
                        </Link>

                        <Link
                            href="/all-books"
                            className="rounded-xl border border-gray-200 px-5 sm:px-6 py-3 text-sm sm:text-base font-medium text-gray-700 hover:bg-gray-50 transition hover:scale-105"
                        >
                            Browse Library
                        </Link>

                    </div>

                    {/* Quote */}
                    <p className="mt-6 sm:mt-8 text-[10px] sm:text-xs text-gray-400 italic">
                        “A reader lives a thousand lives before he dies.”
                    </p>

                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;