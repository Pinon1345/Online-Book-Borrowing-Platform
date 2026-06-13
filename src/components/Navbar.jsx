"use client";

import navImage from "@/assets/A8-(Logo-2).png"
import { useState } from "react";
import Link from "next/link";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineMenu } from "react-icons/ai";
import { authClient } from "@/lib/auth-client";

export default function Navbar() {

    const userData = authClient.useSession()
    const user = userData.data?.user

    console.log(user);

    const [open, setOpen] = useState(false);

    const handleSignOut = async () => {
        await authClient.signOut()
    }

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
                    <Link href="/allBooks" className="hover:text-blue-600 text-lg">All Books</Link>
                    <Link href="/categories" className="hover:text-blue-600 text-lg">Categories</Link>
                    <Link href="/profile" className="hover:text-blue-600 text-lg">My Profile</Link>
                </div>

                {/* Right Button (Desktop) */}

                <div className="hidden md:block">
                    {!user && <div className="flex items-center gap-3">
                        <Link href={"/signin"} className="block">
                            <Button className="btn-primary">
                                Sign In
                            </Button>
                        </Link>

                        <Link href={"/signup"} className="block">
                            <Button className="btn-primary">
                                Sign Up
                            </Button>
                        </Link>
                    </div>}

                    {
                        user && <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <h2 className="text-xl font-semibold">Hello! <span className="text-2xl text-blue-600 font-bold">{user?.name}</span></h2>
                                <Avatar>
                                    <Avatar.Image
                                        alt={user?.name}
                                        src={user?.image}
                                        referrerPolicy="no-referrer"
                                    />
                                    <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                                </Avatar>
                            </div>

                            <Button
                                onClick={handleSignOut}
                                className="btn-primary">
                                Sign Out
                            </Button>


                        </div>
                    }

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
                        onClick={() => setOpen(false)} href="/allBooks"
                        className="px-3 py-1 rounded-md text-gray-600 transition-colors duration-300 hover:bg-slate-200 hover:text-gray-800 hover:border-2 border-gray-200 hover:font-semibold">

                        All Books

                    </Link>

                    <Link
                        onClick={() => setOpen(false)} href="/categories"
                        className="px-3 py-1 rounded-md text-gray-600 transition-colors duration-300 hover:bg-slate-200 hover:text-gray-800 hover:border-2 border-gray-200 hover:font-semibold">

                        Categories

                    </Link>

                    <Link
                        onClick={() => setOpen(false)} href="/profile"
                        className="px-3 py-1 rounded-md text-gray-600 transition-colors duration-300 hover:bg-slate-200 hover:text-gray-800 hover:border-2 border-gray-200 hover:font-semibold">

                        My Profile

                    </Link>

                    {!user && <div className="flex items-center">
                        <Link href={"/signin"} className="block">
                            <Button className="mx-3 mb-2 mt-2 btn-primary p-3 text-lg">
                                Sign In
                            </Button>
                        </Link>

                        <Link href={"/signup"} className="block">
                            <Button className="mx-3 mb-2 mt-2 btn-primary p-3 text-lg">
                                Sign Up
                            </Button>
                        </Link>
                    </div>}

                    {
                        user && <div className="flex flex-col items-center gap-4 mb-2">
                            <div className="flex flex-col items-center mb-2 gap-3">
                                <h2 className="text-xl font-semibold">Hello! <span className="text-2xl md:text-3xl text-blue-600 font-bold">{user?.name}</span></h2>
                                <Avatar>
                                    <Avatar.Image
                                        alt={user?.name}
                                        src={user?.image}
                                        referrerPolicy="no-referrer"
                                    />
                                    <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                                </Avatar>
                            </div>

                            <Button
                                onClick={handleSignOut}
                                className="btn-primary">
                                Sign Out
                            </Button>


                        </div>
                    }


                </div>
            )}
        </nav>
    );
}