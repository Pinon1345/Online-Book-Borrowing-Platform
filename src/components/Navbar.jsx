"use client";

import navImage from "@/assets/A8-(Logo-2).png"
import { useState } from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="w-full border-b rounded-b-2xl bg-slate-100 shadow-lg shadow-gray-300 sticky top-0 z-50">
            <div className="max-w-11/12 mx-auto px-4 py-3 flex items-center justify-between">

                {/* Logo */}

                <Link href="/">
                    <div className="flex flex-row gap-2.5 items-center">

                        <Image
                            className="w-13 h-13 border-2 border-gray-100 rounded-2xl"
                            src={navImage}
                            alt="Navigation Logo"
                            width={100}
                            height={100}
                        >
                        </Image>
                        <h2 className="text-3xl font-bold text-blue-700">BookBorrow</h2>

                    </div>
                </Link>

                {/* Desktop Menu */}

                <div className="hidden md:flex items-center gap-6 font-medium text-gray-700">
                    <Link href="/" className="hover:text-blue-600 text-lg">Home</Link>
                    <Link href="/books" className="hover:text-blue-600 text-lg">All Books</Link>
                    <Link href="/categories" className="hover:text-blue-600 text-lg">Categories</Link>
                    <Link href="/dashboard" className="hover:text-blue-600 text-lg">My Profile</Link>
                </div>

                {/* Right Button (Desktop) */}

                <div className="hidden md:block">
                    <Button className="btn-primary">
                        Login
                    </Button>
                </div>

                {/* Mobile Button */}

                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-2xl p-2 rounded-md transition-all duration-300 ease-in-out text-slate-700 hover:text-blue-600 hover:bg-slate-100 hover:shadow-lg hover:shadow-blue-500/20 hover:scale-110"
                >
                    <AiOutlineMenu></AiOutlineMenu>
                </button>
            </div>

            {/* Mobile Menu */}

            {open && (
                <div className="md:hidden px-4 pb-4 flex flex-col gap-3 bg-slate-50 border-t border-gray-300 pt-3 border-b rounded-b-2xl">

                    <Link
                        onClick={() => setOpen(false)} href="/"
                        className="px-3 py-1 rounded-md text-gray-600 transition-colors duration-300 hover:bg-slate-200 hover:text-gray-800 hover:border-2 border-gray-200 hover:font-semibold">

                        Home

                    </Link>

                    <Link
                        onClick={() => setOpen(false)} href="/books"
                        className="px-3 py-1 rounded-md text-gray-600 transition-colors duration-300 hover:bg-slate-200 hover:text-gray-800 hover:border-2 border-gray-200 hover:font-semibold">

                        All Books

                    </Link>

                    <Link
                        onClick={() => setOpen(false)} href="/categories"
                        className="px-3 py-1 rounded-md text-gray-600 transition-colors duration-300 hover:bg-slate-200 hover:text-gray-800 hover:border-2 border-gray-200 hover:font-semibold">

                        Categories

                    </Link>

                    <Link
                        onClick={() => setOpen(false)} href="/dashboard"
                        className="px-3 py-1 rounded-md text-gray-600 transition-colors duration-300 hover:bg-slate-200 hover:text-gray-800 hover:border-2 border-gray-200 hover:font-semibold">

                        My Profile

                    </Link>

                    <Button className="mx-3 mb-2 mt-2 btn-primary p-3 text-lg">
                        Login
                    </Button>
                </div>
            )}
        </nav>
    );
}